from flask import request, Response, json, Blueprint

report = Blueprint("report", __name__)

@report.route('/create', methods = ["POST"])
def create_report():
    return Response(
        response=json.dumps({'status': "success"}),
        status=200,
        mimetype='application/json'
    )


@report.route('/generate-report', methods = ["GET"])
def generate_report_by_ml():
    return Response(
        response=json.dumps({'status': "success"}),
        status=200,
        mimetype='application/json'
    )

@report.route('/list', methods = ["GET"])
def get_report_list():
    return Response(
        response=json.dumps({'status': "success"}),
        status=200,
        mimetype='application/json'
    )


@report.route('/<id>', methods = ["GET"])
def get_report_by_id(id):
    return Response(
        response=json.dumps({'status': "success","id":id,}),
        status=200,
        mimetype='application/json'
    )
    