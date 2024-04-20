"use client"
import { useEffect } from "react";
import headerManager from "@/hooks/headerManager";
import carouselManager from "@/hooks/CarouselManager";
import useFAQManager from "@/hooks/FAQManager";
import swiperJS from "@/hooks/swiperJS";
import offresManager from "@/hooks/offresManager";
export default function Home() {
  useEffect(() => {
    return () => {
      headerManager()
      carouselManager()
      useFAQManager()
      swiperJS()
      offresManager()
    };
  }, []);
}
