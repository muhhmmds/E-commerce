import React from "react";
import photo from "../../../assets/images/newsletter.png";
import SearchingFiled from "../../commonComponents/SearchingFiled";
import Wrapper from "../../commonComponents/Wrapper";

const FirstFooter = () => {
    return (
        <>
            <div className="py-4 FirstFooter">
                <Wrapper className={"align-items-center"}>
                    <div className="col-5">
                        <div className="footer-top-data d-flex align-items-center gap-30">
                            <img src={photo} alt="newsLetters" />
                            <h2 className="mb-0 text-white text-capitalize">
                                sin up for newsLetter
                            </h2>
                        </div>
                    </div>
                    <SearchingFiled
                        col={"col-7"}
                        text={"subscribe"}
                        placeholder={"your email address"}
                    />
                </Wrapper>
            </div>
        </>
    );
};

export default FirstFooter;
