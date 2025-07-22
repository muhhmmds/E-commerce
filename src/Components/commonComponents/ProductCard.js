import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import Photo1 from "../../assets/images/prodcompare.svg";
import Photo2 from "../../assets/images/view.svg";
import Photo3 from "../../assets/images/add-cart.svg";
import logo3 from "../../assets/images/wish.svg";

const ProductCard = ({
    col,
    logo1,
    logo2,
    text1,
    text2,
    price,
    value,
    grid,
}) => {
    const location = useLocation();
    return (
        <>
            {/* <div className={`${location.pathname == "/store" ? col : col} `}> */}
            <div
                className={`card--product ${
                    location.pathname == "/store" ? `gr-${grid}` : col
                } `}
            >
                <div className="productCard position-relative">
                    <div className="wishList-icon position-absolute">
                        <Link>
                            <img src={logo3} alt="" />
                        </Link>
                    </div>
                    <div className="productImage">
                        <img src={logo1} alt="" className="img-fluid" />
                        <img src={logo2} alt="" className="img-fluid" />
                    </div>
                    <div className="productDetails">
                        <h6>{text1}</h6>
                        <h5>{text2}</h5>
                        <ReactStars
                            count={5}
                            size={24}
                            edit={false}
                            value={value}
                            activeColor="#ffd700"
                        />
                        <p>{price}</p>
                    </div>
                    <div className="actionBar  position-absolute">
                        <div className="d-flex flex-column gap-15">
                            <Link>
                                <img src={Photo1} alt="" />
                            </Link>
                            <Link>
                                <img src={Photo2} alt="" />
                            </Link>
                            <Link>
                                <img src={Photo3} alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCard;
