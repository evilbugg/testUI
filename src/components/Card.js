import { useState } from "react";
import UPIoptions from "./UPIOptions";
import UserDetail from "./UserDetail";

const Card = () => {

    const [value, setValue] = useState(10000);
    const [isSelected, setIsSelected] = useState(false);
    const [customSelected, setCustomSelected] = useState(false);
    const [customAmount, setCustomAmount] = useState(0);

    const handleClick = () => {
        setIsSelected(value => !value);
        setCustomSelected(false);
    }

    const handleCustomClick = () => {
        setIsSelected(false);
        setCustomSelected(value => !value);
    }


    return (
        <div className="paymentPage">

            <div className="card">
                <label htmlFor="total-pay" className="content-container">
                    <div className="content">
                        <div className="card-header">
                            Pay total due amount
                        </div>

                        <div className="amount">
                            Rs. {value}
                        </div>
                    </div>

                    <div className="options">
                        <input type="radio" name="" id="total-pay" onClick={handleClick} checked={isSelected} />
                    </div>
                </label>
            </div>



            <div className="card">
                <label htmlFor="pay-custom" className="content-container">
                    <div className="content">
                        <div className="card-header" id="custom-pay">
                            Pay Custom amount
                        </div>
                    </div>

                    <div className="options">
                        <input type="radio" name="" id="pay-custom" onClick={handleCustomClick} checked={customSelected} />
                    </div>
                </label>
            </div>

            {
                isSelected && (
                    <>
                        <UPIoptions />
                        < UserDetail />
                    </>
                )
            }


        </div>

    )

}

export default Card;