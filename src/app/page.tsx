import { unstable_noStore as noStore } from "next/cache";

import ModeToggle from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import { EffortsList } from "./_components/efforts-list";
import PetitionList from "./_components/petition-list";

export default async function Home() {
  noStore();

  return (
    <>
      <ModeToggle className="fixed right-4 top-4" />
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="container space-y-4 px-4 py-16 text-left">
          <div>
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
              <a
                href="https://github.com/pingdotgg/uploadthing/issues/9"
                className="text-[hsl(280,100%,70%)] underline"
                target="_black"
              >
                THEO
              </a>{" "}
              made dark mode paid.
            </h1>
            <h2 className="my-8 text-3xl font-bold">
              Lets not let him get away with this...
            </h2>
          </div>
          <Separator />
          <div>Great efforts by fellow heroes:</div>
          <EffortsList />
          <Separator />
          <PetitionList />
        </div>
      </main>
    </>
  );
}
