import { usePostStore } from "@/store/post-store";
import { Button } from "@mui/material";
import { ChevronLeft, Phone, Video, PlusCircle } from "lucide-react";
import Image from "next/image";

export default function DirectMessageView() {
  const { post } = usePostStore();

  return (
    <div className="flex flex-col h-full bg-black">
      {/* Header */}
      <div className="px-4 py-3 flex items-center border-b border-neutral-800">
        <ChevronLeft className="h-5 w-5 text-white mr-2" />
        <div className="w-8 h-8 bg-neutral-800 rounded-full overflow-hidden mr-2">
          <Image
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Profile"
            className="w-full h-full object-cover"
            width={32}
            height={32}
          />
        </div>
        <div className="flex-1">
          <p className="text-white font-semibold text-sm">{post.username}</p>
        </div>
        <Phone className="h-5 w-5 text-white mr-3" />
        <Video className="h-5 w-5 text-white" />
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-auto p-4 space-y-4">
        {post.directMessages.map((message, index) => {
          if (message.btn) return null;

          return (
            <div
              key={index}
              className={`max-w-fit ${message.isLink ? "ml-auto" : ""}`}
            >
              {index === 3 ? (
                <div
                  className={`bg-neutral-800 absolute left-0 text-white p-3 rounded-2xl rounded-bl-sm min-w-[40%] ${
                    !message.message && "text-neutral-500"
                  }`}
                >
                  {message.message ? message.message : "Write a message"}
                </div>
              ) : message.isLink ? (
                <div className="bg-blue-500 text-white p-3 break-words rounded-2xl rounded-br-sm w-fit">
                  {message.message}
                </div>
              ) : (
                <div className="bg-neutral-800 text-white break-words p-3 rounded-2xl rounded-bl-sm max-w-[80%]">
                  {message.message}
                  <button className=" bg-neutral-700 px-2 py-1 rounded-lg mt-2 w-full">
                    Send me the link
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Input */}
      <div className="p-3 flex items-center border-t border-neutral-800 absolute bottom-1 left-0 right-0 bg-black">
        <PlusCircle className="h-5 w-5 text-white mr-2" />
        <div className="flex-1 py-2 px-3 bg-neutral-800 rounded-full text-sm text-gray-400">
          Message...
        </div>
        <Button className="ml-2 text-blue-500 text-sm font-semibold">
          Send
        </Button>
      </div>
    </div>
  );
}
