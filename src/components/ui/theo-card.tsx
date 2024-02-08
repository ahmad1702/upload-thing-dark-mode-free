import TheoPic from "@/assets/theo-pic.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function TheoCard() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <span className="text-[hsl(280,100%,70%)] underline">THEO</span>
        {/* <a
          href="https://github.com/pingdotgg/uploadthing/issues/9"
          className="text-[hsl(280,100%,70%)] underline"
          target="_black"
        >
          THEO
        </a> */}
      </HoverCardTrigger>
      <HoverCardContent className="ml-4 w-80">
        <div className="flex justify-between space-x-4">
          <Avatar className="h-32 w-32">
            <AvatarImage src={TheoPic.src} />
            <AvatarFallback>THEO</AvatarFallback>
          </Avatar>
          <div className="text-sm font-normal tracking-normal">
            <div className="text-xl font-semibold">Theo Browne</div>
            <div>CEO of Ping</div>
            <div className="mt-2">
              (More like the CEO of EA the way he making everything a
              microtransaction)
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
