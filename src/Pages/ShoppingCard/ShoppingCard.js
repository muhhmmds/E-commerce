import React from "react";
import Counter from "../../Components/commonComponents/Counter";
import { useDispatch, useSelector } from "react-redux";

const ShoppingCard = ({
    id,
    logo1,
    text2,
    price1,
    total,
    size,
    color,
    totalQuantity,
}) => {
    // const { cart, totalQuantity, totalPrice } = useSelector(
    //     (state) => state.allCart
    // );
    const dispatch = useDispatch();

    return (
        <>
            <div
                className="card-details d-flex justify-content-between py-3  align-items-center"
                key={id}
            >
                <div className="card-col-1 d-flex gap-15 align-items-center">
                    <div className="w-25">
                        <img src={logo1} className="img-fluid" alt=" product" />
                    </div>
                    <div className="w-75">
                        <p className="title mb-0 text-capitalize">{text2}</p>
                        <p className="size mb-0 text-capitalize">
                            Size: {size}
                        </p>
                        <p className="color mb-0 text-capitalize">
                            Color: {color}
                        </p>
                    </div>
                </div>
                <div className="card-col-2">
                    <h5>{price1}</h5>
                </div>
                <div className="card-col-3">
                    <Counter totalQuantity={totalQuantity} one={id} />
                </div>
                <div className="card-col-4">
                    <h5>{price1}</h5>
                </div>
            </div>
        </>
    );
};
// const ShoppingCard = ({ logo1, text2, size, color, total, price1 }) => {
//     const price = useSelector((state) => state.allCart.totalQuantity);
//     console.log(total);
//     return (
//         <>
//             <div className="card-details d-flex justify-content-between py-3  align-items-center">
//                 <div className="card-col-1 d-flex gap-15 align-items-center">
//                     <div className="w-25">
//                         <img src={logo1} className="img-fluid" alt=" product" />
//                     </div>
//                     <div className="w-75">
//                         <p className="title mb-0 text-capitalize">{text2}</p>
//                         <p className="size mb-0 text-capitalize">
//                             Size: {size}
//                         </p>
//                         <p className="color mb-0 text-capitalize">
//                             Color: {color}
//                         </p>
//                     </div>
//                 </div>
//                 <div className="card-col-2">
//                     <h5>{price1}</h5>
//                 </div>
//                 <div className="card-col-3">
//                     <Counter total={total} />
//                 </div>
//                 <div className="card-col-4">
//                     <h5>{price}</h5>
//                 </div>
//             </div>
//         </>
//     );
// };

export default ShoppingCard;
