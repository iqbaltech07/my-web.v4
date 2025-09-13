import { SidebarContent } from "./SidebarContent";

export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 h-full w-75 flex-col border-r bg-background p-8 hidden lg:flex">
      <SidebarContent />
    </aside>
  );
}