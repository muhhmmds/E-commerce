import React from "react";
import logo from "../../assets/images/main-banner-1.jpg";
import logo2 from "../../assets/images/catbanner-01.jpg";
import logo3 from "../../assets/images/catbanner-02.jpg";
import logo4 from "../../assets/images/catbanner-03.jpg";
import logo5 from "../../assets/images/catbanner-04.jpg";
import { CardContent, SmallCardContent } from "./components/CardContent";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import MarqueeWrapper from "./components/Marquee";
import SectionFive from "./components/SectionFive";
import SectionFour from "./components/SectionFour";
import SpecialWrapper from "./components/SpecialWrapper";
import PopularWrapper from "./components/PopularWrapper";
import Wrapper from "../../Components/commonComponents/Wrapper";
const Home = () => {
    return (
        <>
            <main style={{ backgroundColor: "#f5f5f7" }}>
                <section className=" home-wrapper-1 py-5">
                    <Wrapper className={"responsive"}>
                        <div className="col-md-6 col-sm-12">
                            <CardContent
                                h4={"superCharged for pros."}
                                h5={"iPad s13+ pro."}
                                p={"from $999.00  or $41.62/mo. "}
                                B={"buy now"}
                                logo={logo}
                            />
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="d-flex gap-10 leftView flex-wrap justify-content-between align-items-center">
                                <SmallCardContent
                                    h4={"best sell"}
                                    h5={"laptop max"}
                                    p1={"from $1699.00"}
                                    p2={"or $64.62/mo."}
                                    logo={logo2}
                                />
                                <SmallCardContent
                                    h4={"new arrival"}
                                    h5={"buy ipad air"}
                                    p1={"from $599.00 or"}
                                    p2={"$49.62/mo for 12 mo."}
                                    logo={logo3}
                                />
                                <SmallCardContent
                                    h4={"15% off"}
                                    h5={"smartWatch 7"}
                                    p1={"shop the latest band"}
                                    p2={"styles and colors"}
                                    logo={logo4}
                                />
                                <SmallCardContent
                                    h4={"free engraving"}
                                    h5={"air pods max"}
                                    p1={"high fidelity playBack &"}
                                    p2={"ultra low distortion"}
                                    logo={logo5}
                                />
                            </div>
                        </div>
                    </Wrapper>
                </section>
                <SectionTwo />
                <SectionThree />
                <SectionFour />
                <SpecialWrapper />
                <PopularWrapper />
                <MarqueeWrapper />
                <SectionFive />
            </main>
        </>
    );
};

export default Home;
