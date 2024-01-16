"use client";
import React, { useEffect } from "react";
import useReadContract from "../hooks/useReadContract"; 
import CarouselRumble from "@/components/CarouselRumble";


export default function Home() {
  const { data, loading, error, execute } = useReadContract();

  useEffect(() => {
    execute("getActiveRumbleIds");
  }, [execute]);

  // Transformer la data en un format compatible avec CarouselRumble
  const transformedData = {
    ids: data ? data.map((id: bigint) => Number(id)) : []
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="w-full class flex justify-center items-center max-width flex-col">
      <div className="flex justify-center items-center px-3 h-1/2  w-2/3  ">
        <CarouselRumble data={transformedData} />
      </div>
    </div>
  );
}