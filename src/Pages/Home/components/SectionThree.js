import React from "react";
import Wrapper from "../../../Components/commonComponents/Wrapper";
import { SmallBlockTwo } from "./SmallBlock";
import laptop from "../../../assets/images/laptop.jpg";
import headPhone from "../../../assets/images/headphone.jpg";
import camera from "../../../assets/images/camera.jpg";
import tv from "../../../assets/images/tv.jpg";

const SectionThree = () => {
    return (
        <>
            <section className="home-wrapper-3 py-5">
                <Wrapper>
                    <div className="col-12">
                        <div className="catagories cardShadow d-flex justify-content-between align-items-center flex-wrap">
                            <SmallBlockTwo
                                text={"12 items"}
                                title={"laptop"}
                                logo={laptop}
                                alt={"image"}
                            />
                            <SmallBlockTwo
                                text={"30 items"}
                                title={"cameras"}
                                logo={camera}
                                alt={"image"}
                            />
                            <SmallBlockTwo
                                text={"15 items"}
                                title={"smart TV"}
                                logo={tv}
                                alt={"image"}
                            />
                            <SmallBlockTwo
                                text={"10 items"}
                                title={"headPhone"}
                                logo={headPhone}
                                alt={"image"}
                            />
                            <SmallBlockTwo
                                text={"12 items"}
                                title={"music & gaming"}
                                logo={laptop}
                                alt={"image"}
                            />
                            <SmallBlockTwo
                                text={"30 items"}
                                title={"cameras"}
                                logo={camera}
                                alt={"image"}
                            />
                            <SmallBlockTwo
                                text={"15 items"}
                                title={"smart TV"}
                                logo={tv}
                                alt={"image"}
                            />
                            <SmallBlockTwo
                                text={"10 items"}
                                title={"headPhone"}
                                logo={headPhone}
                                alt={"image"}
                            />
                        </div>
                    </div>
                </Wrapper>
            </section>
        </>
    );
};

export default SectionThree;
