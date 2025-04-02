import React, { useState } from "react";
import "../styles/Payment.css";

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    billingAddress: "",
    paymentMethod: "credit-card",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment Processed Successfully!");
    console.log(formData);
  };

  return (
    <div className="checkout-container">
      <h2>Apartment Rental Checkout</h2>
      <form onSubmit={handleSubmit} className="checkout-form">
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Card Number</label>
          <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} maxLength="16" required />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Expiry Date</label>
            <input type="date" name="expiryDate" value={formData.expiryDate} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>CVV</label>
            <input type="text" name="cvv" value={formData.cvv} onChange={handleChange} maxLength="3" required />
          </div>
        </div>

        <div className="form-group">
          <label>Billing Address</label>
          <input type="text" name="billingAddress" value={formData.billingAddress} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Payment Method</label>
          <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange}>
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bank-transfer">Bank Transfer</option>
          </select>
        </div>

        <button type="submit" className="checkout-btn">Pay Now</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
