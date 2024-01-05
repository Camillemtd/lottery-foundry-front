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
    <div className="w-full class flex items-end max-width">
      <div className="flex justify-between items-center px-3 h-1/2  w-full bg-black  bg-opacity-50 ">
        <Neon />
        <div className="flex justify-center md:w-2/3 w-4/5 ">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-2/3 md:w-full"
          >
            <CarouselContent>
              <CarouselItem className="md:basis-1/3 lg:basis-1/4">
                <GameCard />
              </CarouselItem>
              <CarouselItem className="md:basis-1/3 lg:basis-1/4">
                <GameCard />
              </CarouselItem>
              <CarouselItem className="md:basis-1/3 lg:basis-1/4">
                <GameCard />
              </CarouselItem>
              <CarouselItem className="md:basis-1/3 lg:basis-1/4">
                <GameCard />
              </CarouselItem>
              <CarouselItem className="md:basis-1/3 lg:basis-1/4">
                <GameCard />
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
