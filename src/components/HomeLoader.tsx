"use client";
import headerManager from "@/hooks/headerManager";
import carouselManager from "@/hooks/CarouselManager";
import useFAQManager from "@/hooks/FAQManager";
import swiperJS from "@/hooks/swiperJS";
import offresManager from "@/hooks/offresManager";
import carouselAutoManager from "@/hooks/CarouselAutoManager";
import {useEffect} from "react";

export default function HomeLoader() {
console.log("HomeLoader loaded !")
    useEffect(() => {
        headerManager()
        carouselManager()
        useFAQManager()
        swiperJS()
        offresManager()
        carouselAutoManager();
    }, []);
    return (
        <div>
        </div>
    );
}