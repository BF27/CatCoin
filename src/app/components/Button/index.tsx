export default function Button({ text }: { text: string }) {
  return <button className="border-solid border-2 rounded-2xl p-2 text-center hover:bg-gray-200">{text}</button>;
}
