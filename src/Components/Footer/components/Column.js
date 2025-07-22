import React from "react";
import { Link } from "react-router-dom";
const Column = ({ name1, name2, name3, name4, title }) => {
    return (
        <>
            <h4>{title}</h4>
            <div className="footer-links d-flex flex-column">
                <Link className="text-capitalize text-white py-2 mb-1">
                    {name1}
                </Link>
                <Link className="text-capitalize text-white py-2 mb-1">
                    {name2}
                </Link>
                <Link className="text-capitalize text-white py-2 mb-1">
                    {name3}
                </Link>
                <Link className="text-capitalize text-white py-2 mb-1">
                    {name4}
                </Link>
            </div>
        </>
    );
};

export default Column;
