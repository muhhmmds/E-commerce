import React from "react";
import { Link } from "react-router-dom";
const Logo = () => {
    return (
        <>
            <div className="col-md-2 col-sm-12">
                <h2>
                    <Link
                        className="text-white text-uppercase logoHeader"
                        to={"/e-commerce-app"}
                    >
                        dev Muhammad.
                    </Link>
                </h2>
            </div>
        </>
    );
};

export default Logo;
