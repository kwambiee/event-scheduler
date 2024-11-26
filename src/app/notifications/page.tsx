"use client";

import React, { useEffect, useState } from "react";
import { fetchEvents } from "@/src/utils/fetch";
import { LoaderCircle } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Plus_Jakarta_Sans, Noto_Sans } from "next/font/google";

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

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const Notifications = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [notifications, setNotifications] = useState<
    (Event & { timeMessage: string })[]
  >([]);

  // Convert date and time to a Date object
  const toDateTime = (date: any, time: any) =>{
    // convert time to 24 hour
    const time12h = time;
    const [timeStr, modifier] = time12h.split(" ");
    let [hours, minutes] = timeStr.split(":");
    if (hours === "12") {
      hours = "00";
    }
    if (modifier === "PM") {
      hours = parseInt(hours, 10) + 12;
    }
    const formattedTime = `${hours}:${minutes}`;
    const eventDate = new Date(`${date}T${formattedTime}`);
    return eventDate;
  };


  // Function to check and format time remaining
  const getTimeMessage = (event: Event) => {
    const now = new Date();
    const eventStart = toDateTime(event.start_date, event.start_time);
    const timeDifference = eventStart.getTime() - now.getTime();
   

    if (timeDifference <= 0) {
      return "The event is happening now!";
    } else if (timeDifference < 30 * 60 * 1000) {
      return "Starts in less than 30 minutes";
    } else if (timeDifference < 2 * 60 * 60 * 1000) {
      return "Starts in less than 2 hours";
    } else if (timeDifference < 24 * 60 * 60 * 1000) {
      return "Starts later today";
    } else {
      return "Starts in more than a day";
    }
  };

  const fetch = async () => {
    try {
      setIsLoading(true);
      const response = await fetchEvents();
      setEvents(response);
      const updatedNotifications = response.map((event) => ({
        ...event,
        timeMessage: getTimeMessage(event),
      }));
      setNotifications(updatedNotifications);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetch();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#007aff]">
          {/* <LoaderCircle size={32} stroke="#007aff" /> */}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`px-40 flex flex-1 justify-center py-5 font-medium ${plusJakartaSans.className}`}
    >
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <p className="text-[#111518] text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
            Your notifications
          </p>
        </div>
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between"
          >
            <div className="flex items-center gap-4">
              <div
                className="text-[#111518] flex items-center justify-center rounded-lg bg-[#f0f2f5] shrink-0 size-12"
                data-icon="Clock"
                data-size="24px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#111518] text-base font-medium leading-normal line-clamp-1">
                  {notification.title}
                </p>
                <p className="text-[#60778a] text-sm font-normal leading-normal line-clamp-2">
                  {notification.timeMessage}
                </p>
              </div>
            </div>
            <div className="shrink-0">
              <Button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-8 px-4 bg-[#f0f2f5] text-[#111518] text-sm font-medium leading-normal w-fit hover:bg-gray-300">
                <span className="truncate">Open event</span>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
