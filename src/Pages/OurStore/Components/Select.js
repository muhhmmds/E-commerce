import React from "react";

const Select = () => {
    return (
        <>
            <select name="" id="" className="form-select form-control">
                <option value="manual" className="text-capitalize">
                    featured
                </option>
                <option value="best-sealing" className="text-capitalize">
                    best sealing
                </option>
                <option value="title-ascending" className="text-capitalize">
                    alphabetically, A to Z
                </option>
                <option value="title-descending" className="text-capitalize">
                    alphabetically, A to Z
                </option>
                <option value="price-ascending" className="text-capitalize">
                    price, low to high
                </option>
                <option value="price-descending" className="text-capitalize">
                    price, high to low
                </option>
            </select>
        </>
    );
};

export default Select;
