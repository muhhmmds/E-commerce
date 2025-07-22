import React from "react";
import FilterCardWrapper from "./FilterCardsWrapper";

const CardLeftOne = ({ title, text1, text2, text3, text4 }) => {
    return (
        <>
            <FilterCardWrapper title={title}>
                <ul className="ps-0">
                    <li className="text-capitalize">{text1}</li>
                    <li className="text-capitalize">{text2}</li>
                    <li className="text-capitalize">{text3}</li>
                    <li className="text-capitalize">{text4}</li>
                </ul>
            </FilterCardWrapper>
        </>
    );
};

export default CardLeftOne;
