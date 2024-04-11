import numpy as np
import faiss
import pickle
import pandas as pd
import json

embedding_dim = 300
with open('./src/ml/vocab_mappings.pkl', 'rb') as f:
    vocab_to_int, int_to_vocab = pickle.load(f)
embeddings = np.load('./src/ml/embeddings.npy')
my_array = np.load('./src/ml/my_array.npy')
recipes = pd.read_csv('./src/ml/EMBEDDING_df.csv')


def get_embeddings(ls):
    temp = np.zeros(300)
    cnt = 1
    for member in ls:
        if member in vocab_to_int:
            temp = temp + (my_array[vocab_to_int[member]])
            cnt = cnt + 1
    return temp


index = faiss.IndexFlatIP(embedding_dim)
index.add(embeddings)


def predict(ls, k):
    query_embedding = get_embeddings(ls)
    _, indices = index.search(np.expand_dims(query_embedding, axis=0), k)

    dish = []

    for idx in indices[0]:
        dish.append({
            "dish_name": recipes['title'][idx],
            "ingredients": json.loads(recipes['ingredients'][idx]),
            "instruction": json.loads(recipes['directions'][idx])
        })
    return dish
