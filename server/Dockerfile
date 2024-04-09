FROM python:3.11

WORKDIR /app

RUN pip install flask flask_pymongo dnspython python-dotenv pathlib flask_cors pymongo requests

COPY . .

EXPOSE 4000

CMD ["python", "./app.py"] 
