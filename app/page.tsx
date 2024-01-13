'use client';
import CreateRumble from "@/components/CreateRumble";
import GameCard from "@/components/GameCard";
import ReadContract from "@/components/ReadContract";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <div className="w-full class flex justify-center items-center max-width flex-col">
      <div className="flex justify-center items-center px-3 h-1/2  w-full  ">
        <ReadContract/>
        {/* <div className="flex justify-center md:w-2/3 w-4/5 ">
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
        </div> */}
      </div>
    </div>
  );
}
