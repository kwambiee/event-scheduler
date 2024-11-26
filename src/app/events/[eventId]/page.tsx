"use client";

import React, { useEffect, useState } from "react";
import { fetchEvent } from "@/src/utils/fetch";
import { useRouter } from "next/navigation";
import { Button } from "@/src/components/ui/button";
import { Plus_Jakarta_Sans, Noto_Sans } from "next/font/google";

type Props = {
  params: { eventId: number };
};

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

const notoSans = Noto_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const EventPage = ({ params }: Props) => {
  const router = useRouter();
  const [event, setEvent] = useState<Event | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const eventId = params.eventId;

  useEffect(() => {
    if (!eventId) return;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetchEvent(eventId as number);
        setEvent(response);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [eventId]);

  const handleAddToCalendar = () => {
    // format the date and time
    const formatDate = (date: string) => {
      return (
        new Date(date).toISOString().replace(/[-:.]/g, "").slice(0, -4) + "Z"
      );
    };
    const eventStartTime = formatDate(
      event?.start_date + "T" + event?.start_time
    );
    const eventEndTime = formatDate(event?.end_date + "T" + event?.end_time);
    const calendarData = `
      BEGIN:VCALENDAR
      VERSION:2.0
      BEGIN:VEVENT
      SUMMARY:${event?.title}
      DESCRIPTION:${event?.description}
      LOCATION:${event?.location}
      DTSTART:${eventStartTime}  // Format: YYYYMMDDTHHmmssZ
      DTEND:${eventEndTime}      // Format: YYYYMMDDTHHmmssZ
      END:VEVENT
      END:VCALENDAR`;
  };

  return (
    <div
      className={`px-40 flex flex-1 justify-center py-5 font-medium ${plusJakartaSans.className}`}
    >
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="@container">
          <div className="@[480px]:px-4 @[480px]:py-3">
            <div
              className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-white @[480px]:rounded-xl min-h-[218px] rounded-xl"
              style={{
                backgroundImage: `url(${event?.image}) `,
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <div className="flex min-w-72 flex-col gap-3">
            <p className="text-[#111518] text-4xl font-black leading-tight tracking-[-0.033em]">
              {event?.title}
            </p>
            <p className="text-[#60778a] text-base font-normal leading-normal">
              by {event?.organised_by}
            </p>
          </div>
        </div>
        <div className="flex px-4 py-3">
          <Button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-[#2094f3] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-blue-900">
            <span className="truncate">Register</span>
          </Button>
        </div>
        <div className="flex px-4 py-3">
          <Button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-[#f0f2f5] text-[#111518] gap-2 pl-4 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-300">
            <div
              className="text-[#111518]"
              data-icon="Bookmark"
              data-size="20px"
              data-weight="regular"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M184,32H72A16,16,0,0,0,56,48V224a8,8,0,0,0,12.24,6.78L128,193.43l59.77,37.35A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32Zm0,16V161.57l-51.77-32.35a8,8,0,0,0-8.48,0L72,161.56V48ZM132.23,177.22a8,8,0,0,0-8.48,0L72,209.57V180.43l56-35,56,35v29.14Z"></path>
              </svg>
            </div>
            <span className="truncate">Save</span>
          </Button>
        </div>
        <div className="flex justify-stretch">
          <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-start">
            <Button
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-transparent text-[#111518] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-300"
              onClick={handleAddToCalendar}
            >
              <span className="truncate">Add to calendar</span>
            </Button>
            <Button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-transparent text-[#111518] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-300">
              <span className="truncate">Share event</span>
            </Button>
          </div>
        </div>
        <h2 className="text-[#111518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Details
        </h2>
        <div className="p-4 grid grid-cols-2">
          <div className="flex flex-col gap-1 border-t border-solid border-t-[#dbe1e6] py-4 pr-2">
            <p className="text-[#60778a] text-sm font-normal leading-normal">
              Date
            </p>
            <p className="text-[#111518] text-sm font-normal leading-normal">
              {event?.start_date}
            </p>
          </div>
          <div className="flex flex-col gap-1 border-t border-solid border-t-[#dbe1e6] py-4 pl-2">
            <p className="text-[#60778a] text-sm font-normal leading-normal">
              Time
            </p>
            <p className="text-[#111518] text-sm font-normal leading-normal">
              {event?.start_time} - {event?.end_time}
            </p>
          </div>
          <div className="flex flex-col gap-1 border-t border-solid border-t-[#dbe1e6] py-4 pr-2">
            <p className="text-[#60778a] text-sm font-normal leading-normal">
              Location
            </p>
            <p className="text-[#111518] text-sm font-normal leading-normal">
              {event?.location}
            </p>
          </div>
          <div className="flex flex-col gap-1 border-t border-solid border-t-[#dbe1e6] py-4 pl-2">
            <p className="text-[#60778a] text-sm font-normal leading-normal">
              Organizer
            </p>
            <p className="text-[#111518] text-sm font-normal leading-normal">
              {event?.organised_by}
            </p>
          </div>
        </div>
        <h2 className="text-[#111518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Description
        </h2>
        <p className="text-[#111518] text-base font-normal leading-normal pb-3 pt-1 px-4">
          {event?.description}
        </p>
      </div>
    </div>
  );
};

export default EventPage;
