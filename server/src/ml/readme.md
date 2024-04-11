## ML Model Used

The `predict_recipes.py` script utilizes a machine learning model to predict recipes based on user preferences. The model used is a deep learning model trained on a large dataset of recipes and their corresponding ingredients.

The model architecture consists of multiple layers of neural networks, including convolutional layers, recurrent layers, and fully connected layers. These layers are designed to extract meaningful features from the input data and make accurate predictions.

During training, the model learns to map the input features, such as user preferences and dietary restrictions, to the most suitable recipes. It is trained using a combination of supervised learning techniques and optimization algorithms to minimize the prediction error.

Once the model is trained, it can be used to predict recipes by providing the user preferences as input. The model then generates a list of recommended recipes based on the learned patterns and similarities in the dataset.

The `predict_recipes.py` script loads the trained model from a saved model file and uses it to make predictions. It preprocesses the user preferences, feeds them into the model, and retrieves the predicted recipes.

Overall, the ML model used in `predict_recipes.py` enables the application to provide personalized recipe recommendations based on user preferences, making it a valuable tool for users seeking nutrition recommendations.