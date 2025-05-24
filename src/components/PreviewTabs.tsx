import { cn } from "@/lib/utils";

interface PreviewTabsProps {
  activeView: string;
  onChange: (view: string) => void;
}

export default function PreviewTabs({
  activeView,
  onChange,
}: PreviewTabsProps) {
  const tabs = [
    { id: "post", label: "Post" },
    { id: "comments", label: "Comments" },
    { id: "dm", label: "DM" },
  ];

  return (
    <div className="flex justify-center bg-neutral-300 rounded-full p-1">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-all",
            activeView === tab.id ? "bg-white" : "text-black/50"
          )}
          onClick={() => onChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
