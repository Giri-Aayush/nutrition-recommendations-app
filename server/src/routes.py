from flask import Blueprint
from src.controllers.chat_controller import chat

# main blueprint to be registered with application
api = Blueprint('api', __name__)

# register user with api blueprint
api.register_blueprint(chat, url_prefix="/chat")
