"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function AdminPage() {
  return (
    <ProtectedRoute allowedRoles={["SUPER_ADMIN"]}>
      <div className="p-5">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
      </div>
    </ProtectedRoute>
  );
}
