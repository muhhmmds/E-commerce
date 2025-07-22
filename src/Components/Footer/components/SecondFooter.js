import React from "react";
import Column from "./Column";
import FooterIcons from "./FooterIcons";
import Wrapper from "../../commonComponents/Wrapper";

const SecondFooter = () => {
    return (
        <>
            <div className="py-4 secondFooter">
                <Wrapper>
                    <div className="col-lg-4 col-sm-5 col-12 text-capitalize text-white">
                        <h4>contact us</h4>
                        <div>
                            <address className="text-white fs-6 text-capitalize">
                                main store : 199 near Safe House <br />
                                Virginia,Washington DC <br /> PinCode: 199961{" "}
                            </address>
                            <a
                                href="tel:+201024840786"
                                className="mt-3 d-block mb-2 text-white"
                            >
                                +201024840786
                            </a>
                            <a
                                href="mailto:devmohamedsaber@gmail.com"
                                className="mt-2 d-block mb-2 text-white text-lowercase"
                            >
                                devmohamedsaber@gmail.com
                            </a>
                            <FooterIcons />
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-5 col-4 text-capitalize text-white">
                        <Column
                            name1={"privacy policy"}
                            name2={"refund policy"}
                            name3={"shipping policy"}
                            name4={"terms and conditions"}
                            title={" blog"}
                        />
                    </div>
                    <div className="col-lg-3 col-sm-5 col-4 text-capitalize text-white">
                        <Column
                            name1={"search"}
                            name2={"about us"}
                            name3={"faq"}
                            name4={"contact"}
                            title={"size chart"}
                        />
                    </div>
                    <div className="col-lg-2 col-sm-5 col-4 text-capitalize text-white">
                        <Column
                            name1={"laptops"}
                            name2={"headPhones"}
                            name3={"tablets"}
                            name4={"watches"}
                            title={"quick links"}
                        />
                    </div>
                </Wrapper>
            </div>
        </>
    );
};

export default SecondFooter;
