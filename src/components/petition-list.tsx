"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { api } from "@/trpc/react";
import { orderBy } from "lodash-es";
import { CheckIcon, Loader2, Loader2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

const PetitionList = ({ canSign }: { canSign: boolean }) => {
  const [nameInput, setNameInput] = useState("");
  const [hasProfaned, setHasProfaned] = useLocalStorageState("has-profaned", {
    defaultValue: false,
  });
  const [showProfanityModal, setShowProfanityModal] = useState(false);
  const [submitted, setSubmitted] = useState(!canSign);

  useEffect(() => {
    const hasSubmitedBefore = localStorage.getItem("submitted");
    if (hasSubmitedBefore) {
      setSubmitted(true);
    }
  }, []);

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
  const isLoading = petitionListQuery.isLoading;

  const signMutation = api.petition.addEntry.useMutation({
    async onSuccess() {
      setNameInput("");
      await petitionListQuery.refetch();
      setSubmitted(true);
      localStorage.setItem("submitted", "true");
    },

    onError(error) {
      if (error.message === "PROFANITY") {
        setShowProfanityModal(true);
        setHasProfaned(true);
      }
    },
  });

  const submitPetition = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    signMutation.mutate({ name: nameInput });
  };

  const openProfanityModal = () => {
    setShowProfanityModal(true);
  };
  const closeProfanityModal = () => {
    setShowProfanityModal(false);
    setNameInput("");
  };

  return (
    <div className="max-w-7xl">
      {showProfanityModal && (
        <Dialog
          open={showProfanityModal}
          onOpenChange={(open) =>
            open ? openProfanityModal() : closeProfanityModal()
          }
        >
          <DialogContent className="max-w-6xl">
            <DialogHeader>
              <DialogTitle>
                You just profaned. Now time to get shamed.
              </DialogTitle>
            </DialogHeader>
            <div>
              <video src="/watch_yo_profanity.mp4" autoPlay loop controls />
            </div>
            <DialogFooter className="flex justify-end">
              <Button onClick={() => closeProfanityModal()}>
                I{"'"}ll be good I promise
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

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
              autoComplete="off"
              placeholder={
                hasProfaned
                  ? "You better not profane again"
                  : "Your Name (Max 50 chars. sorry bee movie lovers)"
              }
              className="col-span-3 h-auto max-h-none py-2 text-lg"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              disabled={signMutation.isLoading}
            />
            <Button className="h-full" type="submit">
              {signMutation.isLoading && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              Submit{signMutation.isLoading && "ing"}
            </Button>
          </form>
        </>
      )}
      <div className="mb-4 text-muted-foreground">
        The other brave activists who have joined our cause:
      </div>
      <div>
        {!isLoading ? (
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
