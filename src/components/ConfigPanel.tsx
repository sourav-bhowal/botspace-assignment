import { usePostStore } from "@/store/post-store";
import ConfigPostView from "./config/post-config";
import ConfigCommentView from "./config/comment-config";
import ConfigDMView from "./config/dm-config";
import { NextButton } from "./ui/NextBtn";

export default function ConfigPanel() {
  const { currentStep, nextStep } = usePostStore();

  return (
    <div className="p-6 h-full">
      <div className="space-y-8">
        <ConfigPostView />
        {currentStep >= 1 && <ConfigCommentView />}
        {currentStep >= 2 && <ConfigDMView />}
      </div>
      <div className="">
        <NextButton onClick={nextStep} />
      </div>
    </div>
  );
}

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
