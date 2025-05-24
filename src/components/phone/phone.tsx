import { usePostStore } from "@/store/post-store";
import PostView from "./post-view";
import CommentView from "./comment-view";
import DirectMessageView from "./dm-view";
import Image from "next/image";
import {
  Battery,
  ChevronLeft,
  HomeIcon,
  PlusSquare,
  SearchIcon,
  SignalIcon,
  Wifi,
} from "lucide-react";

export default function PhonePreview() {
  const { activeView } = usePostStore();

  return (
    <div
      className="relative mx-auto my-auto bg-gradient-to-br from-gray-300 via-neutral-400 to-gray-700 rounded-[45px] w-[90vw] max-w-[320px] h-[180vw] max-h-[660px] shadow-2xl border-[12px] border-black overflow-hidden flex flex-col"
      style={{ boxShadow: "0 8px 32px 0 rgba(0,0,0,0.25)" }}
    >
      {/* Status Bar with Dynamic Island */}
      <div
        className="relative flex items-center justify-between px-4 pt-3 pb-1 bg-black/90 text-white text-xs font-semibold select-none"
        style={{ height: 32 }}
      >
        {/* Dynamic Island (Pill Notch) */}
        <div className="absolute left-1/2 -translate-x-1/2 top-2 w-28 h-6 bg-black rounded-full z-10 shadow-lg border border-neutral-800 flex items-center justify-center">
          {/* Optionally, add camera/cutout dots here for realism */}
        </div>
        <span className="z-20 ml-2">9:41</span>
        <div className="flex items-center gap-2 z-20 ml-2">
          <SignalIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          <Wifi className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          <Battery className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="white" />
        </div>
      </div>

      {/* Screen Content */}
      <div className="relative flex-1 w-full bg-black overflow-hidden pb-0">
        {(activeView === "post" || activeView === "comments") && (
          <div className="flex w-full mx-2 my-3">
            <ChevronLeft className="h-5 w-5 text-white mr-2" />
            <div className="absolute left-[35%] items-center flex flex-col">
              <h1 className="text-xs font-semibold tracking-wide text-gray-400 uppercase">
                BOTSPACEHQ
              </h1>
              <p className="text-sm font-medium text-white">Posts</p>
            </div>
          </div>
        )}

        {activeView === "post" && <PostView />}
        {activeView === "comments" && <CommentView />}
        {activeView === "dm" && <DirectMessageView />}
      </div>

      {/* Bottom Navigation */}
      <div className="flex justify-around py-6 bg-black absolute bottom-0 left-0 right-0 rounded-b-[44px] shadow-md">
        <HomeIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        <SearchIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        <PlusSquare className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        <Image
          src="/reel.png"
          alt="Instagram Logo"
          className="w-5 h-5 sm:w-6 sm:h-6 invert"
          width={24}
          height={24}
        />
        <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-neutral-800 overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Profile"
              className="w-full h-full object-cover"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
      {/* Home Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-28 h-1.5 bg-neutral-700 rounded-full z-30" />
    </div>
  );
}
