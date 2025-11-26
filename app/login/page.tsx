"use client";

import axios from "axios";
import { useState } from "react";

export default function LoginPage() {
  const [Data, setData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    setLoading(true);
    setError(null);
    console.log(Data);
    try {
      const response = await axios.post(
        "http://192.168.29.253:8000/api/login",
        Data,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;
      console.log("LOGIN SUCCESS:", data);

      if (!data.token) {
        setError("Token missing from backend");
        return;
      }

      // ⭐ Store token in sessionStorage
           sessionStorage.setItem("user", data.user);
           sessionStorage.setItem("role", data.user.role);

      sessionStorage.setItem("token", data.token);

      // Redirect after login
      if (data.user.role === "SUPER_ADMIN") {
        window.location.href = "/admin";
      } else {
        window.location.href = "/employee";
      }
    } catch (err: any) {
      console.log(err);
      if (err.response?.data?.detail) {
        setError(err.response.data.detail);
      } else {
        setError("Network error");
      }
    }

    setLoading(false);
  };

  return (
    <div className="p-5 max-w-md mx-auto mt-80">
      <h1 className="text-2xl font-bold mb-4">Login</h1>

      <input
        type="email"
        placeholder="Enter your email"
        className="border p-2 w-full mb-3"
        value={Data.email}
        onChange={(e) => setData({ ...Data, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="Enter your password"
        className="border p-2 w-full mb-3"
        value={Data.password}
        onChange={(e) => setData({ ...Data, password: e.target.value })}
      />

      {error && <div className="text-red-600 mb-3">{error}</div>}

      <button
        onClick={handleLogin}
        className="bg-black text-white p-2 w-full"
        disabled={loading}
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </div>
  );
}
