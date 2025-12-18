import { Metadata } from "next";
import homeSrc from "/public/scale.webp";
import Hero from "@/components/hero";
export const metadata: Metadata = {
  title: "Scale",
  description: "Scale page",
};
export default function Scale() {
  return (
    <Hero
      imgUrl={homeSrc}
      altText="Home"
      content="Scale Cloud Hosting"
    ></Hero>
  );
}