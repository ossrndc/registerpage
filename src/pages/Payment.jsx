import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { contactData, formData } = location.state || {};

//   const handlePayment = async () => {
//     try {
//       const orderRes = await axios.post("http://localhost:5000/api/v1/createOrder", {
//         amount: 100,
//       });

//       const { id: order_id, currency, amount } = orderRes.data;

//       const options = {
//         key: import.meta.env.VITE_RAZORPAY_KEY_ID,
//         amount,
//         currency,
//         name: "My Razorpay Store",
//         description: "Buy One Item",
//         order_id,
//         handler: async function (response) {
//           const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = response;

//           try {
//             const verifyRes = await axios.post("http://localhost:5000/api/v1/verifypayment", {
//               order_id: razorpay_order_id,
//               payment_id: razorpay_payment_id,
//               signature: razorpay_signature,
//               formData,
//               contactData,
//             });

//             if (verifyRes.data.success) {
//               alert("✅ Payment verified successfully!");
//               navigate("/registered", {
//                 state: {
//                   contactData,
//                   formData,
//                   paymentDetails: {
//                     order_id: razorpay_order_id,
//                     payment_id: razorpay_payment_id,
//                     signature: razorpay_signature,
//                   },
//                 },
//               });
//             } else {
//               alert("❌ Payment verification failed.");
//             }
//           } catch (error) {
//             console.error("Verification error:", error);
//             alert("Server error during verification.");
//           }
//         },
//         prefill: {
//           name: contactData?.Name || "",
//           email: contactData?.Email || "",
//           contact: contactData?.contact || "",
//         },
//         theme: {
//           color: "#3399cc",
//         },
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();
//     } catch (error) {
//       console.error("Payment Error:", error);
//       alert("Something went wrong.");
//     }
//   };
const handlePayment = async () => {
  try {
    const orderRes = await axios.post("http://localhost:5000/api/v1/createOrder", {
      amount: 100, // You can adjust this dynamically based on your business logic
    });

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
          const verifyRes = await axios.post("http://localhost:5000/api/v1/verifypayment", {
            order_id: razorpay_order_id,
            payment_id: razorpay_payment_id,
            signature: razorpay_signature,
            formData,
            contactData,
          });

          if (verifyRes.data.success) {
            // Send the payment data to the backend after successful payment verification
            const paymentData = {
              order_id: razorpay_order_id,
              payment_id: razorpay_payment_id,
              signature: razorpay_signature,
              formData,
              contactData,
            };

            // Send this payment data to the backend for further processing (e.g., saving to DB)
            const savePaymentRes = await axios.post("http://localhost:5000/api/v1/savepayment", paymentData);

            if (savePaymentRes.data.success) {
              alert("✅ Payment successful and data saved!");
              navigate("/registered", {
                state: {
                  contactData,
                  formData,
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
      <h1 className="text-3xl md:text-4xl mt-10 text-center font-bold text-[#92FAE0]">
        Register Yourself
      </h1>
      <div className="flex justify-center mt-20">
        <button
          onClick={handlePayment}
          className="px-6 py-2 text-[#E96EAC99] border border-[#E96EAC99] text-lg rounded-lg font-semibold bg-[#180B3Fe0]"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default Payment;
