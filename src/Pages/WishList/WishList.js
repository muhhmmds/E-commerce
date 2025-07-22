import React from "react";
import { useSelector } from "react-redux";
import Meta from "../../Components/commonComponents/Meta";
import BreadCrumb from "../../Components/commonComponents/BreadCrumb";
import Wrapper from "../../Components/commonComponents/Wrapper";
import WishListCard from "./WishListCard";
import "./_wishList.scss";

const WishList = () => {
    const selector = useSelector((state) => state.allCart.cart);
    return (
        <>
            <Meta Title={"WishList Page"} />
            <BreadCrumb title={"WishList Page"} />
            <div className="wishList-wrapper home-wrapper-2 py-5">
                <Wrapper className={"g-3"}>
                    {selector == "" ? (
                        <p className="text-center text-capitalize">
                            there isn't items in wishlist page try to add more
                        </p>
                    ) : (
                        selector.map((e) => (
                            <WishListCard
                                key={e.id}
                                logo1={e.logo1}
                                text2={e.title}
                                price={e.price1}
                                total={e}
                            />
                        ))
                    )}

                    {/* {sellector !== "" ? (
                        sellector.map((e) => (
                            <WishListCard
                                key={e.id}
                                logo1={e.logo1}
                                text2={e.text2}
                                price={e.price}
                                total={e}
                            />
                        ))
                    ) : (
                        <p>there is not items try to add more</p>
                    )} */}
                </Wrapper>
            </div>
        </>
        // <div>
        //     <ul>
        //         {sellector.map((e) => (
        //             <SpecialCard
        //                 logo1={e.logo1}
        //                 col={e.col}
        //                 text1={e.text1}
        //                 text2={e.text2}
        //                 value={e.value}
        //                 price={e.price}
        //                 price2={e.price2}
        //                 days={e.days}
        //                 num={e.num}
        //                 key={e.id}
        //                 e={e.id}
        //                 total={e}
        //             />
        //         ))}
        //     </ul>
        // </div>
    );
};

export default WishList;
