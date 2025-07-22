import React, { useState } from "react";
import Meta from "../../Components/commonComponents/Meta";
import BreadCrumb from "../../Components/commonComponents/BreadCrumb";
import Wrapper from "./Wrapper";
import Title from "./Title";
import ReactStars from "react-rating-stars-component";
import Button from "./Button";
import ProductCard from "./ProductCard";
import logo4 from "../../assets/images/alexunder-hess-bWZAPKm0zZE-unsplash.jpg";
import logo5 from "../../assets/images/alexunder-hess-6zqd6092B1c-unsplash.jpg";
import ReactImageZoom from "react-image-zoom";
import Colors from "../../Pages/CompareProducts/Components/Colors";
import { BiGitCompare } from "react-icons/bi";
import { GiShoppingBag } from "react-icons/gi";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SimpleCard = () => {
    const props = { width: 600, height: 500, zoomWidth: 500, img: `${logo4}` };

    const [order, setOrder] = useState(true);
    const selector = useSelector((state) => state.allCart.cart);
    const param = useParams();
    const itemId = param.itemId;
    console.log(itemId);

    return (
        <>
            <Meta Title={"Product Details "} />
            <BreadCrumb title={"Product Details "} />
            <div className="main-Product-Wrapper py-5 home-wrapper-2 ">
                <Wrapper>
                    <div className="col-6">
                        <div className="main-product-image">
                            <div>
                                <ReactImageZoom {...props} />
                            </div>
                        </div>
                        <div className="other-product-images d-flex flex-wrap gap-10">
                            <div>
                                <img
                                    className="img-fluid"
                                    src={logo4}
                                    alt="product images"
                                />
                            </div>
                            <div>
                                <img
                                    className="img-fluid"
                                    src={logo4}
                                    alt="product images"
                                />
                            </div>
                            <div>
                                <img
                                    className="img-fluid"
                                    src={logo4}
                                    alt="product images"
                                />
                            </div>
                            <div>
                                <img
                                    className="img-fluid"
                                    src={logo4}
                                    alt="product images"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="main-product-details">
                            <div className="h3-wrapper">
                                <h3 className="title">
                                    hea dflkajkdsklf k dksljafjf ksdfkldsjfdjk
                                </h3>
                            </div>
                            <div className="h3-wrapper py-3">
                                <p className="price ">100$ </p>
                            </div>
                            <div className="h3-wrapper pb-3">
                                <div className="d-flex gap-10 align-items-center my-4">
                                    <h3 className="product-heading">Type:</h3>{" "}
                                    <p className="product-data">gfd</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-4">
                                    <h3 className="product-heading">Brand</h3>{" "}
                                    <p className="product-data">gfd</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-4">
                                    <h3 className="product-heading">
                                        Category
                                    </h3>{" "}
                                    <p className="product-data">gfd</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-4">
                                    <h3 className="product-heading">Tags</h3>{" "}
                                    <p className="product-data">gfd</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center   mt-2 mb-3">
                                    <h3 className="product-heading">Size</h3>
                                    <div className="d-flex flex-wrap gap-15">
                                        <span className="badge border border-1 bg-white text-dark border-secondary">
                                            S
                                        </span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">
                                            M
                                        </span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">
                                            L
                                        </span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">
                                            XL
                                        </span>
                                    </div>
                                </div>
                                <div className="d-flex gap-10 align-items-center mt-2 mb-3">
                                    <h3 className="product-heading">Color</h3>
                                    <Colors />
                                </div>
                                <div className="d-flex gap-10 align-items-center my-4">
                                    <h3 className="product-heading">
                                        Availability
                                    </h3>{" "}
                                    <p className="product-data">In Stock</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center  mt-2 mb-3">
                                    <h3 className="product-heading tt  ">
                                        Quantity
                                    </h3>{" "}
                                    <div className="d-flex align-items-center justify-content-center gap-15">
                                        <Button
                                            classS={"me"}
                                            name={"add to card "}
                                        />
                                        <Button
                                            classS={"link me"}
                                            name={"but it for now"}
                                        />
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-15 mt-2 mb-3">
                                    <div className="d-flex gap-3">
                                        <a href="" className="mm">
                                            {" "}
                                            <GiShoppingBag />
                                            {"  "}
                                            add to wishlist
                                        </a>
                                    </div>
                                    <div className="d-flex gap-3">
                                        <a href="" className="mm">
                                            {" "}
                                            <BiGitCompare />
                                            {"  "}
                                            add to compare
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="rating d-flex align-items-center gap-10">
                                <ReactStars
                                    count={5}
                                    size={24}
                                    edit={false}
                                    value={4}
                                    activeColor="#ffd700"
                                />
                                <p className="mb-0 review-btn">( 2 reviews )</p>
                            </div>
                            <a href="#review" className="review-btn">
                                {" "}
                                Write a review
                            </a>
                        </div>
                    </div>
                </Wrapper>
            </div>
            <div className="description-wrapper py-5 home-wrapper-2">
                <Wrapper>
                    <div className="col-12">
                        <div className="bg-white p-3">
                            <h4>Description</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Ipsam quasi inventore cumque
                                molestiae hic? Quis maiores repudiandae tempora
                                minus aliquid porro, cumque at eveniet
                                reprehenderit quos cum architecto iusto. Quasi?
                            </p>
                        </div>
                    </div>
                </Wrapper>
            </div>
            <div className="reviews-wrapper py-5 home-wrapper-2">
                <Wrapper>
                    <div className="col-12">
                        <div className="review-inner-wrapper">
                            <div className="review-head d-flex justify-content-between align-items-center ">
                                <div>
                                    <h4 id="review" className="mb-2">
                                        Customer Reviews
                                    </h4>
                                    <div className="d-flex gap-10 align-items-center">
                                        {" "}
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            edit={false}
                                            value={4}
                                            activeColor="#ffd700"
                                        />
                                        <p className="mb-0">
                                            based on two reviews
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    {order && (
                                        <div>
                                            <a className="text-capitalize text-decoration-underline text-dark">
                                                {" "}
                                                Write a review
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="review-form">
                                <form
                                    action=""
                                    className="d-flex flex-column gap-15"
                                >
                                    <div>
                                        <h4 className="mt-3 amr">
                                            Write a Review
                                        </h4>

                                        <ReactStars
                                            count={5}
                                            size={24}
                                            edit={true}
                                            value={4}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <div>
                                        <textarea
                                            className="w-100 formControl text-area p-2"
                                            name=""
                                            id=""
                                            cols="30"
                                            rows="4"
                                            placeholder="Comments..."
                                        ></textarea>
                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <Button name={"submit review"} />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </div>
            <div className="popularWrapper py-5">
                <Wrapper>
                    <Title text={"our popular products"} />
                </Wrapper>
                <Wrapper>
                    <ProductCard
                        col={"col-2"}
                        text1={"havells"}
                        text2={
                            "kids headphones bulk 10 back multi colored for ..."
                        }
                        price={"$99.00"}
                        value={3}
                        logo1={logo4}
                        logo2={logo5}
                    />
                    <ProductCard
                        col={"col-2"}
                        text1={"havells"}
                        text2={
                            "kids headphones bulk 10 back multi colored for ..."
                        }
                        price={"$99.00"}
                        value={3}
                        logo1={logo4}
                        logo2={logo5}
                    />
                    <ProductCard
                        col={"col-2"}
                        text1={"havells"}
                        text2={
                            "kids headphones bulk 10 back multi colored for ..."
                        }
                        price={"$99.00"}
                        value={3}
                        logo1={logo4}
                        logo2={logo5}
                    />
                    <ProductCard
                        col={"col-2"}
                        text1={"havells"}
                        text2={
                            "kids headphones bulk 10 back multi colored for ..."
                        }
                        price={"$99.00"}
                        value={3}
                        logo1={logo4}
                        logo2={logo5}
                    />
                    <ProductCard
                        col={"col-2"}
                        text1={"havells"}
                        text2={
                            "kids headphones bulk 10 back multi colored for ..."
                        }
                        price={"$99.00"}
                        value={3}
                        logo1={logo4}
                        logo2={logo5}
                    />
                    <ProductCard
                        col={"col-2"}
                        text1={"havells"}
                        text2={
                            "kids headphones bulk 10 back multi colored for ..."
                        }
                        price={"$99.00"}
                        value={3}
                        logo1={logo4}
                        logo2={logo5}
                    />
                </Wrapper>
            </div>
        </>
    );
};

export default SimpleCard;
