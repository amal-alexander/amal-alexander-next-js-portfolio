import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center pt-24">
      <h1 className="text-4xl font-bold mb-4">Welcome to Amal Alexander's Portfolio</h1>
      <p className="text-lg">This is the new homepage. Explore my projects!</p>
      <Link href="/ultra-frog" className="mt-4 text-teal-400 hover:underline">Go to Ultra Frog</Link>
    </main>
  );
}