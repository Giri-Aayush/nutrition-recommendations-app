from flask import request, Response, json, Blueprint
from pymongo import MongoClient
from bson import ObjectId
import os
import requests
import datetime

chat = Blueprint("chat", __name__)


client = MongoClient(os.environ.get("MONGO_URI"))  # host uri
db = client.main  # Select the database
chats_db = db.chats  # Select the collection name


@chat.route("/create", methods=["POST"])
def create_chat():
    data = request.get_json()

    ingredients = data.get("ingredients", [])
    ip_address = request.remote_addr

    if len(ingredients) == 0:
        return Response(
            response=json.dumps({
                "status": "error",
                "message": "Ingredients are required"
            }),
            status=400,
            mimetype="application/json",
        )

    response = requests.post(os.environ.get("ML_URI")+'/pred', json={
        "inp": ingredients
    })

    current_datetime = datetime.datetime.now()
    try:
        chat = chats_db.insert_one({
            "result": response.text.strip(),
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

    return Response(
        response=json.dumps({
            "status": "success",
            "message": "Report created successfully",
            "data": {
                "result": response.text.strip(),
                "ingredients": ingredients
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
            "result": item.get("result"),
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
