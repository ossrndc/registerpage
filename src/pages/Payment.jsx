import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;
  const { contactData, formData } = location.state || {};

const handlePayment = async () => {
  try {
    const orderRes = await axios.post(`${backendUrl}/api/v1/createOrder`, {
      amount: 100, // You can adjust this dynamically based on your business logic
    });
    console.log("Razorpay Key:", import.meta.env.VITE_RAZORPAY_KEY_ID);
    const { id: order_id, currency, amount } = orderRes.data;

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount,
      currency,
      name: "My Razorpay Store",
      description: "Buy One Item",
      order_id,
      handler: async function (response) {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = response;

        try {
          // Send the payment details to the backend for verification and storing the transaction
          const verifyRes = await axios.post(`${backendUrl}/api/v1/verifypayment`, {
            order_id: razorpay_order_id,
            payment_id: razorpay_payment_id,
            signature: razorpay_signature,
            formData,
            contactData,
            // studentData,
          });

          if (verifyRes.data.success) {
            // Send the payment data to the backend after successful payment verification
            const paymentData = {
              order_id: razorpay_order_id,
              payment_id: razorpay_payment_id,
              signature: razorpay_signature,
              formData,
              contactData,
              // studentData,
            };

            // Send this payment data to the backend for further processing (e.g., saving to DB)
            const savePaymentRes = await axios.post(`${backendUrl}/api/v1/savepayment`, paymentData);

            if (savePaymentRes.data.success) {
              alert("✅ Payment successful and data saved!");
              navigate("/registered", {
                state: {
                  contactData,
                  formData,
                  // studentData,
                  paymentDetails: {
                    order_id: razorpay_order_id,
                    payment_id: razorpay_payment_id,
                    signature: razorpay_signature,
                  },
                },
              });
            } else {
              alert("❌ Failed to save payment data.");
            }
          } else {
            alert("❌ Payment verification failed.");
          }
        } catch (error) {
          console.error("Verification or Save Error:", error);
          alert("Server error during verification or saving payment.");
        }
      },
      prefill: {
        name: contactData?.Name || "",
        email: contactData?.Email || "",
        contact: contactData?.contact || "",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  } catch (error) {
    console.error("Payment Error:", error);
    alert("Something went wrong.");
  }
};
return (
  <div className="w-full h-screen p-6 md:p-20">
    {/* OSS Logo */}
<div className="fixed top-4 left-4 md:top-10 md:left-20 z-50">
<img 
  src="/OSS.png" 
  alt="OSS Logo" 
  className="w-16 sm:w-20 md:w-28 h-auto max-w-full"
/>
</div>

{/* HTML Icon */}
<div className="fixed top-30 left-4 md:top-40 md:left-40 z-50">
<img 
  src="/images/html.png" 
  alt="Cross" 
  className="w-10 sm:w-12 md:w-14 lg:w-14 h-auto max-w-full"
/>
</div>
{/* Dot Icon */}
<div className="fixed top-140 left-2 md:top-100 md:left-20 z-50">
<img 
  src="/images/pinkdot.png" 
  alt="Cross" 
  className="w-5 sm:w-8 md:w-10 lg:w-14 h-auto max-w-full"
/>
</div>
<div className="fixed top-140 left-10 md:top-100 md:left-40 z-50">
<img 
  src="/images/pinkdot.png" 
  alt="Cross" 
  className="w-5 sm:w-8 md:w-10 lg:w-14 h-auto max-w-full"
/>
</div>
{/* Zigzag Icon */}
<div className="fixed top-140 right-4 md:top-150 md:right-10 z-50">
<img 
  src="/images/zigzag.png" 
  alt="Cross" 
  className="w-16 sm:w-18 md:w-26 lg:w-30 h-auto max-w-full"
/>
</div>
<h1 className="text-3xl md:text-4xl mt-10 md:mt-0 text-center font-bold text-[#92FAE0]">
  Register Yourself
</h1>

<div className="w-full flex flex-col-reverse md:flex-row items-center md:items-start p-4 md:p-20 gap-10">
  
  {/* Left Content */}
  <div className="w-full md:w-[60%] pt-4 md:pt-8">
    <p className="text-xl md:text-3xl text-center font-bold text-[#92FAE0]">
      "Get started with just ₹100! Register now and become a part of something amazing."
    </p>
    <div className="flex justify-center mt-12 md:mt-24">
      <button
        onClick={handlePayment}
        className="px-6 md:px-8 py-2 text-[#E96EAC99] border border-[#E96EAC99] text-lg md:text-xl rounded-lg font-semibold active:scale-90 transition-transform duration-150 outline-none bg-[#180B3Fe0] backdrop-blur-md z-10 relative"
      >
        Pay Now
      </button>
    </div>
  </div>

  {/* Image */}
  <div className="w-full md:w-[40%] flex justify-center">
    <img
      className="w-60 h-60 md:w-[440px] md:h-[440px] object-contain"
      src="/images/Wallet.png"
      alt="Wallet"
    />
  </div>
</div>
</div>
);
};

export default Payment;