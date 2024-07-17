import Button from "./components/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Üdvözöl a CatCoin APP!!</h1>
      <Link href="/login">
        <Button text="Tovább a bejelentkezéshez" />
      </Link>
    </div>
  );
}
