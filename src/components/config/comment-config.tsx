import { usePostStore } from "@/store/post-store";
import { ConfigSection } from "../ConfigPanel";
import { RadioOption } from "../ui/Radio";
import { TextField } from "@mui/material";

export default function ConfigCommentView() {
  // Access the post store to get posts, selectedPostId, and updatePost function
  const { posts, selectedPostId, updatePost } = usePostStore();

  // Get the currently selected post or default to the first post
  const selectedPost = posts[selectedPostId] || posts[0];

  // Default values for comment type and keywords
  const selectedOption = selectedPost.commentType || "specific";
  const keywordInput = selectedPost.commentKeywords || "Price";

  // Handler functions to update the post with new comment type and keywords
  const handleOptionChange = (option: string) => {
    updatePost({ commentType: option });
  };

  const handleKeywordChange = (value: string) => {
    updatePost({ commentKeywords: value });
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">And this comment has</h1>

      <ConfigSection title="">
        <div className="bg-neutral-100 p-3 rounded-lg mb-2">
          <RadioOption
            label="a specific word or words"
            selected={selectedOption === "specific"}
            onClick={() => handleOptionChange("specific")}
          />

          <div className="pl-7 mt-2 mb-4">
            <TextField
              type="text"
              value={keywordInput}
              onChange={(e) => handleKeywordChange(e.target.value)}
              className="w-full p-2 rounded-md border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
              placeholder="Enter keywords"
            />

            <p className="text-sm text-neutral-400 mb-2">
              Use commas to separate words
            </p>
            <div className="flex items-center flex-wrap gap-2 mb-2">
              <p className="text-sm text-neutral-400">For example:</p>
              <div className="px-3 py-1 bg-neutral-200  rounded-full text-sm">
                Price
              </div>
              <div className="px-3 py-1 bg-neutral-200 rounded-full text-sm">
                Link
              </div>
              <div className="px-3 py-1 bg-neutral-200  rounded-full text-sm">
                Shop
              </div>
            </div>
          </div>
        </div>

        <div className="bg-neutral-100 p-3 rounded-lg">
          <RadioOption
            label="any word"
            selected={selectedOption === "any"}
            onClick={() => handleOptionChange("any")}
          />
        </div>
      </ConfigSection>
    </div>
  );
}
