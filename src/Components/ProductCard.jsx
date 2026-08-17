import React, {useContext, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Details } from '../App'
import "./Component.css"

export default function ProductCard(props) {
    const {setMobileArray} = useContext(Details)

    const {product} = props

    const {productId, productImg, productName, brand, price, availability, category, description, rating, isLike, quantity, review} = product

    const myFavProduct = () =>{
        setMobileArray((prev) => {

            const updated = {};

            Object.keys(prev).forEach((brand) => {
            updated[brand] = prev[brand].map((item) =>
                item.productId === productId
                ? {
                    ...item,
                    isLike: !item.isLike
                    }
                : item
            );
            });

            return updated;
        });
    }

  return (
    
    <div className='prodcut-card'>
        <div className='favourite-container'>
            <button className='fav-btn' onClick={myFavProduct}>
                {
                    isLike ? (
                        <i className="fa-solid fa-heart favorite-icon like-icon"></i>
                    ) : (
                        <i className="fa-regular fa-heart favorite-icon"></i>
                    )
                }
            </button>
        </div>
        <Link to={`/productdetail/${productName}`} className='product-card-link'>
        <div className='product-content-container'>
            <div className='product-img-container'>
                <img src={productImg} className={`prodcut-img 
                    ${brand === "Vivo" ? "vivo-img" :""}
                    ${brand === "Apple" ? "apple-img" :""}
                    ${brand === "Redmi" ? "redmi-img" :""}`} />
            </div>
            
            <div className='product-details'>
                <p className='product-brand'>{brand}</p>
                <h1 className='product-title'>{productName}</h1>
                <h1 className='product-price'>₹{Number(price).toLocaleString("en-IN")}</h1>
            </div>
        </div>


            <div className='rating-star-container'>

                    {[1, 2, 3, 4, 5].map((star) => (
                        <i
                        key={star}
                        className={
                            star <= product.rating
                            ? "fa-solid fa-star star-icon"
                            : ""
                        }
                        ></i>
                    ))}
            </div>

        
        <div className='button-container'>
            <button className='btn add-to-cart'>
                <i className="fa-solid fa-cart-shopping cart-icon"></i>
                Add to Cart</button>
        </div>
        </Link>
    </div>
    
  )
}
