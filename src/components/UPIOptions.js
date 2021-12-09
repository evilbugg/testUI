import PhonePe from '../images/phonePe.png';
import BHIM from '../images/BHIM.png';
import PAYTM from '../images/PAYTM.png';
import GooglePay from '../images/GooglePay.png';

const upiArray = [
    {
        upiName: 'PhonePe',
        source: PhonePe
    },
    {
        upiName: 'BHIM',
        source: BHIM
    },
    {
        upiName: 'PAYTM',
        source: PAYTM
    },
    {
        upiName: 'Google Pay',
        source: GooglePay
    },

]

const UPIoptions = () => {
    return (
        <section className="paymentMethod-container">
            <header className="paymentMethod-header">
                Choose a payment method
            </header>
            <main className="paymentMethod-main">

                <span id="upi-header">
                    UPI
                </span>

                <div className="paymentOptions">

                    {
                        upiArray.map(({ upiName, source }) => {

                            return (
                                <div className="upiOptions">
                                    <div className="img-container">
                                        <img src={source} alt="phoneImage" className="upi-img" />
                                    </div>

                                    <div className="upiName">
                                        {upiName}
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>

            </main>
        </section>);
}

export default UPIoptions;