import { usePostStore } from "@/store/post-store";
import {
  MoreHorizontal,
  Heart,
  MessageCircle,
  Send,
  Bookmark,
} from "lucide-react";
import Image from "next/image";

export default function PostView() {
  const { post } = usePostStore();

  return (
    <div className="flex flex-col h-full bg-black">
      {/* Post */}
      <div className="flex-1 overflow-auto">
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

          {/* Post Image */}
          <div className="aspect-square bg-neutral-900 w-full overflow-hidden">
            <Image
              src={post.imageUrl}
              alt="Post content"
              className="w-full h-full object-cover"
              width={600}
              height={600}
            />
          </div>

          {/* Post Actions */}
          <div className="flex items-center p-2">
            <Heart className="h-6 w-6 text-white mr-3" />
            <MessageCircle className="h-6 w-6 text-white mr-3" />
            <Send className="h-6 w-6 text-white" />
            <Bookmark className="h-6 w-6 text-white ml-auto" />
          </div>

          {/* Post Info */}
          <div className="px-3 pb-3">
            <p className="text-sm font-semibold text-white mb-1">
              {post.likes} likes
            </p>
            <p className="text-sm text-white">
              <span className="font-semibold">{post.username}</span>{" "}
              {post.caption}
            </p>
            <p className="text-xs text-gray-500 mt-1">View all comments</p>
            <p className="text-xs text-gray-500 mt-2">19 May 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}
