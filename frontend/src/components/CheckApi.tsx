import React, { useEffect, useState } from "react";
import axios from "axios"

const API_URL = "http://localhost:5000"; // test

const CheckApi: React.FC = () => {
  const [status, setStatus] = useState<string>("Checking backend...");
    useEffect(() => {
    const checkBackend = async () => {
      try {
        const response = await axios.get(`${API_URL}/test`);
        if (response.status === 200) {
          setStatus("✅ Backend is running: " + response.data.message);
        } else {
          setStatus("⚠️ Backend responded with an error");
        }
      } catch (error) {
        console.error(error);
        setStatus("❌ Cannot reach backend (Network error)");
      }
    };
        checkBackend();
  }, []);
      return (
        <div>
          <h2>Backend Status</h2>
          <p>{status}</p>
        </div>
      );

}
export default CheckApi;