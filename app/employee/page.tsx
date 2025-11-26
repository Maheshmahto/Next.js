"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function EmployeePage() {
  return (
    <ProtectedRoute allowedRoles={["EMPLOYEE"]}>
      <div className="p-5 mt-80">
        <h1 className="text-2xl font-bold">Employee Dashboard</h1>
      </div>
    </ProtectedRoute>
  );
}
