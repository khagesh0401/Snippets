"use client";
interface errorpage {
  error: Error;
  reset: () => void;
}
export default function Error({ error }: errorpage) {
  return <div>{error.message}</div>;
}
