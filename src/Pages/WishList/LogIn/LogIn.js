import React from "react";
import Meta from "../../../Components/commonComponents/Meta";
import BreadCrumb from "../../../Components/commonComponents/BreadCrumb";
import Wrapper from "../../../Components/commonComponents/Wrapper";
import { Link } from "react-router-dom";

const LogIn = () => {
    return (
        <>
            <>
                <Meta Title={"Log In "} />
                <BreadCrumb title={"Log In "} />
                <div className="logIn-wrapper py-5 home-wrapper-2">
                    <Wrapper>
                        <div className="auth-card">
                            <h3 className="text-center mb-3 h3">Log In</h3>
                            <form
                                action=""
                                className="d-flex flex-column gap-15"
                            >
                                <div className="one mt-1">
                                    <input
                                        type="email "
                                        placeholder="Your Email"
                                        name="email"
                                        className="formControl"
                                    />
                                </div>
                                <div className="one mt-1">
                                    <input
                                        type="password "
                                        placeholder="Password"
                                        name="password"
                                        className="formControl"
                                    />
                                </div>
                                <div>
                                    <Link className="sin">
                                        forget password?
                                    </Link>
                                    <div className="d-flex justify-content-center align-items-center gap-15">
                                        <button className="ButtonB">
                                            login
                                        </button>
                                        <Link className="text-capitalize ButtonB link">
                                            signUp
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Wrapper>
                </div>
            </>
        </>
    );
};

export default LogIn;
