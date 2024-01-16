import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
  } from "@/components/ui/carousel";
import GameCard from "./GameCard";

  interface CarouselRumbleProps {
	data: {
	  ids: number[];
	};
  }
 
export default function CarouselRumble({data}: CarouselRumbleProps) {
	
	return (
		<Carousel
		opts={{
		  align: "start",
		}}
		className="w-full md:w-auto flex justify-center items-center"
	  >
		<CarouselContent className="w-full flex justify-center">
			{data.ids.map((id) => (
				<CarouselItem className="md:basis-1/3 lg:basis-1/4" key={id}>
					<GameCard id={id}/>
				</CarouselItem>
			)
			)}
		</CarouselContent>
		<CarouselPrevious />
		<CarouselNext />
	  </Carousel>
	)
}