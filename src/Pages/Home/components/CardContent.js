import React from "react";
import Button from "../../../Components/commonComponents/Button";

const CardContent = ({ h4, h5, p, B, logo }) => {
    return (
        <>
            <div className="main-banner position-relative ">
                <img
                    src={logo}
                    className="img-fluid rounded-3"
                    alt="main banner"
                />
                <div className="main-banner-content position-absolute">
                    <h4 className="text-uppercase">{h4}</h4>
                    <h5>{h5}</h5>
                    <p>{p}</p>
                    <Button name={B} />
                </div>
            </div>
        </>
    );
};

const SmallCardContent = ({ h4, h5, p1, p2, B, logo }) => {
    return (
        <>
            <div className="small-banner  position-relative">
                <img
                    src={logo}
                    className="img-fluid rounded-3"
                    alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                    <h4 className="text-uppercase">{h4}</h4>
                    <h5>{h5}</h5>
                    <p>
                        {p1} <br /> {p2}
                    </p>
                </div>
            </div>
        </>
    );
};

export { CardContent, SmallCardContent };
