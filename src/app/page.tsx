import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Üdvözöl a CatCoin APP!!</h1>
      <Link href="/login">
      Tovűbb a bejelentkezéshez
      </Link>
    </div>
  );
}
