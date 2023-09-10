import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

const Payment = () => {
    // TODO: provide publishable Key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
    return (
        <div>
        <SectionTitle subHeading="please process" heading="Payment"></SectionTitle>
        <h2 className="text-3xl"> Teka o teka tumi uira uira aso...</h2>
        <Elements stripe={stripePromise}>
            <CheckoutForm/>
        </Elements>
    </div>
    );
};

export default Payment;