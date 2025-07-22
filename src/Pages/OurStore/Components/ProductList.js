import React from "react";
import ProductCard from "../../../Components/commonComponents/ProductCard";
import logo1 from "../../../assets/images/alexunder-hess-bWZAPKm0zZE-unsplash.jpg";
import logo2 from "../../../assets/images/alexunder-hess-6zqd6092B1c-unsplash.jpg";
const ProductList = ({ grid }) => {
    return (
        <>
            <div className="products-list pb-5">
                <div className="d-flex flex-wrap gap-10">
                    <ProductCard
                        // grid={` col-${grid}`}
                        grid={grid}
                        text1={"havells"}
                        text2={
                            "kids headphones bulk 10 back multi colored for ..."
                        }
                        price={"$99.00"}
                        value={3}
                        logo1={logo1}
                        logo2={logo2}
                    />
                    <ProductCard
                        grid={grid}
                        // grid={` col-${grid}`}
                        text1={"havells"}
                        text2={
                            "kids headphones bulk 10 back multi colored for ..."
                        }
                        price={"$99.00"}
                        value={3}
                        logo1={logo1}
                        logo2={logo2}
                    />
                    <ProductCard
                        grid={grid}
                        // grid={` col-${grid}`}
                        text1={"havells"}
                        text2={
                            "kids headphones bulk 10 back multi colored for ..."
                        }
                        price={"$99.00"}
                        value={3}
                        logo1={logo1}
                        logo2={logo2}
                    />
                    <ProductCard
                        grid={grid}
                        // grid={` col-${grid}`}
                        text1={"havells"}
                        text2={
                            "kids headphones bulk 10 back multi colored for ..."
                        }
                        price={"$99.00"}
                        value={3}
                        logo1={logo1}
                        logo2={logo2}
                    />
                    <ProductCard
                        grid={grid}
                        // grid={` col-${grid}`}
                        text1={"havells"}
                        text2={
                            "kids headphones bulk 10 back multi colored for ..."
                        }
                        price={"$99.00"}
                        value={3}
                        logo1={logo1}
                        logo2={logo2}
                    />
                    <ProductCard
                        grid={grid}
                        // grid={` col-${grid}`}
                        text1={"havells"}
                        text2={
                            "kids headphones bulk 10 back multi colored for ..."
                        }
                        price={"$99.00"}
                        value={3}
                        logo1={logo1}
                        logo2={logo2}
                    />
                    <ProductCard
                        grid={grid}
                        // grid={` col-${grid}`}
                        text1={"havells"}
                        text2={
                            "kids headphones bulk 10 back multi colored for ..."
                        }
                        price={"$99.00"}
                        value={3}
                        logo1={logo1}
                        logo2={logo2}
                    />
                    <ProductCard
                        grid={grid}
                        // grid={` col-${grid}`}
                        text1={"havells"}
                        text2={
                            "kids headphones bulk 10 back multi colored for ..."
                        }
                        price={"$99.00"}
                        value={3}
                        logo1={logo1}
                        logo2={logo2}
                    />
                </div>
            </div>
        </>
    );
};

export default ProductList;
