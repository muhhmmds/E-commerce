import React from "react";
import Marquee from "react-fast-marquee";
import Wrapper from "../../../Components/commonComponents/Wrapper";
import logo1 from "../../../assets/images/brand-01.png";
import logo2 from "../../../assets/images/brand-02.png";
import logo3 from "../../../assets/images/brand-03.png";
import logo4 from "../../../assets/images/brand-04.png";
import logo5 from "../../../assets/images/brand-05.png";
import logo6 from "../../../assets/images/brand-06.png";
import logo7 from "../../../assets/images/brand-07.png";
import logo8 from "../../../assets/images/brand-08.png";
const MarqueeWrapper = () => {
    return (
        <>
            <div className="marquee-wrapper py-5">
                <Wrapper>
                    <div className="col-12">
                        <div className="marquee-inner-wrapper cardShadow">
                            <Marquee className="d-flex">
                                <div className="mx-4 w-25">
                                    <img src={logo1} alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src={logo2} alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src={logo3} alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src={logo4} alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src={logo5} alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src={logo6} alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src={logo7} alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src={logo8} alt="brand" />
                                </div>
                            </Marquee>
                        </div>
                    </div>
                </Wrapper>
            </div>
        </>
    );
};

export default MarqueeWrapper;
