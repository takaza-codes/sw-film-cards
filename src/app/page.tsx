import { User } from "../../types";
import CustomCard from "@/components/CustomCard";

export default async function Home() {
  let users: User[] = [];
  let error: string | null = null;

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Request error: ${response.status}`);
    }

    users = await response.json();

    if (users.length === 0) {
      error = "No users found";
    }
  } catch (err: unknown) {
    if (err instanceof Error) {
      error = err.message;
    } else {
      error = "Unknown error";
    }
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
        Meet our users!
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {users.map((user) => (
          <CustomCard key={user.id} user={user} />
        ))}
      </div>
    </main>
  );
}
