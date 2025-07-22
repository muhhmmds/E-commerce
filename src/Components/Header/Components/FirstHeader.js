import React from "react";
import Wrapper from "../../commonComponents/Wrapper";

const FirstHeader = () => {
    return (
        <>
            <header className="header-top-strip py-3">
                <Wrapper>
                    <div className="col-6">
                        <p className="text-white mb-0 text-capitalize firstHeader">
                            free shipping Over $100 & free returns
                        </p>
                    </div>
                    <div className="col-6">
                        <p className="text-end text-white mb-0 text-capitalize firstHeader">
                            hotLine :
                            <a
                                className="text-white"
                                href="tel:+201024840786"
                            >
                                +201024840786
                            </a>
                        </p>
                    </div>
                </Wrapper>
            </header>
        </>
    );
};

export default FirstHeader;
