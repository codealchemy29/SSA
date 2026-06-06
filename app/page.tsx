import About from "@/components/Home/About";
import Events from "@/components/Home/Events";
import Excellence from "@/components/Home/Excellence";
import Facility from "@/components/Home/Facility";
import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import Launching from "@/components/Home/Launching";
import Professionals from "@/components/Home/Professionals";
import Programs from "@/components/Home/Programs";
import Quote from "@/components/Home/Quote";
import Tags from "@/components/Home/Tags";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <Hero />
    <About />
    <Quote />
    <Features />
    <Excellence />
    <Programs />
    <Tags /> 
    <Launching />
    <Professionals />
    <Facility />
    <Events />
   </div>
  );
}
