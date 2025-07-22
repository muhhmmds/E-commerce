import React from "react";
import BlogCard from "../../../Components/commonComponents/BlogCard";
import Wrapper from "../../../Components/commonComponents/Wrapper";
import logo1 from "../../../assets/images/blog-1.jpg";
import logo2 from "../../../assets/images/blog-1.jpg";
import logo3 from "../../../assets/images/blog-1.jpg";
import logo4 from "../../../assets/images/blog-1.jpg";
import Title from "../../../Components/commonComponents/Title";

const SectionFive = () => {
    return (
        <>
            <section className="home-wrapper-5 py-5 ">
                <Wrapper>
                    <Title text={"our latest products "} />
                    <BlogCard
                        col={"col-md-4 col-sm-6 col-lg-3"}
                        date={"7 Mar, 2023"}
                        logo={logo1}
                    />
                    <BlogCard
                        col={"col-md-4 col-sm-6 col-lg-3"}
                        date={"7 Mar, 2023"}
                        logo={logo2}
                    />
                    <BlogCard
                        col={"col-md-4 col-sm-6 col-lg-3"}
                        date={"7 Mar, 2023"}
                        logo={logo3}
                    />
                    <BlogCard
                        col={"col-md-4 col-sm-6 col-lg-3"}
                        date={"7 Mar, 2023"}
                        logo={logo4}
                    />
                </Wrapper>
            </section>
        </>
    );
};

export default SectionFive;
