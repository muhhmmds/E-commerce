import React from "react";
import { Link } from "react-router-dom";

const ThirdFooter = () => {
    // const date = () => {
    //     return new Date().getFullYear;
    // };
    // function date() {
    //     return new Date().getFullYear;
    // }
    return (
        <>
            <div className="py-4 footerThree">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <p className="text-center mb-0 text-white">
                                &copy; 2025 powered by
                                <Link
                                    className="Muhammad text-uppercase ms-1 "
                                    to="https://www.linkedin.com/in/amr-abd-elhameed-61047b20b/"
                                >
                                    Muhammad
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ThirdFooter;
