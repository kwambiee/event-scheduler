"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { useState, useEffect } from "react";

const schema = z.object({
  search: z.string().min(1, "Search query is required"),
});

const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      search: "",
    },
  });

  // Watch for changes in the "search" field
  const searchFieldValue = form.watch("search");

  useEffect(() => {
    setSearchValue(searchFieldValue);
  }, [searchFieldValue]);

  return (
    <div className="px-4 py-3">
      <Form {...form}>
        <form>
          <FormField
            control={form.control}
            name="search"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex flex-col min-w-40 h-12 w-full">
                  <div className="flex w-full items-stretch rounded-xl h-full">
                    <div
                      className="text-[#60778a] flex bg-[#f0f2f5] items-center justify-center pl-4 rounded-l-xl"
                      data-icon="MagnifyingGlass"
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
                        <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                      </svg>
                    </div>
                    <FormControl>
                      <Input
                        placeholder="Search for events, organizations, or keywords"
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111518] focus:outline-0 focus:ring-0 border-none bg-[#f0f2f5] focus:border-none h-full placeholder:text-[#60778a] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                        {...field}
                      />
                    </FormControl>
                  </div>
                </FormLabel>
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};

export default Search;
