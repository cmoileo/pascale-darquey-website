"use client"
import { useEffect } from "react";
import headerManager from "@/hooks/headerManager";
import carouselManager from "@/hooks/CarouselManager";
import useFAQManager from "@/hooks/FAQManager";
import swiperJS from "@/hooks/swiperJS";
export default function Home() {
  useEffect(() => {
    return () => {
      headerManager()
      carouselManager()
      useFAQManager()
      swiperJS()
    };
  }, []);
}
