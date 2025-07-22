import React from "react";

const Wrapper = ({ classNameONe, className, children }) => {
    return (
        <>
            <div
                className={`${classNameONe ? classNameONe : ""} container-xxl`}
            >
                <div className={`${className ? className : ""} row`}>
                    {children}
                </div>
            </div>
        </>
    );
};

export default Wrapper;
