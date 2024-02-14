"use client";

import Meme1 from "@/assets/img/memes/1.png";
import Meme10 from "@/assets/img/memes/10.jpg";
import Meme11 from "@/assets/img/memes/11.jpeg";
import Meme12 from "@/assets/img/memes/12.png";
import Meme2 from "@/assets/img/memes/2.png";
import Meme3 from "@/assets/img/memes/3.png";
import Meme4 from "@/assets/img/memes/4.png";
import Meme5 from "@/assets/img/memes/5.png";
import Meme6 from "@/assets/img/memes/6.png";
import Meme7 from "@/assets/img/memes/7.png";
import Meme8 from "@/assets/img/memes/8.png";
import Meme9 from "@/assets/img/memes/9.png";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { XIcon } from "lucide-react";

import Image from "next/image";
import { useState } from "react";

const MEMES = [
  Meme12,
  Meme11,
  Meme10,
  Meme9,
  Meme8,
  Meme7,
  Meme6,
  Meme5,
  Meme4,
  Meme3,
  Meme2,
  Meme1,
];

export function MemeList() {
  const [imageToView, setImageToView] = useState<number>();

  const selectImage = (i: number) => {
    setImageToView(i);
  };

  return (
    <div className="relative flex flex-wrap gap-4">
      <div
        className={cn(
          "fixed left-0 top-0 z-50 flex h-screen w-full flex-col gap-2 bg-black/80 px-10 py-20",
          imageToView === undefined && "hidden",
        )}
      >
        <Carousel
          className="flex-1 "
          opts={{
            loop: true,
            startIndex: imageToView,
            align: "center",
          }}
        >
          <CarouselContent>
            {MEMES.map((meme, i) => {
              return (
                <CarouselItem key={i} className="h-[calc(100vh-10rem)] w-full ">
                  <Image
                    key={i}
                    src={meme}
                    className={cn(
                      "mx-auto h-full w-full rounded-2xl object-contain",
                      // meme.height > meme.width
                      //   ? "h-auto w-full"
                      //   : "h-full w-auto",
                    )}
                    onClick={() => setImageToView(i)}
                    width="600"
                    height="1000"
                    alt=""
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="absolute left-2 top-1/2 h-auto w-auto -translate-y-1/2 p-4" />
          <CarouselNext className="absolute right-2 top-1/2 h-auto w-auto -translate-y-1/2 p-4" />
        </Carousel>
        <div className="flex items-center justify-center">
          <Button
            variant="destructive"
            onClick={() => setImageToView(undefined)}
            size="lg"
          >
            <XIcon className="h-5" /> Close
          </Button>
        </div>
      </div>
      {MEMES.map((meme, i) => {
        return (
          <Image
            key={i}
            src={meme}
            className="h-72 w-auto cursor-pointer rounded-2xl duration-300 hover:brightness-75"
            onClick={() => selectImage(i)}
            width="600"
            height="1000"
            alt=""
            placeholder="blur"
          />
        );
      })}
    </div>
  );
}
