import React from "react";
import FilterCardWrapper from "./FilterCardsWrapper";
import ReactStars from "react-rating-stars-component";

const CardLeftFour = ({ title, logo1, logo2, value }) => {
    return (
        <>
            <FilterCardWrapper title={title}>
                <div>
                    <div className="randomProducts d-flex   mb-3">
                        <div className="w-35">
                            <img
                                src={logo1}
                                className="img-fluid"
                                alt="watch"
                            />
                        </div>
                        <div className="w-65">
                            <h5>
                                kids headphone bulk 10 pack multi colored for
                                students
                            </h5>
                            <ReactStars
                                count={5}
                                size={24}
                                edit={false}
                                value={value}
                                activeColor="#ffd700"
                            />
                            <b>$ 300</b>
                        </div>
                    </div>
                    <div className="randomProducts d-flex">
                        <div className="w-35">
                            <img
                                src={logo1}
                                className="img-fluid"
                                alt="watch"
                            />
                        </div>
                        <div className="w-65">
                            <h5>
                                kids headphone bulk 10 pack multi colored for
                                students
                            </h5>
                            <ReactStars
                                count={5}
                                size={24}
                                edit={false}
                                value={value}
                                activeColor="#ffd700"
                            />
                            <b>$ 300</b>
                        </div>
                    </div>
                </div>
            </FilterCardWrapper>
        </>
    );
};

export default CardLeftFour;
