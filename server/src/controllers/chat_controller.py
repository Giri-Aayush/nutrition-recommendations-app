from flask import request, Response, json, Blueprint
from pymongo import MongoClient
import os
import datetime
from src.ml.predict_recipes import predict
import json as jsonpy


chat = Blueprint("chat", __name__)


client = MongoClient(os.environ.get("MONGO_URI"))  # host uri
db = client.main  # Select the database
chats_db = db.chats  # Select the collection name


@chat.route("/create", methods=["POST"])
def create_chat():
    data = request.get_json()

    ingredients = data.get("ingredients", [])
    recipe_number = int(data.get("recipe_number", 0))
    ip_address = request.remote_addr

    if recipe_number <= 0 or recipe_number >= 5:
        return Response(
            response=json.dumps({
                "status": "error",
                "message": "Recipe number must be between 1 and 5"
            }),
            status=400,
            mimetype="application/json",
        )

    if len(ingredients) == 0:
        return Response(
            response=json.dumps({
                "status": "error",
                "message": "Ingredients are required"
            }),
            status=400,
            mimetype="application/json",
        )

    dish_list = predict(ingredients, recipe_number)

    current_dish_id_list = []

    for dish in dish_list:
        current_datetime = datetime.datetime.now()
        try:
            chat = chats_db.insert_one({
                "dish_name": dish['dish_name'],
                "instruction": dish['instruction'],
                "ingredients": dish['ingredients'],
                "user_ingredients": ingredients,
                "ip_address": ip_address,
                "created_at": current_datetime
            })
        except Exception as e:
            return Response(
                response=json.dumps({
                    "status": "error",
                    "message": str(e)
                }),
                status=500,
                mimetype="application/json",
            )

        current_dish_id_list.append(str(chat.inserted_id))

    return Response(
        response=json.dumps({
            "status": "success",
            "message": "Report created successfully",
            "data": {
                "dish_id_list": current_dish_id_list
            }
        }),
        status=200,
        mimetype="application/json",
    )


@chat.route("/list", methods=["GET"])
def get_chat_list():
    ip_address = request.remote_addr

    chats = chats_db.find({
        "ip_address": ip_address
    }).sort("created_at", -1)

    def mapChat(item):
        return {
            "id": str(item.get("_id")),
            "dish_name": item.get("dish_name"),
            "instruction": item.get("instruction"),
            "ingredients": item.get("ingredients"),
            "user_ingredients": item.get("user_ingredients"),
            "ip_address": item.get("ip_address")
        }

    new_chats = list(map(mapChat, chats))

    return Response(
        response=json.dumps({
            "chats": new_chats,
            "status": "success"
        }),
        status=200,
        mimetype="application/json",
    )
