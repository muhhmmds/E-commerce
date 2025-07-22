import React from "react";
import { Link } from "react-router-dom";
import compare from "../../../assets/images/compare.svg";
import WishList from "../../../assets/images/wishlist.svg";
import User from "../../../assets/images/user.svg";
import Card from "../../../assets/images/cart.svg";
const Icons = () => {
    return (
        <>
            <div className="col-md-6 col-lg-5">
                <div className="header-upper-links d-flex justify-content-between align-items-center">
                    <div>
                        <Link
                            className="d-flex align-items-center gap-10 text-white"
                            to={"/compareProducts"}
                        >
                            <img src={compare} alt="compare" />
                            <p className="mb-0">
                                compare <br /> products
                            </p>
                        </Link>
                    </div>
                    <div>
                        <Link
                            className="d-flex align-items-center gap-10 text-white"
                            to={"/wishlist"}
                        >
                            <img src={WishList} alt="compare" />
                            <p className="mb-0">
                                favorite <br /> wish list
                            </p>
                        </Link>
                    </div>
                    <div>
                        <Link
                            to={"/login"}
                            className="d-flex align-items-center gap-10 text-white"
                        >
                            <img src={User} alt="compare" />
                            <p className="mb-0">
                                log in <br /> my account
                            </p>
                        </Link>
                    </div>
                    <div>
                        <Link
                            to={"/shoppingCard"}
                            className="d-flex align-items-center gap-10 text-white"
                        >
                            <img src={Card} alt="compare" />
                            <div className="d-flex flex-column gap-10">
                                <span className="badge bg-white text-dark">
                                    0
                                </span>
                                <p className="mb-0">$ 500</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Icons;
