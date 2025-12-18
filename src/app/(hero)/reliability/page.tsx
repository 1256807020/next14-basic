import { Metadata } from "next";
import homeSrc from "/public/reliability.webp";
import Hero from "@/components/hero";
export const metadata: Metadata = {
  title: "Reliability",
  description: "Reliability page",
};
export default function Reliability() {
  return (
    <Hero
      imgUrl={homeSrc}
      altText="Home"
      content="Reliability Cloud Hosting"
    ></Hero>
  );
}