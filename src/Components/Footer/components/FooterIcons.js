import React from "react";
import { BsYoutube, BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
const FooterIcons = () => {
    return (
        <>
            <div className="socialIcons d-flex align-items-center mt-4 gap-30">
                <a className="text-white" href="/">
                    <BsGithub className="fs-4" />
                </a>
                <a className="text-white" href="/">
                    <BsLinkedin className="fs-4" />
                </a>
                <a className="text-white" href="/">
                    <BsYoutube className="fs-4" />
                </a>
                <a className="text-white" href="/">
                    <BsInstagram className="fs-4" />
                </a>
            </div>
        </>
    );
};

export default FooterIcons;
