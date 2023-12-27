import GameCard from "@/components/GameCard";
import Neon from "@/components/Neon";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <div className="w-full class flex items-end">
      <div className="flex justify-between items-center px-3 h-1/2 w-full bg-black  bg-opacity-90 ">
        <Neon />
        <div className="w-3/5">
           <Carousel>
          <CarouselContent>
            <CarouselItem>
              <GameCard/>
            </CarouselItem>
            <CarouselItem>
              <GameCard/>
            </CarouselItem>
            <CarouselItem>
              <GameCard/>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        </div>
       

   
       
        <Neon />
      </div>
    </div>
  );
}
