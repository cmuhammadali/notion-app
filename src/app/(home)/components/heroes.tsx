"use client";

import { Button } from "@/components/ui/button";
import { Loader } from "@/components/ui/loader";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Heroes = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <>
      <div className="max-w-3xl space-y-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
          The happier workspace
        </h1>
        <h3 className="text-base sm:text-xl md:text-2xl font-medium">
          Write. Plan. Collaborate. With a little help from AI.
        </h3>
        {isLoading && (
          <div className="flex w-full justify-center items-center">
            <Loader />
          </div>
        )}
        {isAuthenticated && !isLoading && (
          <>
            <Button asChild>
              <Link href={"/documents"}>
                Enter Notion <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </>
        )}
        {!isAuthenticated && !isLoading && (
          <>
            <SignInButton mode="modal">
              <Button>
                Get Notion Free <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </SignInButton>
          </>
        )}
        <div className="flex flex-col items-center justify-center max-w-5xl">
          <div className="flex items-center">
            <div className="relative w-[400px] h-[400px] hidden md:block">
              <Image
                src={"/men.svg"}
                className="object-cover dark:hidden"
                alt="Logo"
                fill
              />
              <Image
                src={"/men-dark.svg"}
                className="object-cover hidden dark:block"
                alt="Logo"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
