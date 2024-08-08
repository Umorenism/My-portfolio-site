import { About } from "./About";
import { Contact } from "./Contact";
import { Hero } from "./Hero";
import { MyService } from "./MyService";
import { Myworks } from "./Myworks";
import { Testimonial } from "./Testimonial";

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Myworks />
      <MyService />
      <Testimonial />
      <Contact />
    </>
  );
};
