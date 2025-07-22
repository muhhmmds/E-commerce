import React from "react";
import Title from "../../../Components/commonComponents/Title";
import Wrapper from "../../../Components/commonComponents/Wrapper";
import SpecialCard from "./SpecialCard";

import { sectionSpecialData } from "../../../Components/commonComponents/Data";

const SpecialWrapper = () => {
    // const dispatch = useDispatch();
    // const handleToCard = (product) => {
    //     dispatch(addToCard(product));
    // };

    // const data = [
    //     {
    //         logo1: logo1,
    //         col: "col-lg-4 col-sm-12",
    //         text1: "diamond",
    //         text2: "a beautiful company for watches guys",
    //         value: 3,
    //         price: "$100",
    //         price2: "$200",
    //         days: "5",
    //         num: 9,
    //         id: shortid.generate(),
    //         type: "watch",
    //         size: "L",
    //         color: "golden",
    //     },
    //     {
    //         logo1: logo1,
    //         col: "col-lg-4 col-sm-12",
    //         text1: "diamond",
    //         text2: "a beautiful company for watches guys",
    //         value: 3,
    //         price: "$200",
    //         price2: "$300",
    //         days: "5",
    //         num: 9,
    //         id: shortid.generate(),
    //         type: "watch",
    //         size: "S",
    //         color: "silver",
    //     },
    //     {
    //         logo1: logo1,
    //         col: "col-lg-4 col-sm-12",
    //         text1: "diamond",
    //         text2: "a beautiful company for watches guys",
    //         value: 3,
    //         price: "$400",
    //         price2: "$500",
    //         days: "5",
    //         num: 9,
    //         id: shortid.generate(),
    //         type: "watch",
    //         size: "M",
    //         color: "red",
    //     },
    // ];
    return (
        <>
            <section className="SpecialWrapper py-5">
                <Wrapper className={"g-3"}>
                    <Title text={"special products"} />
                    <div className="row g-3">
                        {sectionSpecialData.map((e) => (
                            <SpecialCard
                                logo1={e.logo1}
                                col={e.col}
                                text1={e.brand}
                                text2={e.title}
                                value={e.value}
                                price={e.price1}
                                price2={e.price2}
                                days={e.days}
                                num={e.num}
                                key={e.id}
                                e={e.id}
                                total={e}
                            />
                        ))}
                    </div>
                </Wrapper>
            </section>
        </>
    );
};

export default SpecialWrapper;
