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
	console.log(data);
	
	return (
		<Carousel
		opts={{
		  align: "start",
		}}
		className="w-2/3 md:w-full"
	  >
		<CarouselContent>
			{data.ids.map((id, index) => (
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