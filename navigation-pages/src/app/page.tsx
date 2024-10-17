'use client'
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
   <div>
    <h1> Home Page</h1>
    <br />
    <button onClick={() => router.push("/login")}>Go To Login Page Button</button>
    <br />
    <br />
    <button onClick={() => router.push("/about")}>Go To About Page Button</button>
   </div>
  );
}
