import React from "react";
import Button from "./Button";

const BlogCard = ({ col, logo, date }) => {
    return (
        <>
            <div className={col}>
                <div className="blogCard">
                    <div className="cardImage">
                        <img src={logo} alt="BLOG" className="img-fluid" />
                    </div>
                    <div className="blogContent">
                        <p className="data">{date}</p>
                        <h5 className="title">
                            a beautiful sunday morning renaissance
                        </h5>
                        <p className="desc">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Tempore magnam maxime quia ab corrupti
                            blanditiis .
                        </p>
                        <Button name={"read more"} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogCard;
