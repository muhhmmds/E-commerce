import React from "react";
<div className="list"></div>;
const FilterCardWrapper = ({ title, children }) => {
    return (
        <>
            <div className="filterCard mb-3">
                <h3 className="filterTitle text-capitalize">{title}</h3>
                {children}
            </div>
        </>
    );
};

export default FilterCardWrapper;
