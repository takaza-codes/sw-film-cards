import Link from "next/link";

export const metadata = {
  title: "Error 404",
};

export default function NotFound() {
  return (
    <main className="mt-10 mb-10 flex-1 flex flex-wrap flex-col content-center justify-center text-center gap-5">
      <h1 className="text-7xl font-bold">404</h1>
      <p className="text-5xl">Oops! There is nothing here!</p>
      <div className="mt-8 text-xl underline text-teal-800">
        <Link href="/">Back to main</Link>
      </div>
    </main>
  );
}
