import { User } from "../../types";
import CustomCard from "@/components/CustomCard";

export default async function Home() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await response.json();

  //обработка ошибок!

  return (
    <main className="mt-10 mb-10 flex-1 flex flex-wrap flex-col content-center">
      <h1 className="pt-8 pb-8 text-center font-bold text-5xl lg:text-6xl">Meet our users!</h1>

      {/* grid или флекс? */}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {
        users?.map(user => (
          <CustomCard key={user.id} user={user} />
        ))
      }
      </div>
    </main>
  );
}
