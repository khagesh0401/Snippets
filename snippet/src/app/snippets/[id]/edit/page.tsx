import { notFound } from "next/navigation";
import Snippeteditform from "@/components/snippet-edit-form";
import { db } from "@/db";
interface snippeteditpage {
  params: { id: string };
}

export default async function snippetedit(props: snippeteditpage) {
  const id = parseInt(props.params.id);
  const snippet = await db.snippet.findFirst({
    where: { id },
  });
  if (!snippet) return notFound();
  return <Snippeteditform snippet={snippet}/>
}
