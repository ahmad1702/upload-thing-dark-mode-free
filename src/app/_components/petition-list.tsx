"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { api } from "@/trpc/react";
import { useState } from "react";

const PetitionList = () => {
  const [nameInput, setNameInput] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const petitionListQuery = api.petition.getList.useQuery();
  const data = (petitionListQuery.data ?? []) as {
    id: string;
    name: string | null;
    createdAt: Date;
    updatedAt: Date;
  }[];

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
      {!submitted && (
        <>
          <h1 className="mb-4 text-xl font-semibold sm:text-5xl">
            Join the petition:
          </h1>
          <form
            onSubmit={submitPetition}
            className="grid max-w-2xl gap-2 md:grid-cols-4"
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
      <div className="mt-4 text-2xl font-bold">
        The other brave activists who have joined our cause:
      </div>
      <div>
        {data.map((listItem) => {
          return (
            <div key={listItem.id} className="text-xl font-semibold">
              {listItem.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PetitionList;
