import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <div>
    <h1> Home Page</h1>
    <br />
    <Link href="/about">Go To About Page</Link>
    <br />
    <br />
    <Link href="/login">Go To Login Page</Link>
   </div>
  );
}
