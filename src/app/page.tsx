"use client"
import { useEffect } from "react";
import headerManager from "../hooks/headerManager";
import carouselManager from "../hooks/CarouselManager";
import useFAQManager from "../hooks/FAQManager";
import swiperJS from "../hooks/swiperJS";
import offresManager from "../hooks/offresManager";
import carouselAutoManager from "../hooks/CarouselAutoManager";
export default function Home() {
  console.log("home loaded 1 without return !")
  useEffect(() => {
    console.log("home loaded 2 !")
    console.log(headerManager)
    headerManager()
    carouselManager()
    useFAQManager()
    swiperJS()
    offresManager()
    carouselAutoManager();
  }, []);
}
