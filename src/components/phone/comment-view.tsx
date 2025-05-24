import { usePostStore } from "@/store/post-store";
import { MoreHorizontal, Heart, Plus } from "lucide-react";
import Image from "next/image";

export default function CommentView() {

  // Access the post store to get the current post and comment type
  const { post } = usePostStore();

  // Fallbacks for post properties
  const commentType = post.commentType || "specific";

  return (
    <div className="flex flex-col h-full bg-black">
      {/* Post Preview */}
      <div className="flex-1 overflow-auto relative">
        <div className="border-b border-neutral-800">
          {/* Post Header */}
          <div className="flex items-center p-3">
            <div className="w-8 h-8 bg-neutral-800 rounded-full overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Profile"
                className="w-full h-full object-cover"
                width={32}
                height={32}
              />
            </div>
            <div className="ml-2 flex-1">
              <p className="text-sm font-semibold text-white">
                {post.username}
              </p>
            </div>
            <MoreHorizontal className="h-5 w-5 text-white" />
          </div>

          {/* Post Thumbnail */}
          <div className="aspect-video bg-neutral-900 w-full overflow-hidden">
            <Image
              src={post.imageUrl}
              alt="Post content"
              className="w-full h-full object-cover"
              width={600}
              height={400}
            />
          </div>
        </div>

        <div className="flex flex-col absolute h-[20rem] w-full top-[200px] bg-neutral-900 rounded-t-3xl">
          {/* Comments Header */}
          <div className="flex flex-col items-center mt-3 gap-2">
            <div className="w-10 h-1 bg-neutral-200 rounded-full" />
            <h3 className="text-white font-semibold mb-2">Comments</h3>
          </div>

          {/* Comments */}
          <div className="p-3 border-t border-neutral-800">
            <div className="flex mb-4">
              <div className="w-8 h-8 bg-neutral-800 rounded-full overflow-hidden mr-2">
                <Image
                  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="User avatar"
                  className="w-full h-full object-cover"
                  width={32}
                  height={32}
                />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-white text-sm">
                      <span className="font-semibold">
                        {post.commentUsername || "Username"}
                      </span>
                      <span className="text-gray-500 ml-1 text-xs">Now</span>
                    </p>
                    <p className="text-white text-xs">
                      {commentType === "specific"
                        ? post.commentKeywords || "Price"
                        : "Any word or phrase"}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Reply</p>
                  </div>
                  <Heart className="h-4 w-4 text-gray-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Emoji Row */}
          <div className="flex mt-8 justify-around p-3 border-t border-neutral-800">
            <span>❤️</span>
            <span>🙌</span>
            <span>🔥</span>
            <span>👏</span>
            <span>😍</span>
            <span>😮</span>
            <span>😢</span>
          </div>

          {/* Comment Input */}
          <div className="p-3 flex w-full items-center absolute bottom-10">
            <div className="w-8 h-8 bg-neutral-800 rounded-full flex items-center justify-center mr-2">
              <Plus className="h-5 w-5 text-white" />
            </div>
            <input
              className="flex-1 py-2 px-3 bg-neutral-800 rounded-full text-sm text-gray-500 w-full"
              placeholder="Add a comment for username..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
