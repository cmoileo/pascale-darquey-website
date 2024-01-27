"use client"
import { useEffect } from "react";
import headerManager from "@/hooks/headerManager";
export default function Home() {
  useEffect(() => {
    return () => {
      headerManager()
    };
  }, []);
  return (
    <h1 className="main-title">Hello</h1>
  );
}
