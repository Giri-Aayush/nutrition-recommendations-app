
# Recipe Recommendation AI

This is a web application that recommends recipes to users based on the ingredients they provide. The frontend is built with React, while the backend is built using Flask. An ML model is built which forms the core of the application, and the application is also containerized using Docker for easy deployment and management.

## Documentation

- [How to Install](./Aayush_Giri_How_To_Install.md)
- [How to Run](./Aayush_Giri_How_To_Run.md)
- [Backend Documentation](./Aayush_Giri_Backend-Documentation.md)
- [ML Model Documentation](./Aayush_Giri_ML_Model_Documentation.md)

## Working and Features

### Data and Model

The core of the recommendation engine is a machine learning model trained on a dataset of recipes and ingredients. The model utilizes word embeddings and nearest neighbor search to find the most relevant recipes based on the given ingredients. The pre-trained word embeddings are used to represent ingredients as dense vectors in a high-dimensional space, allowing for efficient similarity search.

The model architecture consists of the following components:
- Word Embeddings: Pre-trained embeddings are used to represent ingredients as dense vectors.
- Recipe Dataset: A dataset containing recipe titles, ingredients, and directions.
- Faiss Index: An efficient index for nearest neighbor search using the Faiss library.
- Prediction Function: A function that takes a list of ingredients and returns the top-k most similar recipes.

### Backend and Frontend

The backend of the application is built using Flask, a popular Python web framework. It provides two main endpoints:
- `POST /create`: Creates a new chat with the provided ingredients and recipe number.
- `GET /list`: Retrieves a list of chats for the client's IP address.

The backend interacts with a MongoDB database to store and retrieve chat data. The `MONGO_URI` environment variable should be set to the MongoDB connection URI.

The frontend of the application is developed using React, a powerful JavaScript library for building user interfaces. It provides an intuitive and responsive user experience, allowing users to input ingredients, specify the desired number of recipes, and view the recommended recipes.

### Containerization with Docker

To ensure easy deployment and management, the application is containerized using Docker. Docker Compose is used to define and run the multi-container application, including the frontend, backend, and database containers.

## Getting Started

### Prerequisites

Before running the application, make sure you have the following installed:
- Docker: [Install Docker](https://docs.docker.com/get-docker/)

### Installing and Running the Application

To install and run the application, follow the steps based on your operating system:

#### Windows

1. Open a command prompt or PowerShell window.
2. Navigate to the project directory.
3. Start the application using Docker Compose:
```bash
docker-compose up
```
4. Wait for the containers to build and start. Once the process is complete, you can access the application in your web browser at [http://localhost:3000](http://localhost:3000).

#### Linux

1. Open a terminal.
2. Navigate to the project directory.
3. Start the application using Docker Compose:
```bash
docker compose up
```

4. Wait for the containers to build and start. Once the process is complete, you can access the application in your web browser at [http://localhost:3000](http://localhost:3000).

## Tech Stack

- Flask
- React
- Python
- MongoDB
- Docker
- NumPy
- Faiss
- Pandas

For more detailed information, please refer to the individual documentation files linked above.
This README file provides an overview of the Recipe Recommendation AI application, including its features, architecture, and instructions for installation and running the application using Docker. It also includes links to more detailed documentation files for specific aspects of the application, such as installation, usage, backend, and ML model.