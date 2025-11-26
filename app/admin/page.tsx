"use client";

import ProtectedRoute from "@/components/ProtectedRoute";

export default function AdminPage() {
  return (
    <ProtectedRoute allowedRoles={["SUPER_ADMIN"]}>
      <div className="h-full flex justify-center items-center">
        <div>
        <h1 className="text-2xl font-bold mt-96">Admin Panel</h1>

        </div>
      </div>
    </ProtectedRoute>
  );
}
