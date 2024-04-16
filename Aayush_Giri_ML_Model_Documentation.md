# ML Architecture Documentation

## Overview
This ML architecture is designed to recommend recipes based on a given set of ingredients. It utilizes word embeddings and nearest neighbor search to find the most relevant recipes from a dataset.

## Components
1. **Word Embeddings:**
  - The architecture uses pre-trained word embeddings to represent ingredients as dense vectors in a high-dimensional space.
  - The embeddings are stored in the `embeddings.npy` file.
  - The vocabulary mappings between words and their corresponding integer indices are stored in the `vocab_mappings.pkl` file.

2. **Recipe Dataset:**
  - The recipe dataset is stored in the `EMBEDDING_df.csv` file.
  - It contains information such as recipe titles, ingredients, and directions.

3. **Faiss Index:**
  - The architecture uses the Faiss library to build an index for efficient nearest neighbor search.
  - The index is created using the `IndexFlatIP` class from Faiss, which is suitable for inner product similarity search.
  - The pre-trained embeddings are added to the index.

4. **Prediction Function:**
  - The `predict` function takes a list of ingredients as input and returns a list of recommended recipes.
  - It first computes the embedding for the given ingredients by summing the embeddings of each ingredient and normalizing the result.
  - It then performs a nearest neighbor search using the Faiss index to find the top-k most similar recipes based on the computed embedding.
  - The function returns a list of dictionaries, where each dictionary contains the recipe title, ingredients, and directions.

## Usage
1. Load the necessary files:
  - Load the vocabulary mappings from `vocab_mappings.pkl` using `pickle.load()`.
  - Load the pre-trained embeddings from `embeddings.npy` using `np.load()`.
  - Load the recipe dataset from `EMBEDDING_df.csv` using `pd.read_csv()`.

2. Create the Faiss index:
  - Initialize the `IndexFlatIP` index with the specified embedding dimension.
  - Add the pre-trained embeddings to the index using `index.add()`.

3. Call the `predict` function:
  - Pass a list of ingredients to the `predict` function.
  - Specify the desired number of top-k recommendations.
  - The function will return a list of recommended recipes based on the given ingredients.

## Dependencies
- NumPy
- Faiss
- Pickle
- Pandas
- JSON

## File Structure
- `vocab_mappings.pkl`: Contains the vocabulary mappings between words and their integer indices.
- `embeddings.npy`: Contains the pre-trained word embeddings.
- `EMBEDDING_df.csv`: Contains the recipe dataset.
- `predict_recipies.py`: Contains the code for the ML architecture, including the `predict` function.