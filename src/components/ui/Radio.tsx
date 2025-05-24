import { cn } from "@/lib/utils";

interface RadioProps {
  label: string;
  selected?: boolean;
  isPro?: boolean;
  onClick?: () => void;
}

export function RadioOption({
  label,
  selected = false,
  isPro = false,
  onClick,
}: RadioProps) {
  return (
    <div
      className="flex items-center rounded-lg cursor-pointer relative"
      onClick={onClick}
    >
      <div
        className={cn(
          "w-5 h-5 rounded-full border mr-2 flex items-center justify-center",
          selected ? "border-blue-500" : "border-neutral-600"
        )}
      >
        {selected && <div className="w-3 h-3 bg-blue-500 rounded-full"></div>}
      </div>
      <span>{label}</span>
      {isPro && (
        <span className="ml-2 absolute right-0 text-xs bg-blue-500 text-white px-2 py-0.5 rounded">
          PRO
        </span>
      )}
    </div>
  );
}
