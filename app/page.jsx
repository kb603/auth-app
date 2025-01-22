import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";

import LoginForm from "../components/LoginForm";

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/dashboard");
  return (
    <main>
      <LoginForm />
    </main>
  );
}
