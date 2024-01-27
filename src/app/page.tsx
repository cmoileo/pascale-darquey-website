"use client"
import { useEffect } from "react";
import toggle from "../../hooks/toggle";
export default function Home() {
  useEffect(() => {
    return () => {
      toggle()
    };
  }, []);
  return (
    <h1 className="main-title">Hello</h1>
  );
}
