import { usePostStore } from "@/store/post-store";
import { Button, Switch, TextField } from "@mui/material";
import { HelpCircle } from "lucide-react";
import { ConfigSection } from "../ConfigPanel";

export default function ConfigDMView() {
  // Access the post store to get posts and the selected post by ID, updatePost function
  const { posts, selectedPostId, updatePost } = usePostStore();

  // Get the currently selected post or fallback to the first post
  const selectedPost = posts[selectedPostId] || posts[0];

  // If no post is selected, return null or some fallback UI
  if (!selectedPost) {
    return null; // or some fallback UI
  }

  // Extract directMessages from the selected post
  const directMessages = selectedPost.directMessages;

  // Fallbacks in case directMessages is missing or incomplete
  const dmMessageOne = directMessages?.[0]?.message || ""; // First DM message
  // const dmMessageTwo = directMessages?.[1]?.message || ""; // Second DM message
  const buttonText = directMessages?.[2]?.message || ""; // Button text for the third DM
  const dmWithLink = directMessages?.[3]?.message || ""; // DM message with a link (fourth DM)

  // Function to handle changes in the DM messages
  const handleDMChange = (
    index: number,
    value: string,
    isLinkOverride?: boolean
  ) => {
    // Spread the existing directMessages array and update the specific index
    const newDMs = [...directMessages];

    // Check if the index is within bounds
    if (!newDMs[index]) {
      // If the index is out of bounds, create a new object with the message
      newDMs[index] = { message: value, isLink: isLinkOverride ?? index === 2 };
    } else {
      // If the index is within bounds, update the message
      newDMs[index] = { ...newDMs[index], message: value };
      // If isLinkOverride is provided, update the isLink property
      if (isLinkOverride !== undefined) newDMs[index].isLink = isLinkOverride;
    }

    // Update the directMessages in the selected post
    updatePost({ directMessages: newDMs });
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">They will get</h1>

      <ConfigSection title="">
        <div className="bg-neutral-100 p-3 rounded-lg">
          <div className="flex items-center justify-between py-3 mb-3">
            <span>an opening DM</span>
            <Switch checked={true} color="primary" />
          </div>

          <div className="space-y-3 mb-6">
            <TextField
              sx={{
                bgcolor: "white",
              }}
              multiline
              rows={4}
              value={dmMessageOne}
              onChange={(e) => handleDMChange(0, e.target.value)}
              className="w-full"
              placeholder="Write your first message"
            />

            {/* <TextField
              sx={{
                bgcolor: "white",
              }}
              value={dmMessageTwo}
              onChange={(e) => handleDMChange(1, e.target.value)}
              className="w-full"
              placeholder="Write your second message"
            /> */}

            <TextField
              type="text"
              value={buttonText}
              onChange={(e) => handleDMChange(2, e.target.value, true)}
              className="w-full"
              placeholder="Button text"
            />
          </div>

          <div className="flex items-center text-blue-400 text-sm gap-1 cursor-pointer mb-6">
            <HelpCircle size={16} />
            <span>Why does an opening DM matter?</span>
          </div>
        </div>

        <div className="mb-4 bg-neutral-100 mt-2 p-3 space-y-2 rounded-lg">
          <h3 className="mb-2">a DM with the link</h3>
          <TextField
            sx={{
              bgcolor: "white",
            }}
            multiline
            rows={4}
            value={dmWithLink}
            onChange={(e) => handleDMChange(3, e.target.value, true)}
            placeholder="Write a message"
            className="w-full"
          />
          <Button
            className="w-full"
            variant="outlined"
            sx={{
              bgcolor: "white",
              textTransform: "capitalize"
            }}
          >
            <span className="mr-1">+</span> Add A Link
          </Button>
        </div>
      </ConfigSection>
    </div>
  );
}
