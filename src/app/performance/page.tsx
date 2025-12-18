import { Metadata } from "next";
import homeSrc from "/public/performance.webp";
import Hero from "@/components/hero";
export const metadata: Metadata = {
  title: "Performance",
  description: "Performance page",
};
export default function Performance() {
  return (
    <Hero
      imgUrl={homeSrc}
      altText="Home"
      content="Performance Cloud Hosting"
    ></Hero>
  );
}