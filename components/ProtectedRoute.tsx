"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { decodeJwt } from "@/utils/decodeJwt";

interface Props {
  children: React.ReactNode;
  allowedRoles: string[];   // SUPER_ADMIN, EMPLOYEE
}

export default function ProtectedRoute({ children, allowedRoles }: Props) {
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      router.replace("/login");
      return;
    }

    const payload = decodeJwt(token);

    if (!payload?.role) {
      router.replace("/login");
      return;
    }

    // If user role matches allowed roles
    if (allowedRoles.includes(payload.role)) {
      setAllowed(true);
    } else {
      router.replace("/unauthorized");
    }
  }, [router]);

  if (!allowed) return null;

  return <>{children}</>;
}
