import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {StrictMode} from "react";
import "../assets/style/main.scss";
import Section1 from "@/homeComponents/Section1";
import Section3 from "@/homeComponents/Section3";
import Section4 from "@/homeComponents/Section4";
import Section5 from "@/homeComponents/Section5";
import Section6 from "@/homeComponents/Section6";
import Section7 from "@/homeComponents/Section7";

export const metadata: Metadata = {
  title: "Pascale Darquey",
  description: "Je propose des services liés aux coachings sur Bordeaux. Je suis spécialisée dans le coaching de vie, le coaching professionnel et le coaching scolaire.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
          <body>
          <Header></Header>
          <StrictMode>
              <main>
                  {children}
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
          </StrictMode>
          <Footer></Footer>
          </body>
      </html>
  );
}
