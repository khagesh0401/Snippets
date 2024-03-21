"use server";
import { db } from "@/db";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
export default async function editsnippet(id: number, code: string) {
  await db.snippet.update({
    where: { id },
    data: { code },
  });
  revalidatePath(`/snippets/${id}`);
  redirect(`/snippets/${id}`);
}

export async function deletesnippet(id: number) {
  await db.snippet.delete({
    where: { id },
  });

  revalidatePath("/");
  redirect("/");
}

//Server action from server component.
export async function createsnippet(
  formstate: { message: string },
  formdata: FormData
) {
  try {
    const title = formdata.get("title") as string;
    const code = formdata.get("code") as string;
    if (typeof title !== "string" || title.length < 3) {
      return {
        message: "Title must be longer",
      };
    }
    if (typeof code !== "string" || code.length < 10) {
      return {
        message: "Code must be longer",
      };
    }
    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });
    if (!snippet) throw new Error("Data not recorded in Database");
  } catch (error: unknown) {
    if (error instanceof Error)
      return {
        message: error.message,
      };
    else {
      return {
        message: "Something went wrong",
      };
    }
  }

  revalidatePath("/");
  redirect("/");
}
