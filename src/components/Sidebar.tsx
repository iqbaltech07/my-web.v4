import { getProfileData } from "~/lib/data";
import { SidebarContent } from "./SidebarContent";
import { Profile } from "~/generated/prisma";

export async function Sidebar() {
  const profileData: Partial<Profile> = await getProfileData();

  return (
    <aside className="fixed inset-y-0 h-full w-75 flex-col border-r bg-background p-8 hidden lg:flex">
      <SidebarContent profileData={profileData} />
    </aside>
  );
}