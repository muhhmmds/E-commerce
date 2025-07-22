import React from "react";

const SearchingFiled = ({ col, placeholder, icon, text }) => {
    return (
        <>
            <div className={` ${col ? col : "col-md-4 col-lg-5"}`}>
                <div className="input-group ">
                    <input
                        type="text"
                        className="form-control  py-sm-1 py-md-2 "
                        placeholder={placeholder}
                        aria-label={placeholder}
                        aria-describedby="basic-addon2"
                    />
                    <span
                        className="input-group-text py-sm-1 py-md-2 py-lg-3"
                        id="basic-addon2"
                    >
                        {icon}
                        {text}
                    </span>
                </div>
            </div>
        </>
    );
};

export default SearchingFiled;
