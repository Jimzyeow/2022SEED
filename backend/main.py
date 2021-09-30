from typing import Optional
from fastapi import Depends, FastAPI, HTTPException, File, UploadFile
import pickle
import os
import pandas as pd

DB_HOME = os.getcwd() + "\data\\" #  "./data/"

import json

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/user")
def add_user(email, password):
    print(DB_HOME+email)
    file = open(DB_HOME + email, 'wb+')
    db = {}
    db["username"] = email
    db["password"] = password

    pickle.dump(db, file) 
    file.close()

@app.get("/user")
def authenthicate_user(email, password):
    try:
        db_user = pd.read_pickle(DB_HOME+email)
    except:
        raise HTTPException(status_code=400, detail="No user found")
    
    print(db_user)

    if db_user["password"] == password:
        return email
    else:
        raise HTTPException(status_code=400, detail="User not authenticated")

@app.get("/{category}/products")
def show_products(category: int):
    filtered_dict = []
    with open('products.json', encoding='utf-8') as f:
        data = json.load(f)
        for i in data:
            if i['category_id'] == category:
                filtered_dict.append(i)
    return filtered_dict


@app.get("/{category}/products/{product_id}")
def show_products(product_id: int, category: int):
    filtered_dict = []
    with open('products.json', encoding='utf-8') as f:
        data = json.load(f)
        for i in data:
            if i['category_id'] == category and i['id'] == product_id:
                filtered_dict.append(i)
    return filtered_dict


@app.get("/categories")
def show_products():
    with open("categories.json", encoding='utf-8') as f:
        data = json.load(f)
    return data
