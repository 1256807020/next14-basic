import homeSrc from "/public/scale.webp";
import Hero from "@/components/hero";
export default function Scale() {
  return (
    <Hero
      imgUrl={homeSrc}
      altText="Home"
      content="Scale Cloud Hosting"
    ></Hero>
  );
}