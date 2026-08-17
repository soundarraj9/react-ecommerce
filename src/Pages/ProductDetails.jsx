import React, {useContext, useState, useEffect} from 'react'
import { Link, useParams, useSearchParams, useNavigate } from 'react-router-dom'
import { Details } from '../App'
import ProductCard from '../Components/ProductCard'
import Footer from '../Components/Footer'
import "./Pages.css"

export default function ProductDetails() {

    const {mobileArray, setAllMobileArray, allMobileArray, loading, displayArray, setDisplayArray, cartArray, setCartArray} = useContext(Details)
     
    const navPro = useNavigate()

    const [proDetail, setProDetail] = useState({})
    const {productName} = useParams()

    

    useEffect(() => {
        if (!productName || allMobileArray.length === 0) {
            return;
        }

        const proName = productName.toLowerCase().trim();

        const findPro = allMobileArray.find((pro) => {
            return pro.productName.toLowerCase() === proName;
        });

        setProDetail(findPro || {});
    }, [productName, allMobileArray]);

    const addToCart = () => {

        const alreadyInCart = cartArray.some(
            (item) => item.productId === proDetail.productId
        );

        if (alreadyInCart) {
            alert("This product is already in your cart.");
            return;
        }


    setCartArray((prev) => {

        const existingProduct = prev.find(
        (item) => item.productId === proDetail.productId
        );

        if (existingProduct) {
        return prev.map((item) =>
            item.productId === proDetail.productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        }

        return [
        ...prev,
        {
            ...proDetail,
            quantity: 1
        }
        ];
    });
    };

    const myFavProduct = () =>{
        setAllMobileArray((prev) =>
            prev.map((item) =>
            item.productId === proDetail.productId
                ? {
                    ...item,
                    isLike: !item.isLike
                }
                : item
            )
        );
    }


  return (
    <>
     <div className='product-detail-container'>
        <div className='top-detail-head'>
            <h1 className='pro-detail-head'>Product Detail</h1>

            <button className='btn back-btn' onClick={() => (navPro("/product"))}><i className="fa-solid fa-chevron-left back-icon"></i>Back</button>
        </div>
        <div className='pro-img-content-container'>
            <div className='product-detail-img-container'>
                <img src={proDetail.productImg} className={`product-detail-img ${proDetail.brand === "OnePlus" ? "product-detail-img-one" : ""}
                ${proDetail.brand === "Realme" ? "product-detail-img-real" : ""} ${proDetail.brand === "Motorola" ? "product-detail-img-moto" : ""}
                ${proDetail.brand === "OPPO" ? "product-detail-img-oppo" : ""}`}/>
            </div>

            <div className='product-detail-content'>
                <div className='favourite-container'>
                    <button className='fav-btn' onClick={myFavProduct}>
                        {
                            proDetail.isLike ? (
                                <i className="fa-solid fa-heart favorite-icon like-icon fev-detail"></i>
                            ) : (
                                <i className="fa-regular fa-heart favorite-icon fev-detail"></i>
                            )
                        }
                    </button>
                </div>
                <p className='pro-brand'>{proDetail.brand}</p>
                <h1 className={`product-detail-name 
                                ${proDetail.brand === "Samsung" ? "product-detail-name-sam" : ""}
                                ${proDetail.brand === "Motorola" ? "product-detail-name-sam" : ""}`}>{proDetail.productName}</h1>
                <p className='product-detail-price'>₹{Number(proDetail.price).toLocaleString("en-IN")}</p>
                
                <p className='variant-head'>Variants:</p>
                <div className='ram-storage-container'>
                    <div className='ram-storage-box'>
                        <p className='ram-storage-text'>6 GB + 128 GB </p>
                    </div>
                    <div className='ram-storage-box'>
                        <p className='ram-storage-text'>6 GB + 256 GB </p>
                    </div>
                    <div className='ram-storage-box'>
                        <p className='ram-storage-text'>8 GB + 256 GB </p>
                    </div>
                </div>
                <p className={`product-stock ${proDetail.availability === "In Stock" ? "instock" : "outstock"}`}>{proDetail.availability}</p>

                <div className='rating-star-container'>

                    {[1, 2, 3, 4, 5].map((star) => (
                        <i
                        key={star}
                        className={
                            star <= proDetail.rating
                            ? "fa-solid fa-star star-icon detail-star"
                            : ""
                        }
                        ></i>
                    ))}
                    </div>

                {
                    proDetail.availability === "In Stock" ? (
                        <button className='btn add-to-cart-pro' onClick={addToCart}>
                <i className="fa-solid fa-cart-shopping cart-icon"></i>
                Add to Cart</button>
                    ) : (
                        <button className='btn add-to-cart-pro notify'>
                Notify Me</button>
                    )
                }
            </div>
        </div>
        <div className='pro-description-container'>
            <p className='pro-detail-description-head'>Description</p>
            <hr />
            <p className='pro-detail-description-para'>{`${proDetail.description}`}</p>
        </div>
    </div>
    <Footer />
    </>
  )
}
