import { redirect } from "next/navigation";
import { Settings } from "./settings";
import { getTeamForUser, getUser } from "@/lib/db/queries";
import { db } from "@/lib/db/drizzle";
import { teams, teamMembers } from "@/lib/db/schema";

export default async function SettingsPage() {
  const user = await getUser();

  if (!user) {
    redirect("/sign-in");
  }

  let teamData = await getTeamForUser(user.id);

  if (!teamData) {
    // Создаем новую команду для пользователя
    const [newTeam] = await db
      .insert(teams)
      .values({
        name: `${user.email}'s Team`,
      })
      .returning();

    // Добавляем пользователя в команду
    await db.insert(teamMembers).values({
      userId: user.id,
      teamId: newTeam.id,
      role: "owner",
    });

    // Получаем обновленные данные команды
    teamData = await getTeamForUser(user.id);
  }

  if (!teamData) {
    throw new Error("Failed to create team");
  }

  return <Settings teamData={teamData} />;
}
