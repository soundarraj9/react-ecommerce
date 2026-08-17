import React, {useContext, useState, useEffect} from 'react'
import { Link, useParams, useSearchParams, useNavigate } from 'react-router-dom'
import { Details } from '../App'
import ProductCard from '../Components/ProductCard'
import Footer from '../Components/Footer'
import "./Pages.css"




export default function Product() {

    const {mobileArray, allMobileArray, loading, displayArray, setDisplayArray} = useContext(Details)

    const [searchValue, setSearchValue] = useState("")
    const [commentPro, setCommentPro] = useState("")

    const navPro = useNavigate()

    const bannerObj = {
        apple : "/banner/apple banner.png",
        samsung: "/banner/samsung banner.png",
        redmi: "/banner/redmi banner.png",
        oneplus: "/banner/oneplus banner.png",
        realme: "/banner/realme banner.png",
        vivo: "/banner/vivo banner.png",
        oppo: "/banner/oppo banner 1.png",
        motorola: "/banner/moto banner.png"
    }

    const {products} = useParams()

    const [searchParam, setSearchParam] = useSearchParams()
    const currenPro = searchParam.get("productName")

    const bannerImg = products !== undefined ? (`${bannerObj[products]}`) : "/banner/all mobile banner.png"
    

    useEffect(() => {
        if (products) {
            const selectedBrand = allMobileArray.filter((mobile) => {
                return mobile.brand.toLowerCase() === products
            })
            setDisplayArray(selectedBrand);

        } else {
        setDisplayArray(allMobileArray);
        }
    }, [products, mobileArray, allMobileArray]);

    function searchDetail() {
      const searchProduct = searchValue.toLowerCase().trim()
      
    
      if(searchProduct === ""){
        setSearchValue("")
        setDisplayArray(allMobileArray)
        return;
      }

      setSearchParam({productName : searchProduct})


      let findMobile = allMobileArray.filter((mobile) => {
        return mobile.productName.toLowerCase().includes(searchProduct);
      });

      if (findMobile.length > 0) {
        setDisplayArray(findMobile)
        setCommentPro("")
      }else{
        setDisplayArray([])
        setCommentPro("Mobile Details Not Found :(");
      }

      setSearchValue("");

    }


  return (
    <>
        <div className='home-container'>
            
            <div className='product-banner-container'>
                <img src={bannerImg} className='banner-product-img'/>
            </div>
            
            <div className='home-shop-brand'>
                <h1 className='home-sub-head'>Shop by Brand</h1>

                <div className='brand-logo-container'>
                    <div className='brand-logo-card'>
                    <Link to="/product/apple"><img className='brand-img brand-sec' src='/brand logo/apple logo.png'/></Link>
                    </div>
                    <div className='brand-logo-card'>
                    <Link to="/product/samsung"><img className='brand-img' src='/brand logo/samsung logo.png'/></Link>
                    </div>
                    <div className='brand-logo-card'>
                    <Link to="/product/redmi"><img className='brand-img' src='/brand logo/xiaomi logo.png'/></Link>
                    </div>
                    <div className='brand-logo-card'>
                    <Link to="/product/oneplus"><img className='brand-img' src='/brand logo/oneplus logo.png'/></Link>
                    </div>
                    <div className='brand-logo-card'>
                    <Link to="/product/realme"><img className='brand-img' src='/brand logo/realme logo.png'/></Link>
                    </div>
                    <div className='brand-logo-card'>
                    <Link to="/product/vivo"><img className='brand-img brand-sec' src='/brand logo/vivo logo.png'/></Link>
                    </div>
                    <div className='brand-logo-card'>
                    <Link to="/product/oppo"><img className='brand-img brand-sec' src='/brand logo/oppo logo.png'/></Link>
                    </div>
                    <div className='brand-logo-card'>
                    <Link to="/product/motorola"><img className='brand-img' src='/brand logo/motorola logo.png'/></Link>
                    </div>
                </div>
            </div>

             <div className='product-container'>
                <h1 className='home-sub-head'>Explore Smartphones</h1>

                <div className='show-filter-container'>
                    <div className='filter-head-container'>
                        <p className='filter-para'>Filter By:</p>
                    <p className='filter-text'>{products
                    ? products.charAt(0).toUpperCase() + products.slice(1)
                    : "All"}</p>
                    </div>

                    <div className='search-container'>
                        <input className='input-box' type='text' placeholder='Enter a Mobile Name' value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
                        <button className='btn search-btn' onClick={()=>{searchDetail()}}> Search <i className="fa-solid fa-magnifying-glass search-icon"></i></button>
                    </div>

                    <button className='btn back-btn pro-back' onClick={() => (navPro("/product"), setDisplayArray(allMobileArray), setCommentPro(""))}><i className="fa-solid fa-chevron-left back-icon"></i>Back</button>    
                </div>

                    {
                     loading ? (
                        <p>Loading products...</p>
                    ) : (
                        commentPro === "" ? (
                            <ul className="all-product-container">
                            {displayArray.map((item) => (
                                <li key={item.productId}>
                                <ProductCard product={item} />
                                </li>
                            ))}
                            </ul>
                        ) : (
                            <div className='no-pro-container'>
                                <p className='no-por-text'>{commentPro}</p>
                             </div>   
                        )
                    )
                    }
            </div>
        </div>
        <Footer />
    </>
  )
} 
