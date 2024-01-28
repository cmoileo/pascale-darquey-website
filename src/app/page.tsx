"use client"
import { useEffect } from "react";
import headerManager from "@/hooks/headerManager";
import carouselManager from "@/hooks/CarouselManager";
export default function Home() {
  useEffect(() => {
    return () => {
      headerManager()
      carouselManager()
    };
  }, []);
}
