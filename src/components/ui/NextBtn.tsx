import { usePostStore } from "@/store/post-store";
import { Button } from "@mui/material";

interface NextButtonProps {
  onClick: () => void;
}

export function NextButton({ onClick }: NextButtonProps) {

  // Access the current step from the post store
  const { currentStep } = usePostStore();

  // Determine if this is the last step (assuming 3 steps total, indexed from 0)
  const isLastStep = currentStep >= 2;

  return (
    <Button
      sx={{
        color: "black",
        borderColor: "black",
        textTransform: "capitalize",
      }}
      onClick={onClick}
      variant="outlined"
      disabled={isLastStep}
      className={`px-6 py-2 rounded-lg font-medium transition-colors ${
        isLastStep
          ? "bg-neutral-600 text-neutral-400 cursor-not-allowed"
          : "bg-neutral-200 text-neutral-900 hover:bg-neutral-300"
      }`}
    >
      Next
    </Button>
  );
}
