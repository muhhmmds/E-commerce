import React from "react";
import FilterCardWrapper from "./FilterCardsWrapper";
import Colors from "../../CompareProducts/Components/Colors";

const CardLeftTwo = ({ title, subTitle1, subTitle2, text1, text2 }) => {
    return (
        <>
            <FilterCardWrapper title={title}>
                <div className="two">
                    <h5 className="subTitle">{subTitle1}</h5>
                    <div>
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id=""
                            />
                            <label className="form-check-label" htmlFor="">
                                {text1}
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id=""
                            />
                            <label className="form-check-label" htmlFor="">
                                {text2}
                            </label>
                        </div>
                    </div>
                    <h5 className="subTitle">{subTitle2}</h5>
                    <div className="d-flex align-items-center gap-10">
                        <div className="form-floating ">
                            <input
                                type="email"
                                className="form-control py-1"
                                id="floatingInput"
                                placeholder="from"
                            />
                            <label htmlFor="floatingInput">from</label>
                        </div>
                        <div className="form-floating ">
                            <input
                                type="email"
                                className="form-control py-1"
                                id="floatingInput1"
                                placeholder="to"
                            />
                            <label htmlFor="floatingInput1">to</label>
                        </div>
                    </div>
                    <h5 className="subTitle">colors</h5>
                    <div>
                        {/* <ul className="colors d-flex flex-wrap gap-10 ps-0">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul> */}
                        <Colors />
                    </div>
                    <h5 className="subTitle">size</h5>
                    <div>
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="color-1"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="color-1"
                            >
                                S (2)
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="color-2"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="color-2"
                            >
                                M (2)
                            </label>
                        </div>
                    </div>
                </div>
            </FilterCardWrapper>
        </>
    );
};

export default CardLeftTwo;
