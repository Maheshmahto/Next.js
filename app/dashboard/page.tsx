"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function Dashboard() {
  return (
    <ProtectedRoute allowedRoles={["SUPER_ADMIN", "EMPLOYEE"]}>
      <div className="p-5">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
    </ProtectedRoute>
  );
}
