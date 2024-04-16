
## Endpoints

1. `POST /create`
Creates a new chat with the provided ingredients and recipe number.

Request Body
- ingredients (array, required): List of ingredients for the recipe.
- recipe_number (integer, optional): Number of recipes to generate. Default is 0.
    Response
    Success
        - Status Code: 200
        - Body:
    ```bash
            {
            "status": "success",
            "message": "Report created successfully",
            "data": {
                "dish_id_list": ["dish_id_1", "dish_id_2", ...]
            }
            }
    ```
    Error
        - Status Code: 400 (Bad Request)
            - If recipe_number is not between 1 and 5.
            - If ingredients is empty.
        - Status Code: 500 (Internal Server Error)
            -If an exception occurs while inserting the chat into the database.
        - Body:
    ```bash
            {
            "status": "error",
            "message": "Error message"
            }
    ```

2. `GET /list`
Retrieves a list of chats for the client's IP address.
    Response
    Success
        - Status Code: 200
        - Body:
    ```bash
            {
            "chats": [
                {
                "id": "chat_id",
                "dish_name": "Dish name",
                "instruction": "Cooking instructions",
                "ingredients": ["ingredient1", "ingredient2", ...],
                "user_ingredients": ["user_ingredient1", "user_ingredient2", ...],
                "ip_address": "Client IP address"
                },
                ...
            ],
            "status": "success"
            }
    ```
## Database
- MongoDB is used as the database.
- The `MONGO_URI` environment variable should be set to the MongoDB connection URI.
- The database name is main.
- The collection used for storing chats is chats.

## Functionality
1. `create_chat` endpoint
- Receives the ingredients and recipe number from the request body.
- Validates the recipe number to be between 1 and 5.
- Validates that ingredients are provided.
- Calls the `predict` function to generate dish recipes based on the ingredients and recipe number.
- Inserts each generated dish recipe into the `chats` collection in the database.
- Returns the list of inserted dish IDs.

2. `get_chat_list` endpoint
- Retrieves the client's IP address from the request.
- Fetches all chats from the database that match the client's IP address.
- Sorts the chats by the `created_at` field in descending order.
- Maps the retrieved chats to a new format.
- Returns the list of mapped chats.