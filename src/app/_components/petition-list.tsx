"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { api } from "@/trpc/react";
import { orderBy } from "lodash-es";
import { CheckIcon, Loader2Icon } from "lucide-react";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";

const PetitionList = () => {
  const [nameInput, setNameInput] = useState("");
  const [submitted, setSubmitted] = useLocalStorageState("submitted", {
    defaultValue: false,
  });

  const petitionListQuery = api.petition.getList.useQuery();
  const data = orderBy(
    (petitionListQuery.data ?? []) as {
      id: string;
      name: string | null;
      createdAt: Date;
      updatedAt: Date;
    }[],
    "createdAt",
    "desc",
  );

  const petitionListCteate = api.petition.addEntry.useMutation({
    async onSuccess() {
      setNameInput("");
      await petitionListQuery.refetch();
      setSubmitted(true);
    },
  });

  function submitPetition(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    petitionListCteate.mutate({ name: nameInput });
  }

  return (
    <div className="max-w-7xl">
      {submitted ? (
        <div className="flex gap-2">
          <CheckIcon className="mt-2 h-6" />
          <h1 className="mb-2 text-4xl">
            Thanks for being a part of the cause.
          </h1>
        </div>
      ) : (
        <>
          <h1 className="mb-4 text-4xl">Join the petition:</h1>
          <form
            onSubmit={submitPetition}
            className="mb-4 grid max-w-2xl gap-2 md:grid-cols-4"
          >
            <Input
              name="name"
              type="text"
              placeholder="Your Name"
              className="col-span-3 h-auto max-h-none py-2 text-2xl"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
            />
            <Button className="h-full" type="submit">
              Submit
            </Button>
          </form>
        </>
      )}
      <div className="mb-4 text-muted-foreground">
        The other brave activists who have joined our cause:
      </div>
      <div>
        {!petitionListQuery.isLoading ? (
          <ScrollArea className="h-72 w-full">
            {data.map((listItem, i) => {
              return (
                <div
                  key={listItem.id}
                  className={cn(
                    "p-2 text-xl font-semibold",
                    i > 0 && "border-t",
                  )}
                >
                  {listItem.name}
                </div>
              );
            })}
            ;
          </ScrollArea>
        ) : (
          <div className="inline-flex items-center gap-2 rounded bg-muted px-4 py-2">
            Fetching for fellow tarnished
            <Loader2Icon className="h-8 animate-spin" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PetitionList;
