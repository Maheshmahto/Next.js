"use client";

export default function Unauthorized() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold text-red-600">Access Denied</h1>
      <p className="mt-3">You don’t have permission to view this page.</p>
      <a href="/dashboard" className="text-blue-500 underline mt-4 block">
        Go to Dashboard
      </a>
    </div>
  );
}
