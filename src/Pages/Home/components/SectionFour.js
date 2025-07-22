import React from "react";
import ProductCard from "../../../Components/commonComponents/ProductCard";
import Title from "../../../Components/commonComponents/Title";
import Wrapper from "../../../Components/commonComponents/Wrapper";
import image1 from "../../../assets/images/alexunder-hess-bWZAPKm0zZE-unsplash.jpg";
import image2 from "../../../assets/images/alexunder-hess-6zqd6092B1c-unsplash.jpg";
import shortid from "shortid";
import { sectionFourData } from "../../../Components/commonComponents/Data";

const SectionFour = () => {
    // const productCardData = [
    //     {
    //         col: "col-md-4 col-sm-6 col-lg-2 ",
    //         text1: "havells",
    //         text2: "kids headphones bulk 10 back multi colored for ...",
    //         price: "$99.00",
    //         value: 3,
    //         logo: image1,
    //         logo2: image2,
    //         id: shortid.generate(),
    //         type: true,
    //     },
    //     {
    //         col: "col-md-4 col-sm-6 col-lg-2",
    //         text1: "havells",
    //         text2: "kids headphones bulk 10 back multi colored for ...",
    //         price: "$99.00",
    //         value: 3,
    //         logo: image1,
    //         logo2: image2,
    //         id: shortid.generate(),
    //         type: true,
    //     },
    //     {
    //         col: "col-md-4 col-sm-6 col-lg-2",
    //         text1: "havells",
    //         text2: "kids headphones bulk 10 back multi colored for ...",
    //         price: "$99.00",
    //         value: 3,
    //         logo: image1,
    //         logo2: image2,
    //         id: shortid.generate(),
    //         type: true,
    //     },
    //     {
    //         col: "col-md-4 col-sm-6 col-lg-2",
    //         text1: "havells",
    //         text2: "kids headphones bulk 10 back multi colored for ...",
    //         price: "$99.00",
    //         value: 3,
    //         logo: image1,
    //         logo2: image2,
    //         id: shortid.generate(),
    //         type: true,
    //     },
    //     {
    //         col: "col-md-4 col-sm-6 col-lg-2",
    //         text1: "havells",
    //         text2: "kids headphones bulk 10 back multi colored for ...",
    //         price: "$99.00",
    //         value: 3,
    //         logo: image1,
    //         logo2: image2,
    //         id: shortid.generate(),
    //         type: true,
    //     },
    //     {
    //         col: "col-md-4 col-sm-6 col-lg-2",
    //         text1: "havells",
    //         text2: "kids headphones bulk 10 back multi colored for ...",
    //         price: "$99.00",
    //         value: 3,
    //         logo: image1,
    //         logo2: image2,
    //         id: shortid.generate(),
    //         type: true,
    //     },
    // ];
    return (
        <>
            <section className="home-wrapper-4 py-5">
                <Wrapper className={"g-2"}>
                    <Title text={"product"} />
                    {sectionFourData.map(
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
                        col={"col-2"}
                        text1={"havells"}
                        text2={
                            "kids headphones bulk 10 back multi colored for ..."
                        }
                        price={"$99.00"}
                        value={3}
                        logo={logo1}
                        logo2={logo2}
                    />
                    <ProductCard
                        col={"col-2"}
                        text1={"havells"}
                        text2={
                            "kids headphones bulk 10 back multi colored for ..."
                        }
                        price={"$99.00"}
                        value={3}
                        logo={logo1}
                        logo2={logo2}
                    />
                    <ProductCard
                        col={"col-2"}
                        text1={"havells"}
                        text2={
                            "kids headphones bulk 10 back multi colored for ..."
                        }
                        price={"$99.00"}
                        value={3}
                        logo={logo1}
                        logo2={logo2}
                    />
                    <ProductCard
                        col={"col-2"}
                        text1={"havells"}
                        text2={
                            "kids headphones bulk 10 back multi colored for ..."
                        }
                        price={"$99.00"}
                        value={3}
                        logo={logo1}
                        logo2={logo2}
                    />
                    <ProductCard
                        col={"col-2"}
                        text1={"havells"}
                        text2={
                            "kids headphones bulk 10 back multi colored for ..."
                        }
                        price={"$99.00"}
                        value={3}
                        logo={logo1}
                        logo2={logo2}
                    />
                    <ProductCard
                        col={"col-2"}
                        text1={"havells"}
                        text2={
                            "kids headphones bulk 10 back multi colored for ..."
                        }
                        price={"$99.00"}
                        value={3}
                        logo={logo1}
                        logo2={logo2}
                    /> */}
                </Wrapper>
            </section>
        </>
    );
};

export default SectionFour;
