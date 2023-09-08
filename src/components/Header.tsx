import Link from "next/link";

export default function Header() {
  return (
    <div className="flex gap-5">
      <Link href="/">HOME</Link>
      <Link href="/dnd">DND</Link>
      <Link href="/d3">D3.js</Link>
    </div>
  );
}
