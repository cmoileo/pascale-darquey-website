import headerManager from "../hooks/headerManager";
import carouselManager from "../hooks/CarouselManager";
import useFAQManager from "../hooks/FAQManager";
import swiperJS from "../hooks/swiperJS";
import offresManager from "../hooks/offresManager";
import carouselAutoManager from "../hooks/CarouselAutoManager";
import Section1 from "@/homeComponents/Section1";
import Section7 from "@/homeComponents/Section7";
import Section3 from "@/homeComponents/Section3";
import Section4 from "@/homeComponents/Section4";
import Section6 from "@/homeComponents/Section6";
import HomeLoader from "@/components/HomeLoader";
export default function Home() {
  return (
      <main>
          <HomeLoader></HomeLoader>
        <Section1></Section1>
        <Section7></Section7>
        <hr></hr>
        {/*<Section5></Section5>*/}
        <Section3></Section3>
        <hr></hr>
        <Section4></Section4>
        <hr></hr>
        <Section6></Section6>
      </main>
  )
}
