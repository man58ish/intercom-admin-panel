import React, { useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("Admin User");
  const [email, setEmail] = useState("admin@example.com");

  const handleSave = (e) => {
    e.preventDefault();
    alert(`Saved: ${name}, ${email}`);
    setShowModal(false);
  };

  return (
    <div className="p-4">
      <h3>User Profile</h3>
      <div className="card mt-3 p-4">
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Role:</strong> Administrator
        </p>
        <p>
          <strong>Location:</strong> India
        </p>
        <button
          className="btn btn-primary mt-3"
          onClick={() => setShowModal(true)}
        >
          Edit Profile
        </button>
      </div>

      {/* Edit Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h5>Edit Profile</h5>
            <form onSubmit={handleSave}>
              <input
                type="text"
                className="form-control my-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                id="profileName"
                name="profileName"
                placeholder="Name"
              />
              <input
                type="email"
                className="form-control my-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                id="profileEmail"
                name="profileEmail"
                placeholder="Email"
              />
              <div className="d-flex justify-content-end mt-3">
                <button
                  type="button"
                  className="btn btn-secondary me-2"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-success">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
