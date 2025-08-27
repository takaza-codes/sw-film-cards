import { Film } from "../../types";
import CustomCard from "@/components/CustomCard";

export default async function Home() {
  let films: Film[] = [];
  let error: string | null = null;

  try {
    const response = await fetch("https://swapi.info/api/films", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Request error: ${response.status}`);
    }

    films = (await response.json()).map((film: Film, idx: number) => ({
      ...film,
      id: (idx + 1).toString(),
    }));

    if (films.length === 0) {
      error = "No films found";
    }
  } catch (err) {
    error = (err as Error).message || "Unknown error";
  }

  if (error) {
    return (
      <main className="mt-10 mb-10 flex-1 flex flex-col items-center justify-center text-fuchsia-700">
        <h1 className="text-4xl font-bold mb-4">Sorry!</h1>
        <p className="text-3xl">{error}</p>
      </main>
    );
  }

  return (
    <main className="mt-10 mb-10 flex-1 flex flex-wrap flex-col content-center gap-6">
      <h1 className="pt-8 pb-8 text-center font-bold text-5xl lg:text-6xl">
        We proudly present our lore!
      </h1>
      <p className="text-center text-xl mb-8 px-4">
        (as provided by{" "}
        <a href="https://swapi.info/" className="underline">
          SWAPI
        </a>
        )
      </p>

      <div className="flex justify-center flex-wrap gap-8 xs:flex-col">
        {films.map((film) => (
          <CustomCard key={film.episode_id} film={film} />
        ))}
      </div>
    </main>
  );
}
