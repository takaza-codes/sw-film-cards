import UserInfo from "@/components/UserInfo";
import { User } from "../../../../types";
import { notFound } from "next/navigation";

type Props = { params: { id: string } };

async function getUser(id: string): Promise<User | null> {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    if (!response.ok) return null;

    const user: User = await response.json();
    if (!user || !user.id) return null;

    return user;
  } catch (err: unknown) {
    if (err instanceof Error) {
      return null;
    } else {
      return notFound();
    }
  }
}

export default async function UserPage({ params }: Props) {
  const user = await getUser(params.id);

  if (!user) notFound();

  return <UserInfo user={user} />;
}

export async function generateMetadata({ params }: Props) {
  const user = await getUser(params.id);
  return {
    title: user?.name || "User",
  };
}
