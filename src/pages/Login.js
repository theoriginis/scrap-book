import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [key, setKey] = useState("");
  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    setKey(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/"); // Redirect to home page after login
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "rgba(255, 255, 255, 0.1)",
          padding: "40px",
          borderRadius: "10px",
          backdropFilter: "blur(10px)",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <h2 style={{ color: "#fff", fontWeight: "600" }}>The Scrap Book</h2>
          <p style={{ color: "#ccc", fontSize: "14px" }}>Login to continue</p>
        </div>

        <Form className="pt-3" onSubmit={handleSubmit}>
          <Form.Group className="d-flex search-field" style={{ marginBottom: "15px" }}>
            <Form.Control
              type="text"
              name="key"
              placeholder="Enter key"
              size="lg"
              className="h-auto"
              value={key}
              onChange={handleChangeInput}
              style={{
                background: "#fff)",
                color: "#fff",
                border: "none",
                padding: "12px",
                borderRadius: "5px",
              }}
            />
          </Form.Group>

          <div className="mt-3">
            <button
              style={{
                width: "100%",
                background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
                color: "#fff",
                padding: "12px",
                fontSize: "16px",
                fontWeight: "bold",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "0.3s ease",
              }}
              type="submit"
              onMouseOver={(e) => (e.target.style.background = "#1e40af")}
              onMouseOut={(e) =>
                (e.target.style.background = "linear-gradient(135deg, #2563eb, #1d4ed8)")
              }
            >
            SUBMIT
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
