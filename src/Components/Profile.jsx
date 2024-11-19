import React, { useState } from "react";
import "../Styles/Profile.css";

const Profile = () => {
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    address: "1234 Main St, City, Country",
    phoneNumber: "123-456-7890",
    orders: [
      { id: 1, date: "2024-11-10", status: "Delivered", total: "$120.50" },
      { id: 2, date: "2024-10-15", status: "Shipped", total: "$89.99" },
    ],
    discountCodes: [
      { code: "SAVE10", description: "Save 10% on your next order", used: false },
      { code: "FREESHIP", description: "Free shipping on orders over $50", used: true },
    ],
  });

  const [isEditing, setIsEditing] = useState(false);
  const [updatedInfo, setUpdatedInfo] = useState({ ...userInfo });
  const [discountCode, setDiscountCode] = useState("");
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  // Phone verification method
  const verifyPhoneNumber = () => {
    setIsPhoneVerified(true);
  };

  // Email verification method
  const verifyEmail = () => {
    setIsEmailVerified(true);
  };

  // Method for applying discount code
  const applyDiscount = () => {
    if (discountCode === "SAVE10") {
      alert("Discount code applied successfully.");
    } else {
      alert("Invalid discount code.");
    }
  };

  // Method for logging out
  const logout = () => {
    alert("You have logged out successfully.");
  };

  // Method for deleting account
  const deleteAccount = () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      alert("Your account has been deleted.");
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setUserInfo(updatedInfo);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedInfo({ ...updatedInfo, [name]: value });
  };

  return (
    <div className="profile-container">
      <h1 className="profile-title">Your Profile</h1>

      {/* Profile Info */}
      <div className="profile-info">
        <h2>Account Information</h2>
        <div className="info-item">
          <label>Name</label>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={updatedInfo.name}
              onChange={handleChange}
            />
          ) : (
            <span>{userInfo.name}</span>
          )}
        </div>
        <div className="info-item">
          <label>Email</label>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={updatedInfo.email}
              onChange={handleChange}
            />
          ) : (
            <span>{userInfo.email}</span>
          )}
        </div>
        <div className="info-item">
          <label>Address</label>
          {isEditing ? (
            <input
              type="text"
              name="address"
              value={updatedInfo.address}
              onChange={handleChange}
            />
          ) : (
            <span>{userInfo.address}</span>
          )}
        </div>
        <div className="info-item">
          <label>Phone Number</label>
          {isPhoneVerified ? (
            <span>{userInfo.phoneNumber} (Verified)</span>
          ) : (
            <button onClick={verifyPhoneNumber}>Verify Phone</button>
          )}
        </div>
        
        {/* Email Verification Section */}
        <div className="info-item">
          <label>Email Verification</label>
          {isEmailVerified ? (
            <span>{userInfo.email} (Verified)</span>
          ) : (
            <button onClick={verifyEmail}>Verify Email</button>
          )}
        </div>

        <button onClick={isEditing ? handleSaveClick : handleEditClick}>
          {isEditing ? "Save Changes" : "Edit Info"}
        </button>
      </div>

      {/* Discount Code */}
      <div className="discount-code">
        <h2>Apply Discount Code</h2>
        <input
          type="text"
          placeholder="Enter Discount Code"
          value={discountCode}
          onChange={(e) => setDiscountCode(e.target.value)}
        />
        <button onClick={applyDiscount}>Apply</button>
      </div>

      {/* My Discount Codes */}
      <div className="my-discount-codes">
        <h2>My Discount Codes</h2>
        {userInfo.discountCodes.length === 0 ? (
          <p>No discount codes available.</p>
        ) : (
          <ul>
            {userInfo.discountCodes.map((code, index) => (
              <li key={index}>
                <span>{code.code}</span> - {code.description}{" "}
                {code.used ? <span>(Used)</span> : <span>(Active)</span>}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Order History */}
      <div className="order-history">
        <h2>Order History</h2>
        {userInfo.orders.length === 0 ? (
          <p>You have no orders yet.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Status</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {userInfo.orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.date}</td>
                  <td>{order.status}</td>
                  <td>{order.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Logout and Delete Account */}
      <div className="account-actions">
        <button onClick={logout}>Logout</button>
        <button onClick={deleteAccount}>Delete Account</button>
      </div>
    </div>
  );
};

export default Profile;
