import React from "react";
import { Link } from "react-router-dom";
import img from "../../../assets/images/menu.svg";
const DropDown = () => {
    return (
        <>
            <div className="dropdown">
                <button
                    className="btn btn-secondary dropdown-toggle bg-transparent  border-0 gap-15 d-flex align-items-center"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <img src={img} alt="" />
                    <span className="me-md-5 me-sm-3  d-inline-block">
                        show categories
                    </span>
                </button>
                <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                >
                    <li>
                        <Link className="dropdown-item text-white" to="/">
                            Action
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item text-white" to="/">
                            Another action
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item text-white" to="/">
                            Something else here
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default DropDown;
