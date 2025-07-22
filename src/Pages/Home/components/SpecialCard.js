import React from "react";
import ReactStars from "react-rating-stars-component";
import Button, { ButtonTwo } from "../../../Components/commonComponents/Button";
import { useDispatch } from "react-redux";

const SpecialCard = ({
    col,
    logo1,
    text1,
    text2,
    price,
    value,
    price2,
    days,
    num,
    e,
    total,
}) => {
    const dispatch = useDispatch();

    return (
        <>
            <div className={col}>
                <div className="specialCard">
                    <div className="d-flex justify-content-lg-between justify-content-sm-start">
                        <div>
                            <img src={logo1} className="img-fluid" alt="" />
                        </div>
                        <div className="specialContent">
                            <h6>{text1}</h6>
                            <h5>{text2}</h5>
                            <ReactStars
                                count={5}
                                size={24}
                                edit={false}
                                value={value}
                                activeColor="#ffd700"
                            />
                            <p>
                                <span className="red-p">
                                    {price} &nbsp; <strike>{price2}</strike>
                                </span>
                            </p>
                            <div className="discount-till d-flex align-items-center gap-10">
                                <p className="mb-0">
                                    <b>{days}</b>
                                    days
                                </p>
                                <div className="d-flex gap-10 align-items-center">
                                    <span className="badgeX rounded-circle py3  ">
                                        05
                                    </span>
                                    :
                                    <span className="badgeX rounded-circle py3 ">
                                        01
                                    </span>
                                    :
                                    <span className="badgeX rounded-circle py3  ">
                                        31
                                    </span>
                                </div>
                            </div>
                            <div className="specialCount my-3">
                                <p>product: {num} </p>
                                <div className="progress">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: "25%" }}
                                        aria-valuenow="50"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                            </div>
                            <div className="d-flex gap-15">
                                <Button
                                    name={"add to card"}
                                    style={{
                                        padding: "10px ",
                                        fontSize: "10px",
                                    }}
                                    total={total}
                                    key={num}
                                />
                                <ButtonTwo
                                    style={{
                                        padding: "10px ",
                                        fontSize: "10px",
                                    }}
                                    name={"more info"}
                                    total={total}
                                    key={e}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SpecialCard;
