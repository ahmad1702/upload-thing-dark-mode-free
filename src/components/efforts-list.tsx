import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { db } from "@/server/db";
import { headers } from "next/headers";
import PetitionList from "./petition-list";

export async function EffortsList() {
  // Get the client's IP address from the request headers
  let canSign = true;
  try {
    const ip = headers().get("x-forwarded-for");
    if (ip != null) {
      const entries = await db.petition.findFirst({
        where: {
          ip,
        },
      });
      if (entries !== null) canSign = false;
    }
  } catch (error) {
    console.error("Could not check ip for infringement");
  }
  return (
    <div className="flex w-full flex-col gap-14 lg:flex-row">
      <div className="flex-1 space-y-2">
        <div className="text-3xl">Great efforts by fellow heroes:</div>
        <div className="p-1">
          <Card>
            <CardHeader>
              <CardTitle>
                <a
                  className="text-foreground underline"
                  href="https://arc.net/boost/F9055A22-88AD-4C78-A445-BB52D917E4EC"
                  target="_blank"
                >
                  Arc Boost
                </a>
              </CardTitle>
              <CardDescription>
                If you{"'"}re using Arc Browser, like the soy dev you are, add{" "}
                <a
                  className="text-foreground underline"
                  href="https://arc.net/boost/F9055A22-88AD-4C78-A445-BB52D917E4EC"
                  target="_blank"
                >
                  this boost
                </a>{" "}
                to get dark and dirty.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
        <div className="p-1">
          <Card>
            <CardHeader>
              <CardTitle>
                <a
                  className="text-foreground underline"
                  href="https://github.com/ronanru/uploadthing-darkmode"
                  target="_blank"
                >
                  Chrome and Firefox Extension
                </a>
              </CardTitle>
              <CardDescription>
                A wise and quick hunter,{" "}
                <a
                  className="text-foreground underline"
                  href="https://github.com/ronanru"
                  target="_blank"
                >
                  @ronanru
                </a>{" "}
                hunted down a browser solution in which you can add dark mode
                via a Chrome or Firefox extension.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
        <div className="p-1">
          <Card>
            <CardHeader>
              <CardTitle>
                <a
                  className="text-foreground underline"
                  href="https://www.ahmadsandid.com/"
                  target="_blank"
                >
                  Me
                </a>
              </CardTitle>
              <CardDescription>
                I{"'"}m the tarnished that created this site. My name is Ahmad
                Sandid, I go by ahmadaccino in your chat. Was a big fan, but you
                crossed a line.{" "}
                <a
                  className="text-foreground underline"
                  href="https://github.com/ahmad1702"
                  target="_blank"
                >
                  Heres my github.
                </a>{" "}
                <a
                  className="text-foreground underline"
                  href="https://twitter.com/ahmadaccino"
                  target="_blank"
                >
                  Heres my twitter.
                </a>{" "}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
      <div className="flex-1">
        <PetitionList canSign={canSign} />
      </div>
    </div>
  );
}
