from flask import Flask
import os
from src.config.config import Config
from dotenv import load_dotenv
from flask_pymongo import pymongo

load_dotenv()

app = Flask(__name__)

config = Config().dev_config

app.env = config.ENV

app.config['MONGO_URI'] = os.environ.get("MONGO_URI")

mongo = pymongo.MongoClient(os.environ.get("MONGO_URI"))

# import models to let the migrate tool know
# from src.models.user_model import User

from src.routes import api
app.register_blueprint(api, url_prefix = "/api")