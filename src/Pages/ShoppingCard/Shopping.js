import React, { useEffect } from "react";
import Meta from "../../Components/commonComponents/Meta";
import BreadCrumb from "../../Components/commonComponents/BreadCrumb";
import Wrapper from "../../Components/commonComponents/Wrapper";
import ShoppingCard from "./ShoppingCard";
import { Link } from "react-router-dom";
import { BsFillTrashFill } from "react-icons/bs";

import { useDispatch, useSelector } from "react-redux";
import {
    decreaseItemQuantity,
    getCartTotal,
    increaseItemQuantity,
    removeItem,
} from "../../Redux/Features/CartSlice";
const Shopping = () => {
    // const selector = useSelector((state) => state.allCart.cart);
    // console.log(selector);

    const { cart, totalQuantity, totalPrice } = useSelector(
        (state) => state.allCart
    );
    const dispatch = useDispatch();
    console.log(cart);
    useEffect(() => {
        dispatch(getCartTotal());
    }, [cart]);

    return (
        <>
            <Meta Title={"Shopping Card "} />
            <BreadCrumb title={"Your Shopping Card "} />
            <div className="shopping-card-Wrapper py-5 home-wrapper-2 ">
                <Wrapper>
                    <div className="col-12">
                        <div className="card-header d-flex justify-content-between py-3  align-items-center">
                            <h4 className="card-col-1">Product</h4>
                            <h4 className="card-col-2">Price</h4>
                            <h4 className="card-col-3">Quantity</h4>
                            <h4 className="card-col-4">Total</h4>
                        </div>
                        {cart == "" ? (
                            <p className="text-center text-capitalize py-5 text-danger ">
                                there isn't items in shopping card try to add
                                more
                            </p>
                        ) : (
                            cart.map((e) => (
                                <div
                                    className="card-details d-flex justify-content-between py-3  align-items-center"
                                    key={e.id}
                                >
                                    <div className="card-col-1 d-flex gap-15 align-items-center">
                                        <div className="w-25">
                                            <img
                                                src={e.logo1}
                                                className="img-fluid"
                                                alt=" product"
                                            />
                                        </div>
                                        <div className="w-75">
                                            <p className="title mb-0 text-capitalize">
                                                {e.text2}
                                            </p>
                                            <p className="size mb-0 text-capitalize">
                                                Size: {e.size}
                                            </p>
                                            <p className="color mb-0 text-capitalize">
                                                Color: {e.color}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="card-col-2">
                                        <h5>{e.price1}</h5>
                                    </div>
                                    <div className="card-col-3">
                                        <div className="d-flex align-items-center gap-30 sass">
                                            <div className="d-flex gap-10 align-items-center bg-white justify-content-between        boxOne  ">
                                                <div className="d-flex flex-column">
                                                    <button
                                                        onClick={() =>
                                                            dispatch(
                                                                increaseItemQuantity(
                                                                    e.id
                                                                )
                                                            )
                                                        }
                                                        className=" b"
                                                    >
                                                        +
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            dispatch(
                                                                decreaseItemQuantity(
                                                                    e.id
                                                                )
                                                            )
                                                        }
                                                    >
                                                        -
                                                    </button>
                                                </div>
                                                <div className="d-flex justify-content-center align-items-center num">
                                                    <span className="d-block"></span>
                                                    <span>{e.quantity}</span>{" "}
                                                </div>
                                            </div>
                                            <div
                                                onClick={() =>
                                                    dispatch(removeItem(e.id))
                                                }
                                                className="icon-container"
                                            >
                                                <BsFillTrashFill />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-col-4">
                                        <h5>{e.price1 * e.quantity}</h5>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                    <div className="col-12 py-2 mt-4">
                        <div className="d-flex justify-content-between">
                            <div>
                                {" "}
                                <Link className="ButtonB" to={"/"}>
                                    continue Shopping
                                </Link>
                            </div>
                            <dir>
                                <h4>SubTotal: {totalPrice}$</h4>
                                <p>
                                    Taxes and shipping are calculated at
                                    checkout
                                </p>
                                <Link className="ButtonB"> CheckOut</Link>
                            </dir>
                        </div>
                    </div>
                </Wrapper>
            </div>
        </>
    );
};

export default Shopping;
