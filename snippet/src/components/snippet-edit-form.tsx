"use client";
import type { snippet } from "@prisma/client";
import { Editor } from "@monaco-editor/react";
import { useState } from "react";
// import snippetedit from "@/app/snippets/[id]/edit/page";
import editsnippet from "@/action";

interface snippeteditform {
  snippet: snippet;
}

export default function Snippeteditform({ snippet }: snippeteditform) {
  const [code, setcode] = useState(snippet.code);

  const handlechanges = (value: string = "") => {
    setcode(value);
  };
  const editsnippetaction = editsnippet.bind(null, snippet.id, code);
  return (
    <div>
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
        onChange={handlechanges}
      />
      <form action={editsnippetaction}>
        <button type="submit" className="p-2 border rounded">
          Save
        </button>
      </form>
    </div>
  );
}
