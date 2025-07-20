import React from "react";
import Link from "next/link";
import CustomButton from "./CustomButton";
import { User } from "../../types";

type UserInfoProps = {
  user: User | undefined;
};

export default function UserInfo({ user }: UserInfoProps) {
  if (!user) {
    return <h1 className="text-3xl text-center">User not found</h1>;
  }

  const { name, username, email, address, phone, website, company } = user;
  const { street, suite, city } = address || {};

  return (
    <main className="mt-10 mb-10 flex-1 flex flex-wrap flex-col content-center gap-8 text-stone-700">
      <h3 className="text-2xl font-bold text-center">{name}</h3>
      <div className="flex flex-col content-center gap-2 text-lg text-stone-700">
        <div>
          <span className="font-bold">Username: </span>
          {username}
        </div>
        <div>
          <span className="font-bold">Email: </span>
          {email}
        </div>
        <div>
          <span className="font-bold">Address: </span>
          {street}, {suite}, {city}
        </div>
        <div>
          <span className="font-bold">Phone: </span>
          {phone}
        </div>
        <div>
          <span className="font-bold">Website: </span>
          {website}
        </div>
        <div>
          <span className="font-bold">Company: </span>
          {company.name}
        </div>
      </div>
      <div className="mt-8 self-center underline text-pink-600">
        <Link href="/">
          <CustomButton>Back to main</CustomButton>
        </Link>
      </div>
    </main>
  );
}
