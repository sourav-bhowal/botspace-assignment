import { usePostStore } from "@/store/post-store";
import ConfigPostView from "./config/post-config";
import ConfigCommentView from "./config/comment-config";
import ConfigDMView from "./config/dm-config";
import { NextButton } from "./ui/NextBtn";

export default function ConfigPanel() {
  // Access the post store to get the current step and next step function
  const { currentStep, nextStep } = usePostStore();

  return (
    <div className="p-6 h-full">
      <div className="space-y-8">
        <ConfigPostView />
        {currentStep >= 1 && <ConfigCommentView />}
        {currentStep >= 2 && <ConfigDMView />}
      </div>

      <NextButton onClick={nextStep} />
    </div>
  );
}

// Wrapper component for each configuration section
export function ConfigSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      {children}
    </div>
  );
}
