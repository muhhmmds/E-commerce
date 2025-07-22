import React, { useState } from "react";
import Select from "./Select";
import logo1 from "../../../assets/images/gr.svg";
import logo2 from "../../../assets/images/gr2.svg";
import logo3 from "../../../assets/images/gr3.svg";
import logo4 from "../../../assets/images/gr4.svg";
import ProductList from "./ProductList";
import { BsFillFilterSquareFill } from "react-icons/bs";

const SearchingArea = ({ setValue }) => {
    const [grid, setGrid] = useState(4);
    return (
        <>
            <div className="col-sm-9 col-12">
                <div className="filter-sort-grid mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center gap-10">
                            <p
                                className="mb-0 text-capitalize d-block sorta"
                                style={{ width: "32%" }}
                            >
                                sort by:
                            </p>
                            <Select />
                        </div>
                        <div className="d-flex  align-items-center gap-10 ">
                            <p className="totalProducts mb-0"> 21 products</p>
                            <div className="d-flex  align-items-center gap-10 grid ">
                                <img
                                    onClick={() => setGrid(3)}
                                    src={logo4}
                                    alt="grid"
                                    className="d-lg-block d-none img-fluid"
                                />
                                <img
                                    onClick={() => setGrid(4)}
                                    src={logo3}
                                    alt="grid"
                                    className="d-md-block d-none  img-fluid"
                                />
                                <img
                                    onClick={() => setGrid(6)}
                                    src={logo2}
                                    alt="grid"
                                    className="d-sm-block d-none img-fluid"
                                />
                                <img
                                    onClick={() => setGrid(12)}
                                    src={logo1}
                                    alt="grid"
                                    className="d-block img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="colaTwo d-flex d-sm-none ">
                    <div
                        className="gap-10 d-flex"
                        onClick={() => setValue((prevState) => !prevState)}
                    >
                        <p>
                            <BsFillFilterSquareFill className="fs-4" />
                        </p>
                        <p>show filter</p>
                    </div>
                </div>
                <ProductList grid={grid} />
            </div>
        </>
    );
};

export default SearchingArea;
