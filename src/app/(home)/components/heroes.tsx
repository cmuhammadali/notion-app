import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export const Heroes = () => {
  return (
    <>
      <div className="max-w-3xl space-y-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
          The happier workspace
        </h1>
        <h3 className="text-base sm:text-xl md:text-2xl font-medium">
          Write. Plan. Collaborate. With a little help from AI.
        </h3>
        <Button>
          Get Notion free <ArrowRight className="h-4 w-4 ml-2" />
        </Button>

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
