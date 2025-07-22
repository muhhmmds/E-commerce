import { Helmet } from "react-helmet";
import React from "react";

const Meta = ({ Title }) => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title className="text-uppercase">{Title}</title>
            </Helmet>
        </>
    );
};

export default Meta;
