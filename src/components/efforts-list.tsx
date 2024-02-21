import avatarSrc from "@/assets/img/ahmad-img.png";
import xLogoBlack from "@/assets/x-logo-black.png";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./icons";
import PetitionList from "./petition-list";
import { Button } from "./ui/button";

export async function EffortsList() {
  // Get the client's IP address from the request headers.
  // This protects against people simply reseting localstorage
  const canSign = true;
  // Will return this code if we need it in the future
  // Need a way to make the site still work for vpns
  // let canSign = true;
  // try {
  //   const ip = headers().get("x-forwarded-for");
  //   if (ip != null) {
  //     const entries = await db.petition.findFirst({
  //       where: {
  //         ip,
  //       },
  //     });
  //     if (entries !== null) canSign = false;
  //   }
  // } catch (error) {
  //   console.error("Could not check ip for infringement");
  // }
  return (
    <div className="flex w-full flex-col gap-14 lg:flex-row">
      <div className="flex-1 space-y-2">
        <div className="text-3xl">Great efforts by fellow tarnished:</div>
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
                  href="https://darkmode.tax/"
                  target="_blank"
                >
                  The Dark Mode Tax
                </a>
              </CardTitle>
              <CardDescription>
                A website, like this one, to rebel against Theo, highlighting
                the absurdity that is UploadThing (I agree with them that its
                not an accessibility feature tho)
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
        <div className="p-1">
          <Card>
            <CardHeader>
              <CardTitle>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image
                      src={avatarSrc}
                      alt=""
                      className="h-16 w-16 rounded-full"
                    />
                    <a
                      className="text-foreground underline"
                      href="https://twitter.com/ahmadaccino"
                      target="_blank"
                    >
                      Me
                    </a>
                  </div>
                  <div className="flex gap-2">
                    <Button size="icon" variant="outline" asChild>
                      <Link href="https://github.com/ahmad1702" target="_blank">
                        <Icons.gitHub className="w-5" />
                      </Link>
                    </Button>
                    <Button size="icon" variant="outline">
                      <Link
                        href="https://twitter.com/ahmadaccino"
                        target="_blank"
                      >
                        <Image
                          src={xLogoBlack}
                          alt="x-logo-black"
                          className="h-5 w-5"
                        />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardTitle>
              <CardDescription>
                I{"'"}m the tarnished that created this site. My name is Ahmad
                Sandid, I go by ahmadaccino in your chat. Was a big fan, but you
                crossed a line.{" "}
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
