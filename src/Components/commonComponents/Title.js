import React from "react";

const Title = ({ text, className }) => {
    return (
        <>
            <div className="col-12">
                <h3 className={`sectionHeading text-capitalize ${className}`}>
                    {text}
                </h3>
            </div>
        </>
    );
};

export default Title;
