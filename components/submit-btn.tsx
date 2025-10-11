"use client";

import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      disabled={pending}
      variant="default"
      className={`
        group relative flex items-center justify-center gap-2
        h-[3rem] w-[8rem] rounded-full font-semibold tracking-wide
        transition-all duration-300 ease-out
        focus:scale-105 hover:scale-[1.03] active:scale-[0.97]
        bg-gray-900 text-white hover:bg-gray-800
        dark:bg-white/10 dark:text-gray-100 dark:hover:bg-white/20
        shadow-sm hover:shadow-md cursor-pointer
        disabled:opacity-60 disabled:cursor-not-allowed
      `}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white dark:border-gray-300" />
      ) : (
        <>
          <span className="transition-colors group-hover:text-gray-200 dark:group-hover:text-white">
            Submit
          </span>
          <FaPaperPlane className="text-xs opacity-70 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </Button>
  );
}
