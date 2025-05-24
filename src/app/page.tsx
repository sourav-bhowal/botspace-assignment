"use client";
import ConfigPanel from "@/components/ConfigPanel";
import PhonePreview from "@/components/phone/phone";
import PreviewTabs from "@/components/PreviewTabs";
import Sidebar from "@/components/SideBar";
import { usePostStore } from "@/store/post-store";
import { Button } from "@mui/material";

export default function Home() {
  const { activeView, setActiveView } = usePostStore();

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <Sidebar />

        <main className="flex flex-1 overflow-hidden">
          <div className="flex-1 flex flex-col md:flex-row h-full">
            {/* Config Panel */}
            <div className="w-full md:w-1/3 bg-white text-black overflow-y-auto">
              <ConfigPanel />
            </div>

            {/* Preview Area */}
            <div className="w-full  bg-neutral-100 p-4 flex flex-col items-center overflow-y-auto text-black">
              <div className="flex-1 flex flex-col items-center w-full">
                <div className="flex justify-between items-center w-full mb-4 px-4">
                  <h2 className="text-lg font-semibold">Preview</h2>
                  <Button
                    sx={{
                      bgcolor: "white",
                      color: "black",
                      borderColor: "black",
                      textTransform: "capitalize",
                    }}
                    variant="outlined"
                  >
                    Go Live
                  </Button>
                </div>
                <PhonePreview />

                <div className="mt-4 w-full max-w-fit md:absolute bottom-14">
                  <PreviewTabs
                    activeView={activeView}
                    onChange={(view) =>
                      setActiveView(view as "post" | "comments" | "dm")
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
