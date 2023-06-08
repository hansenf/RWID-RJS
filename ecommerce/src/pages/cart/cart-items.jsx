import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = 
    useContext(ShopContext);

    return (
        <div className="cartItem">
            <img src={productImage} alt="product"/>
            <div className="description">
                <p>
                    <b>{productName}</b>
                </p>
                <p> Price: ${price} </p>
                <div className="countHandler">
                    {/* kurang */}
                    <button 
                        onClick={() => removeFromCart(id)}
                    > - 
                    </button>

                    {/* input */}
                    <input
                        value={cartItems[id]}
                        onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
                    />

                    {/* tambah */}
                    <button
                        onClick={() => addToCart(id)}
                    > + 
                    </button>
                </div>
            </div>
        </div>
    );
};