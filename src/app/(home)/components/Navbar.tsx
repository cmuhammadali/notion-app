"use client";

import { ModeToggle } from "@/app/components/shared/mode-toggle";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import { useScrolled } from "@/hooks/use-scrolled";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const scrolled = useScrolled();

  return (
    <div
      className={cn(
        "z-50 bg-background fixed top-0 flex items-center w-full p-6 justify-between",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="flex items-center gap-x-2">
        <Button size={"sm"} variant={"ghost"}>
          Log in
        </Button>
        <Button size={"sm"}>Get Notion free</Button>
        <ModeToggle />
      </div>
    </div>
  );
};
