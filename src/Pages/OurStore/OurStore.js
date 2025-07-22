import React, { useState } from "react";
import Meta from "../../Components/commonComponents/Meta";
import Title from "../../Components/commonComponents/Title";
import Wrapper from "../../Components/commonComponents/Wrapper";
import CardLeftFour from "./Components/CardLeftFour";
import CardLeftOne from "./Components/CardLeftOne";
import CardLeftThree from "./Components/CardLeftThree";
import CardLeftTwo from "./Components/CardLeftTwo";
import logo1 from "../../assets/images/watch.jpg";
import SearchingArea from "./Components/SearchingArea";
import BreadCrumb from "../../Components/commonComponents/BreadCrumb";
import { BsFilterRight } from "react-icons/bs";

const OurStore = () => {
    const [value, setValue] = useState(false);
    return (
        <>
            <Meta Title={"our store"} />

            <BreadCrumb title={"store"} />
            <div className="storeWrapper py-5">
                <Wrapper>
                    <div
                        className="col-sm-3 cola"
                        style={{ display: `${value ? "block" : ""}` }}
                    >
                        <CardLeftOne
                            title={"shop by categories"}
                            text1={"watch"}
                            text2={"laptop"}
                            text3={"tv"}
                            text4={"camera"}
                        />
                        <CardLeftTwo
                            title={"filter by"}
                            subTitle1={"availability"}
                            subTitle2={"price"}
                            text1={"in stock"}
                            text2={"out of stock"}
                        />
                        <CardLeftThree
                            title={"product tags"}
                            text1={"samsung"}
                            text2={"lg"}
                            text3={"apple"}
                            text4={"vivo"}
                            text5={"amr"}
                        />
                        <CardLeftFour
                            title={"random products"}
                            value={4}
                            logo1={logo1}
                        />
                    </div>

                    <SearchingArea setValue={setValue} />
                </Wrapper>
            </div>
        </>
    );
};

export default OurStore;
