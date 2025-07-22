import React from "react";

const PopularCardOne = ({ logo, text }) => {
    return (
        <>
            <div className="parent d-flex gap-10 align-items-center">
                <img className="img-fluid" src={logo} alt="" />
                <span>{text}</span>
            </div>
        </>
    );
};

const PopularCardTwo = ({ col, h5, h3, text1, text2, logo }) => {
    return (
        <>
            <div className={col}>
                <div className="parent">
                    <h5 className="text-uppercase ">{h5}</h5>
                    <h3 className="text-uppercase">{h3}</h3>
                    <p className="text-uppercase">
                        {text1}
                        <br />
                        {text2}
                    </p>
                    <div>
                        <img src={logo} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export { PopularCardOne, PopularCardTwo };
