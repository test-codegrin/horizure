"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ReactNode } from "react";
import LoadingScreen from "./LoadingScreen";

export default function RouteLoader({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Trigger loading animation whenever route changes
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // match your loader fade timing

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {loading && <LoadingScreen />}
      {children}
    </>
  );
}
