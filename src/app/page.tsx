import ChatInput from "@/components/home/ChatInput";
import HeroSection from "@/components/home/HeroSection";
import HomeProfileCards from "@/components/home/HomeProfileCards";
import HomeVideoCatalog from "@/components/home/HomeVideoCatalog";
import HowItWorks from "@/components/home/HowItWorks";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <HomeProfileCards />
      <ChatInput />
      <HowItWorks />
      <HomeVideoCatalog />
    </div>
  );
}
