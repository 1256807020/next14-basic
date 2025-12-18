import homeSrc from "/public/home.webp";
import Hero from "@/components/hero";
export default function Home() {
  return (
    <Hero
      imgUrl={homeSrc}
      altText="Home"
      content="Professional Cloud Hosting"
    ></Hero>
  );
}
