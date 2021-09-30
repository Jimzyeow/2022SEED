import { useParams } from "react-router";
import { useState, useEffect } from "react";
import useFetch from "../useFetch";
const ProductDetails = () => {
    const { id } = useParams();
    const { data, error } = useFetch('http://localhost:8000/products/'+id);
    const [selectedQty, setSelectedQty] = useState(1);
    const handleClick = (e) => {
        e.preventDefault();
        console.log(selectedQty);
        const productId = document.getElementById('product-id').value;
        const productPrice = document.getElementById('product-price').value;
        const totalPrice = productPrice * selectedQty;
        const customerId = 666;
        console.log(productId);
        console.log(productPrice);
        console.log(totalPrice);
        localStorage.setItem("emailAddress", "test@gmail.com");
        const emailAddress = localStorage.getItem("emailAddress");
        fetch('http://localhost:8000/orderitem', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            //email, product_id
            
            body: JSON.stringify({emailAddress,productId})
        }).then((res) =>{
            console.log('new order item added');
            console.log(res);
        })
        
      }
    return ( <div className="product-details">
        <h2>Product Details</h2>
        {data && 
        [data].map((product,i) =>(
            <div className="row-product" key={product.id}>
                <div className="col-md-2">
                <img src={product.image} alt="Sample Image" height="150" />
                    </div>
                    <div className="col-md-8 product-detail">
                        <h4> {product.title}</h4>
                        <p>{product.description}</p>
                    </div>
                    <div className="col-md-2 product-price">
                        Price:{product.price}
                    </div>
                    <div className="col-md-2 product-quantity">
                        Stock:{product.qty}
                    </div>
                    <form onSubmit={handleClick}>
                    <input type ="number" required value={product.price} id="product-price" hidden/>
                    <input type ="text" required value={product.id} id="product-id" hidden/>
                    Quantity to Buy: <input type ="text"  required value={selectedQty} onChange={(e) => setSelectedQty(e.target.value)}/>
                    <button>Add To Cart</button>
                    </form>
                    
            </div>
        ))
        }
    </div> );
}
 
export default ProductDetails;