import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
    decreaseItemQuantity,
    increaseItemQuantity,
    removeItem,
} from "../../Redux/Features/CartSlice";

const Counter = ({ id, totalQuantity }) => {
    const dispatch = useDispatch();
    const num = useSelector((state) => state.allCart.totalQuantity);
    const nume = useSelector((state) => state.allCart.totalPrice);
    return (
        <>
            <div className="d-flex align-items-center gap-30 sass">
                <div className="d-flex gap-10 align-items-center bg-white justify-content-between        boxOne  ">
                    <div className="d-flex flex-column">
                        <button
                            onClick={() => dispatch(increaseItemQuantity(id))}
                            className=" b"
                        >
                            +
                        </button>
                        <button
                            onClick={() => dispatch(decreaseItemQuantity(id))}
                        >
                            -
                        </button>
                    </div>
                    <div className="d-flex justify-content-center align-items-center num">
                        <span className="d-block">{totalQuantity}</span>
                        <span>{num}</span>{" "}
                    </div>
                </div>
                <div
                    onClick={() => dispatch(removeItem(id))}
                    className="icon-container"
                >
                    <BsFillTrashFill />
                </div>
            </div>
        </>
    );
};

export default Counter;
