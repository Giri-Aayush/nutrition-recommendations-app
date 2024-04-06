from src.routes import api
from flask import Flask
import os
from flask_cors import CORS
from src.config.config import Config
from dotenv import load_dotenv
from flask_pymongo import PyMongo

load_dotenv()

app = Flask(__name__)

CORS(app, resources={r"/api/*": {"origins": "*"}})

config = Config().dev_config

app.env = config.ENV

app.config['MONGO_URI'] = os.environ.get("MONGO_URI")

mongo = PyMongo(app)

# import models to let the migrate tool know
# from src.models.user_model import User

app.register_blueprint(api, url_prefix="/api")
