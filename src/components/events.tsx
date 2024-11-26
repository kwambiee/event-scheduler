"use client";
import { title } from "process";
import React, { useEffect, useState } from "react";
import { fetchEvents } from "../utils/fetch";
import { Skeleton } from "./ui/skeleton";

type Event = {
  id: number;
  title: string;
  description: string;
  image: string;
  start_date: string;
  end_date: string;
  start_time: string;
  end_time: string;
  location: string;
  organised_by: string;
};



const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    try {
      setIsLoading(true);
      const response = await fetchEvents();
      setEvents(response);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3 p-4 ">
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-[125px] w-[250px] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3 p-4 "
    >
      {events.map((event: Event) => (
        <div className="flex flex-col gap-3 pb-3" key={event.id}>
          <img
            src={event.image}
            alt={event.title}
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
          />
          <div>
            <p className="text-[#111518] text-base font-bold leading-tight">
              {event.title}
            </p>
            <p className="text-[#60778a] text-sm font-normal leading-normal">
              {event.start_date} at {event.start_time}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Events;
