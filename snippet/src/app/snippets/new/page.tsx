"use client";
import { useFormState } from "react-dom";
import { createsnippet } from "@/action";
export default function Newsnippets() {
  const [formstate, action] = useFormState(createsnippet, { message: "" });
  return (
    <form action={action}>
      <h3 className="font-bold m-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label htmlFor="title" className="w-12">
            Title
          </label>
          <input
            className="border rounded p-2 w-full"
            name="title"
            id="title"
          />
        </div>
        <div className="flex gap-4">
          <label htmlFor="code" className="w-12">
            Code
          </label>
          <textarea
            className="border rounded p-2 w-full"
            name="code"
            id="code"
          />
        </div>
        {formstate.message?<div className="my-2 p-2 bg-red-200 border rounded border-red-400">{formstate.message}</div>:null}
        <button type="submit" className="rounded p-2 bg-blue-200">
          Create
        </button>
      </div>
    </form>
  );
}
