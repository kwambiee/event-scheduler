"use client";
import React, { useState, useEffect } from "react";
import { fetchCategories } from "../utils/fetch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";

type Checked = DropdownMenuCheckboxItemProps["checked"];

type Category = {
  id: number;
  title: string;
};

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    try {
      setIsLoading(true);
      const response = await fetchCategories();
      setCategories(response);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };


  // Limits
  const mobileLimit = 2;
  const largeScreenLimit = 5;

  return (
    <div className="p-4">
      {/* Large screen layout */}
      <div className="hidden lg:grid lg:grid-cols-6 space-x-3 flex-wrap">
        {/* "All" dropdown button */}

        <div className="relative inline-flex gap-x-2">
          <select
            className="flex h-8 w-36 px-4 shrink-0 items-center justify-center rounded-xl bg-[#f0f2f5] text-sm"
            // onChange={handleCategories}
          >
            <option value="" className="">
              {" "}
              All services{" "}
            </option>
            {categories.map((cat: Category, i) => (
              <option key={i} value={cat.id} className="">
                {cat.title}
              </option>
            ))}
          </select>
        </div>

        {/* Render the first 6 categories for large screens */}
        {categories.slice(0, largeScreenLimit).map((category, index) => (
          <div
            key={index}
            className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f5] px-4 outline outline-2 outline-transparent hover:outline-black"
          >
            <button className="text-[#111518] text-sm font-medium leading-normal">
              {category.title}
            </button>
          </div>
        ))}
      </div>

      {/* Mobile layout */}
      <div className="grid grid-cols-3 flex-wrap lg:hidden">
        <div className="relative inline-flex">
          <select
            className="flex h-8 w-24 shrink-0 items-center justify-center rounded-xl bg-[#f0f2f5]"
            // onChange={handleCategories}
          >
            <option value="" className="w-32 font-medium text-sm">
              {" "}
              All services{" "}
            </option>
            {categories.map((cat: Category, i) => (
              <option
                key={i}
                value={cat.id}
                className="w-32 font-medium text-[0.5rem]"
              >
                {cat.title}
              </option>
            ))}
          </select>
        </div>

        {/* Render the first 3 categories for mobile screens */}
        {categories.slice(0, mobileLimit).map((category, index) => (
          <div
            key={index}
            className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#f0f2f5] px-4 outline outline-2 outline-transparent hover:outline-black"
          >
            <button className="text-[#111518] text-sm font-medium leading-normal">
              {category.title}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
