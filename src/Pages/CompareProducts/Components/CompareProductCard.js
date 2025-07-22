import React from "react";
import Colors from "./Colors";
import logo from "../../../assets/images/cross.svg";
import { useDispatch } from "react-redux";
import { removeItem } from "../../../Redux/Features/CartSlice";
const CompareProductCard = ({ logo1, text2, text1, type, num, total }) => {
    const dispatch = useDispatch();
    return (
        <>
            <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="compareProductCard position-relative">
                    <img
                        className="cross position-absolute img-fluid"
                        src={logo}
                        alt="cross"
                        onClick={() => dispatch(removeItem(total))}
                    />
                    <div className="productCardImage">
                        <img src={logo1} alt="" />
                    </div>
                    <div className="CompareProductDetails">
                        <h5 className="Title">{text2}</h5>
                        <h6 className="price mb-3 mt-3">{}</h6>
                        <div>
                            <div className="productDetail">
                                <h5>Brand</h5>
                                <p>{text1}</p>
                            </div>
                            <div className="productDetail">
                                <h5>Type</h5>
                                <p>{type}</p>
                            </div>
                            <div className="productDetail">
                                <h5>Availability</h5>
                                <p>{num}</p>
                            </div>
                            <div className="productDetail">
                                <h5>color</h5>
                                <Colors />
                            </div>
                            <div className="productDetail">
                                <h5>size</h5>
                                <div className="d-flex gap-10">
                                    <p>S</p>
                                    <p>M</p>
                                    <p>M</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CompareProductCard;
