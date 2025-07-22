import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LayOut from "./Components/LayOut";
import Home from "./Pages/Home/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import OurStore from "./Pages/OurStore/OurStore";
// import WishList from "./Components/Header/Components/WishList";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import CompareProducts from "./Pages/CompareProducts/CompareProducts";
import WishList from "./Pages/WishList/WishList";
import LogIn from "./Pages/WishList/LogIn/LogIn";
import LogOut from "./Pages/LogOut/LogOut";
import SimpleCard from "./Components/commonComponents/SimpleCard";
import Shopping from "./Pages/ShoppingCard/Shopping";

function App() {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    {/* <Route path="/" element={<LayOut />}> */}
                    <Route path="/e-commerce-app/" index element={<Home />} />

                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/store" element={<OurStore />} />
                    <Route
                        path="/compareProducts"
                        element={<CompareProducts />}
                    />
                    <Route path="/login" element={<LogIn />} />
                    <Route path="/logout" element={<LogOut />} />
                    <Route path="/wishlist" element={<WishList />} />
                    <Route path="/simple" element={<SimpleCard />} />
                    <Route path="/shoppingCard" element={<Shopping />} />
                </Routes>
                <Footer />
            </Router>
        </>
    );
}

export default App;
