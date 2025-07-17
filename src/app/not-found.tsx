import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="mt-10 mb-10 flex-1 flex flex-wrap flex-col content-center">
      <h1>404</h1>
      <p>Oops! There is nothing here!</p>
      <Link href="/" >
        Back to main
      </Link>
    </main>
  );
}
