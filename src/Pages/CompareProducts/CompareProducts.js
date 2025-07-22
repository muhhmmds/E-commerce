import React from "react";
import "./_CompareProducts.scss";
import Meta from "../../Components/commonComponents/Meta";
import BreadCrumb from "../../Components/commonComponents/BreadCrumb";
import Wrapper from "../../Components/commonComponents/Wrapper";
import CompareProductCard from "./Components/CompareProductCard";
import { useSelector } from "react-redux";
const CompareProducts = () => {
    const selector = useSelector((state) => state.allCart.cart);

    return (
        <>
            <Meta Title={"Compare Products"} />
            <BreadCrumb title={"Compare Products"} />
            <Wrapper className={"g-3"}>
                {selector == "" ? (
                    <p className="text-center text-capitalize">
                        there isn't items Compare Page in try to add more
                    </p>
                ) : (
                    selector.map((e) => (
                        <CompareProductCard
                            key={e.id}
                            logo1={e.logo1}
                            text1={e.text1}
                            text2={e.text2}
                            price={e.price}
                            total={e}
                            type={e.type}
                            num={e.num}
                        />
                    ))
                )}
                {/* <CompareProductCard /> */}
            </Wrapper>
        </>
    );
};

export default CompareProducts;
