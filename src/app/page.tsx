"use client";
import Image from "next/image";
import React from "react";
import Categories from "@/src/components/categories";
import Search from "../components/search";
import { Plus_Jakarta_Sans, Noto_Sans } from "next/font/google";
import Events from "@/src/components/events";

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const notoSans = Noto_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <div
      className={`relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden ${plusJakartaSans.className} `}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#111518] tracking-light text-[32px] font-bold leading-tight min-w-72">
                Find events and experiences from churches and organizations
              </p>
            </div>
            {/* Search Section */}
            <Search />
            {/* Categories Section */}
            <Categories />
            {/* Events Section */}
            <Events />
          </div>
        </div>
      </div>
    </div>
  );
}
