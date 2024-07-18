import type { FormEventHandler } from "react";

export default function Button({
  text,
  type,
}: {
  text: string;
  type: "submit" | "reset" | "button";
  async: boolean;
}) {
  return (
    <button
      className="border-solid border-2 rounded-2xl p-2 text-center hover:bg-gray-200"
      type={type}
    >
      {text}
    </button>
  );
}
