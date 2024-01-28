"use client"
import { useEffect } from "react";
import headerManager from "@/hooks/headerManager";
import carouselManager from "@/hooks/CarouselManager";
import useFAQManager from "@/hooks/FAQManager";
export default function Home() {
  useEffect(() => {
    return () => {
      headerManager()
      carouselManager()
        useFAQManager()
    };
  }, []);
}
