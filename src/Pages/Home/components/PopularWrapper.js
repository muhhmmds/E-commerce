import React from "react";
import Title from "../../../Components/commonComponents/Title";
import Wrapper from "../../../Components/commonComponents/Wrapper";
import { PopularCardOne, PopularCardTwo } from "./PopularCard";
import logo1 from "../../../assets/images/laptop.jpg";
import logo2 from "../../../assets/images/speaker.jpg";
import logo3 from "../../../assets/images/watch.jpg";
import ProductCard from "../../../Components/commonComponents/ProductCard";
import logo4 from "../../../assets/images/alexunder-hess-bWZAPKm0zZE-unsplash.jpg";
import logo5 from "../../../assets/images/alexunder-hess-6zqd6092B1c-unsplash.jpg";
import { sectionFourData } from "../../../Components/commonComponents/Data";

const PopularWrapper = () => {
    return (
        <>
            <div className="popularWrapper py-5">
                <Wrapper>
                    <Title text={"our popular products"} />
                </Wrapper>
                <Wrapper className={"g-3"}>
                    <div className="col-md-4 col-sm-6 col-lg-2 one d-flex flex-column gap-15">
                        <PopularCardOne text={"laptop"} logo={logo3} />
                        <PopularCardOne text={"speaker"} logo={logo2} />
                        <PopularCardOne text={"watch"} logo={logo1} />
                    </div>
                    <PopularCardTwo
                        col={"col-md-4 col-sm-6 col-lg-2 two"}
                        h5={"15% off"}
                        h3={"home speakers"}
                        text1={"from $399 or$16.62/mo."}
                        text2={"for 24 mo."}
                        logo={logo2}
                    />
                    {sectionFourData
                        .slice(0, 4)
                        .map(
                            ({
                                col,
                                brand,
                                title,
                                price,
                                value,
                                logo1,
                                logo2,
                                id,
                            }) => (
                                <ProductCard
                                    key={id}
                                    text1={brand}
                                    text2={title}
                                    col={col}
                                    price={price}
                                    value={value}
                                    logo1={logo1}
                                    logo2={logo2}
                                />
                            )
                        )}
                    {/* <ProductCard
                        col={"col-md-4 col-sm-6 col-lg-2"}
                        text1={"havells"}
                        text2={
                            "kids headphones bulk 10 back multi colored for ..."
                        }
                        price={"$99.00"}
                        value={3}
                        logo1={logo4}
                        logo2={logo5}
                    />
                    <ProductCard
                        col={"col-md-4 col-sm-6 col-lg-2"}
                        text1={"havells"}
                        text2={
                            "kids headphones bulk 10 back multi colored for ..."
                        }
                        price={"$99.00"}
                        value={3}
                        logo1={logo4}
                        logo2={logo5}
                    />
                    <ProductCard
                        col={"col-md-4 col-sm-6 col-lg-2"}
                        text1={"havells"}
                        text2={
                            "kids headphones bulk 10 back multi colored for ..."
                        }
                        price={"$99.00"}
                        value={3}
                        logo1={logo4}
                        logo2={logo5}
                    />
                    <ProductCard
                        col={"col-md-4 col-sm-6 col-lg-2"}
                        text1={"havells"}
                        text2={
                            "kids headphones bulk 10 back multi colored for ..."
                        }
                        price={"$99.00"}
                        value={3}
                        logo1={logo4}
                        logo2={logo5}
                    /> */}
                </Wrapper>
            </div>
        </>
    );
};

export default PopularWrapper;
