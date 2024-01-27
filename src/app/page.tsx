"use client"
import { useEffect } from "react";
import headerManager from "@/hooks/headerManager";
export default function Home() {
  useEffect(() => {
    return () => {
      headerManager()
    };
  }, []);
}
