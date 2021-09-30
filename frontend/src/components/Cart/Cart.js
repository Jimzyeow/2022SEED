import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import { NavLink } from "react-router-dom";


function Cart(){ 
    return(
        <div className="row">
            <h1 style={{textAlign: 'center'}}>Shopping Cart</h1>
            <div className="col-md-12">
            <table className="table" >
                <thead>
                    <tr>
                        <th></th>
                        <th>Product</th>
                        <th>Product Image</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr key="1">
                            <td><Button className="btn btn-danger">Remove</Button></td>
                            <td>Mens Casual Slim Fit</td>
                            <td><img src="https://m.media-amazon.com/images/I/61BLkfpQP8L._AC_UL1144_.jpg" style={{width:'100px',height:'100px'}}/></td>
                            <td>$20</td>
                            <td>
                                <span className="btn btn-outline-primary" style={{margin:'2px'}} >-</span>
                                <span className="btn btn-light">1</span>
                                <span className="btn btn-outline-primary" style={{margin:'2px'}} >+</span>
                            </td>
                            <td>${23}</td>
                            
                    </tr>
                    <tr key="2">
                            <td><Button className="btn btn-danger">Remove</Button></td>
                            <td>Mens Casual Slim Fit</td>
                            <td><img src="https://m.media-amazon.com/images/I/61BLkfpQP8L._AC_UL1144_.jpg" style={{width:'100px',height:'100px'}}/></td>
                            <td>$20</td>
                            <td>
                                <span className="btn btn-outline-primary" style={{margin:'2px'}} >-</span>
                                <span className="btn btn-light">2</span>
                                <span className="btn btn-outline-primary" style={{margin:'2px'}} >+</span>
                            </td>
                            <td>${23}</td>
                            
                    </tr>
                {/* {
                    ListCart.map((item,key)=>{
                        return(
                            <tr key={key}>    
                            <td><Button className="btn btn-danger" onClick={()=>DeleteCart(key)}>Remove</Button></td>
                            <td>{item.name}</td>
                            <td><img src={item.image} style={{width:'100px',height:'100px'}}/></td>
                            <td>{item.price} $</td>
                            <td>
                                    <span className="btn btn-primary" style={{margin:'2px'}} onClick={()=>DecreaseQuantity(key)}>-</span>
                                    <span className="btn btn-info">{item.quantity}</span>
                                    <span className="btn btn-primary" style={{margin:'2px'}} onClick={()=>IncreaseQuantity(key)}>+</span>
                            </td>
                            <td>{ TotalPrice(item.price,item.quantity)} $</td>
                        </tr>
                        )
                    })
                        
                } */}
                <tr>
                    <td colSpan="5">Total Carts</td>
                    <td colSpan="5">$20</td>
                    {/* <td>{Number(TotalCart).toLocaleString('en-US')} $</td> */}
                </tr>
                </tbody>
              
            </table>
            </div>


            <NavLink
              className="btn btn-primary btn-primary"
              to={`/checkout`}
              exact
            >
              Checkout
            </NavLink>

        </div>
    )
}

export default Cart
