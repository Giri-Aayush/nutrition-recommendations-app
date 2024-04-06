from flask import request, Response, json, Blueprint

report = Blueprint("report", __name__)


@report.route("/create", methods=["POST"])
def create_report():
    data = request.get_json()  # Get data from request body

    # Now you can access the data like this:
    activity = data.get("activity", 1)
    age = data.get("age", 15)
    height = data.get("height", 0)
    person_name = data.get("person_name", "")
    report_name = data.get("report_name", "")
    weight = data.get("weight", 0)

    

    return Response(
        response=json.dumps({
            "status": "success",
            "message": "Report created successfully",
            "data": data
        }),
        status=200,
        mimetype="application/json",
    )


@report.route("/generate-report", methods=["GET"])
def generate_report_by_ml():
    return Response(
        response=json.dumps({"status": "success"}),
        status=200,
        mimetype="application/json",
    )


@report.route("/list", methods=["GET"])
def get_report_list():
    return Response(
        response=json.dumps({"status": "success"}),
        status=200,
        mimetype="application/json",
    )


@report.route("/<id>", methods=["GET"])
def get_report_by_id(id):
    return Response(
        response=json.dumps(
            {
                "status": "success",
                "id": id,
            }
        ),
        status=200,
        mimetype="application/json",
    )
