import {
  Home,
  User,
  Send,
  Settings,
  Zap,
  MessagesSquare,
  HelpCircle,
} from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-16 bg-neutral-100 text-black hidden flex-col items-center py-6 md:flex">
      <div className="mb-8">
        <div className="w-10 h-10 flex items-center justify-center">
          <span className="text-2xl font-bold">M</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center gap-6">
        <SidebarIcon icon={<Home size={20} />} />
        <SidebarIcon icon={<User size={20} />} />
        <SidebarIcon icon={<Zap size={20} />} active />
        <SidebarIcon icon={<MessagesSquare size={20} />} />
        <SidebarIcon icon={<Send size={20} />} />
        <SidebarIcon icon={<Settings size={20} />} />
      </div>

      <div className="mt-auto">
        <div className="w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center">
          <span className="text-xs text-white font-medium">JD</span>
        </div>
        <div className="mt-4">
          <SidebarIcon icon={<HelpCircle size={20} />} />
        </div>
      </div>
    </div>
  );
}

function SidebarIcon({
  icon,
  active = false,
}: {
  icon: React.ReactNode;
  active?: boolean;
}) {
  return (
    <div
      className={`w-10 h-10 flex items-center justify-center rounded-lg ${
        active ? "bg-neutral-300" : "hover:bg-neutral-300"
      } transition-colors cursor-pointer`}
    >
      <div className={`${active ? "text-green-400" : "text-black"}`}>
        {icon}
      </div>
    </div>
  );
}
