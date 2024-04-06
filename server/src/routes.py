from flask import Blueprint
from src.controllers.report_controller import report

# main blueprint to be registered with application
api = Blueprint('api', __name__)

# register user with api blueprint
api.register_blueprint(report, url_prefix="/report")