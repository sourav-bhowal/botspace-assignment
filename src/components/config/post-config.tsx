import { usePostStore } from "@/store/post-store";
import { useState } from "react";
import { ConfigSection } from "../ConfigPanel";
import Image from "next/image";
import { RadioOption } from "../ui/Radio";

export default function ConfigPostView() {
  const { posts, selectPost, selectedPostId } = usePostStore();
  const [selectedOption, setSelectedOption] = useState("specific");

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">When someone comments on</h1>

      <ConfigSection title="">
        <div className="space-y-1 bg-neutral-100 p-3 rounded-lg">
          <RadioOption
            label="a specific post or reel"
            selected={selectedOption === "specific"}
            onClick={() => setSelectedOption("specific")}
          />

          <div className="pl-7 mt-2 mb-4">
            <div className="grid grid-cols-3 gap-2">
              {posts.map((post, index) => (
                <div
                  key={index}
                  className={`aspect-square rounded-md overflow-hidden cursor-pointer ${
                    selectedPostId === index ? "ring-2 ring-blue-500" : ""
                  }`}
                  onClick={() => {
                    selectPost(index);
                  }}
                >
                  <Image
                    src={post.imageUrl}
                    alt={`Post ${index + 1}`}
                    className="w-full h-full object-cover"
                    width={300}
                    height={300}
                  />
                </div>
              ))}
            </div>
            <button className="text-blue-400 text-sm mt-2">Show All</button>
          </div>
        </div>
        <div className="bg-neutral-100 mt-2 p-3 rounded-lg">
          <RadioOption
            label="any post or reel"
            isPro
            selected={selectedOption === "any"}
            onClick={() => setSelectedOption("any")}
          />
        </div>

        <div className="bg-neutral-100 mt-2 p-3 rounded-lg">
          <RadioOption
            label="next post or reel"
            isPro
            selected={selectedOption === "next"}
            onClick={() => setSelectedOption("next")}
          />
        </div>
      </ConfigSection>
    </div>
  );
}
