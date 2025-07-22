import React from "react";
import Wrapper from "../../../Components/commonComponents/Wrapper";
import { SmallBlock } from "./SmallBlock";

import logo1 from "../../../assets/images/service.png";
import logo3 from "../../../assets/images/service-02.png";
import logo4 from "../../../assets/images/service-03.png";
import logo5 from "../../../assets/images/service-04.png";
import logo2 from "../../../assets/images/service-05.png";
import shortid from "shortid";

const SectionTwo = () => {
    const smallBlocks = [
        {
            logo: logo1,
            alt: "service",
            text: "from all order over $100",
            title: "free shipping",
            className: "",
            id: shortid.generate(),
        },
        {
            logo: logo2,
            alt: "service",
            text: "save up to 75% off",
            title: "daily surprise offers",
            className: "",
            id: shortid.generate(),
        },
        {
            logo: logo3,
            alt: "service",
            text: "shop with an expert",
            title: " support 24/7",
            className: "",
            id: shortid.generate(),
        },
        {
            logo: logo4,
            alt: "service",
            text: "get factor direct price",
            title: "affordable prices",
            className: "",
            id: shortid.generate(),
        },
        {
            logo: logo5,
            alt: "service",
            text: "secure payments",
            title: "100% protected payments",
            className: "last",
            id: shortid.generate(),
        },
    ];
    return (
        <>
            <section className="home-wrapper-2 py-5">
                <Wrapper>
                    <div className="col-12">
                        <div className="services d-flex align-items-center justify-content-between">
                            {smallBlocks.map((smallBlock) => (
                                <SmallBlock
                                    key={smallBlock.id}
                                    logo={smallBlock.logo}
                                    alt={smallBlock.alt}
                                    text={smallBlock.text}
                                    title={smallBlock.title}
                                    className={smallBlock.className}
                                />
                            ))}
                            {/* <SmallBlock
                                logo={logo1}
                                alt={"service"}
                                text={"from all order over $100"}
                                title={"free shipping"}
                            />
                            <SmallBlock
                                logo={logo2}
                                alt={"service"}
                                text={"save up to 75% off"}
                                title={"daily surprise offers"}
                            />
                            <SmallBlock
                                logo={logo3}
                                alt={"service"}
                                text={"shop with an expert"}
                                title={"support 24/7"}
                            />
                            <SmallBlock
                                logo={logo4}
                                alt={"service"}
                                text={"get factor direct price"}
                                title={"affordable prices"}
                            />
                            <SmallBlock
                                logo={logo5}
                                alt={"service"}
                                text={"secure payments"}
                                title={"100% protected payments"}
                            /> */}
                        </div>
                    </div>
                </Wrapper>
            </section>
        </>
    );
};

export default SectionTwo;
