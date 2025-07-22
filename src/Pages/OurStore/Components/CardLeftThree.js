import React from "react";
import FilterCardWrapper from "./FilterCardsWrapper";

const CardLeftThree = ({ title, text1, text2, text3, text4, text5 }) => {
    return (
        <>
            <FilterCardWrapper title={title}>
                <div>
                    <div className="productTags d-flex flex-wrap align-items-center gap-10">
                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                            {text1}
                        </span>
                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                            {text2}
                        </span>
                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                            {text3}
                        </span>
                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                            {text4}
                        </span>
                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                            {text5}
                        </span>
                    </div>
                </div>
            </FilterCardWrapper>
        </>
    );
};

export default CardLeftThree;
