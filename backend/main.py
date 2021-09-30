from typing import Optional
from fastapi import Depends, FastAPI, HTTPException, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import pickle
import os
import pandas as pd

DB_HOME = os.getcwd() + "\data\\" #  "./data/"

import json

app = FastAPI()

# Middleware

origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_product(product_id):
    product = []
    with open('products.json', encoding='utf-8') as f:
        data = json.load(f)
        for dic in data:
            if int(dic['id']) == int(product_id):
                return dic
    return "not found"

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/signup")
def add_user(email, password):
    print(DB_HOME+email)
    file = open(DB_HOME + email, 'wb+')
    db = {}
    db["username"] = email
    db["password"] = password
    db["cart"] = {}

    pickle.dump(db, file) 
    file.close()

@app.post("/user")
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

@app.get("/userDetails")
def read_user(email):
    try:
        db_user = pd.read_pickle(DB_HOME+email)
    except:
        raise HTTPException(status_code=400, detail="No user found")
    
    return (db_user)

@app.post("/cart")
def add_product(email, product_id):
    db = pd.read_pickle(DB_HOME+email)
    file = open(DB_HOME + email, 'wb+')

    if product_id not in db["cart"]:
        db["cart"][product_id] = 0
    db["cart"][product_id] += 1

    pickle.dump(db, file) 
    file.close()

@app.post("/cartRemove")
def remove_product(email, product_id):
    db = pd.read_pickle(DB_HOME+email)
    file = open(DB_HOME + email, 'wb+')

    if product_id in db["cart"]:
        db["cart"][product_id] -= 1
        if db["cart"][product_id] == 0:
            del db["cart"][product_id]
    else:
        raise HTTPException(status_code=400, detail="Product not found")
    
    pickle.dump(db, file) 
    file.close()

@app.get("/cart")
def display_cart(email):
    db = pd.read_pickle(DB_HOME+email)

    cart_dic = []

    for key, value in db["cart"].items():
        print(key, value)
        cart_dic.append([get_product(key), value])

    return cart_dic

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
    return filtered_dict[0]


@app.get("/categories")
def show_products():
    with open("categories.json", encoding='utf-8') as f:
        data = json.load(f)
    return data

