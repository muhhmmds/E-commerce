import React from "react";

const SmallBlock = ({ logo, alt, title, text, className }) => {
    return (
        <>
            <div className={`d-flex align-items-center gap-10 ${className}`}>
                <img src={logo} alt={alt} />
                <div>
                    <h6 className="text-capitalize">{title}</h6>
                    <p className="mb-0 text-capitalize">{text}</p>
                </div>
            </div>
        </>
    );
};

const SmallBlockTwo = ({ logo, alt, title, text }) => {
    return (
        <>
            <div className="d-flex align-items-center gap">
                <div>
                    <h6 className="text-capitalize">{title}</h6>
                    <p className="text-capitalize">{text}</p>
                </div>
                <div className="image">
                    <img src={logo} alt={alt} />
                </div>
            </div>
        </>
    );
};

export { SmallBlock, SmallBlockTwo };
