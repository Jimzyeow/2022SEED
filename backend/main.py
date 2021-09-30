from typing import Optional

from fastapi import FastAPI

import json

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/{category}/products")
def show_products(category: int):
    filtered_dict = []
    with open('products.json', encoding='utf-8') as f:
        data = json.load(f)
        for i in data:
            if i['category_id'] == category:
                filtered_dict.append(i)
    return filtered_dict


@app.get("/categories")
def show_products():
    with open("categories.json", encoding='utf-8') as f:
        data = json.load(f)
    return data


