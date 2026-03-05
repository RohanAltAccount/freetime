import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");
  return (
    <main style={{ margin: 40 }}>
      <h1>Your Profile</h1>
      <pre>{JSON.stringify(session.user, null, 2)}</pre>
    </main>
  );
}

