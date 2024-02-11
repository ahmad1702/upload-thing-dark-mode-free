import ModeToggle from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import TheoCard from "@/components/ui/theo-card";
import { GithubIcon } from "lucide-react";
import Head from "next/head";
import Link from "next/link";
import { EffortsList } from "../components/efforts-list";
import { MemeList } from "../components/meme-list";

export default async function Home() {
  return (
    <>
      <Head>
        <title>Make Dark Mode Free Again</title>
      </Head>
      <div className="fixed right-4 top-4 z-10 flex gap-2">
        <Button variant="outline" asChild>
          <Link href="https://github.com/ahmad1702/upload-thing-dark-mode-free">
            <GithubIcon className="h-4" />
          </Link>
        </Button>
        <ModeToggle className="" />
      </div>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="container space-y-4 px-4 py-16 text-left">
          <div>
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
              <TheoCard /> made dark mode paid.
            </h1>
            <h2 className="my-8 text-3xl font-bold">
              Lets not let him get away with this...
            </h2>
          </div>
          <Separator />
          <EffortsList />
          <Separator />
          <div className="text-4xl">Memes</div>
          <MemeList />
        </div>
      </main>
    </>
  );
}
