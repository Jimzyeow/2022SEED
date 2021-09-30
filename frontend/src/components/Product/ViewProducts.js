import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../useFetch";
const ViewProducts = () => {
    const { data: productlist, isPending, error } = useFetch('http://localhost:8000/products');


    return ( 
        <div className="blog-list">
            {error && <div>{ error }</div>}
            {isPending && <div>Loading....</div>}
            {productlist && 
            productlist.map((product) =>(
                <div className="row product" key={product.id}>
      <div className="col-md-2">
        <img src={product.image} alt="Sample Image" height="150" />
      </div>
      <Link to={`/products/${product.id}`}>
      <div className="col-md-8 product-detail">
        <h4>{product.title}</h4>
        <p>{product.description}</p>
      </div>
      </Link>
      <div className="col-md-2 product-price">
        {product.price}
      </div>
      <div className="col-md-2 product-quantity">
        Qty:{product.qty}
      </div>
      <div className="col-md-2 product-quantity">
        Category:{product.category_id}
      </div>
    </div>
            ))
            }
        </div>

    );
}
 
export default ViewProducts;