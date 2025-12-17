import homeSrc from "/public/performance.webp";
import Hero from "@/components/hero";
export default function Performance() {
  return (
    <Hero
      imgUrl={homeSrc}
      altText="Home"
      content="Performance Cloud Hosting"
    ></Hero>
  );
}