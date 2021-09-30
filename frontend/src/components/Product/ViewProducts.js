import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../useFetch";
const ViewProducts = () => {
    const { id } = useParams();
    const { data: productlist, isPending, error } = useFetch(`http://localhost:8000/${id}/products`);
    console.log(id);

    return ( 
        <div className="blog-list">
            {error && <div>{ error }</div>}
            {isPending && <div>Loading....</div>}
         
            {productlist && 
            productlist.filter(function(product){
              return product.category_id == id;
           }).map((filteredProduct) =>(
                <div className="row-product" key={filteredProduct.id}>
      <div className="col-md-2">
        <img src={filteredProduct.image} alt="Sample Image" height="150" />
      </div>
      
      <div className="col-md-8 product-detail">
      <Link to={`/products/${filteredProduct.id}`}>
        <h4>{filteredProduct.title}</h4>
        </Link>
        <p>{filteredProduct.description}</p>
      </div>
  
      <div className="col-md-2 product-price">
        {filteredProduct.price}
      </div>
      <div className="col-md-2 product-quantity">
        Qty:{filteredProduct.qty}
      </div>
      <div className="col-md-2 product-quantity">
        Category:{filteredProduct.category_id}
      </div>
    </div>
            ))
            }
        </div>

    );
}
 
export default ViewProducts;