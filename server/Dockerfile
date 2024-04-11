FROM python:3.11

WORKDIR /app

RUN pip install flask dnspython python-dotenv pathlib flask_cors pymongo pandas numpy faiss-cpu setuptools packaging

COPY . .

EXPOSE 4000

CMD ["python", "./app.py"] 
