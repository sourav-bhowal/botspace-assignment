"use client";
import ConfigPanel from "@/components/ConfigPanel";
import PhonePreview from "@/components/phone/phone";
import PreviewTabs from "@/components/PreviewTabs";
import Sidebar from "@/components/SideBar";
import { usePostStore } from "@/store/post-store";
import { Button, Tabs, Tab } from "@mui/material";
import { useState } from "react";

export default function Home() {
  const { activeView, setActiveView } = usePostStore();
  const [mobileTab, setMobileTab] = useState<"config" | "preview">("preview");

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar (always shown) */}
        <Sidebar />

        <main className="flex flex-1 overflow-y-auto">
          <div className="flex-1 flex flex-col h-full">
            {/* Mobile Tabs */}
            <div className="md:hidden bg-white">
              <Tabs
                value={mobileTab}
                onChange={(_, newVal) => setMobileTab(newVal)}
                variant="fullWidth"
                textColor="primary"
                indicatorColor="primary"
              >
                <Tab value="config" label="Config" />
                <Tab value="preview" label="Preview" />
              </Tabs>
            </div>

            <div className="flex-1 flex flex-col md:flex-row h-full">
              {/* Config Panel */}
              <div
                className={`
                  bg-white text-black overflow-y-auto 
                  ${mobileTab === "config" ? "block" : "hidden"} 
                  md:block w-full md:w-1/3
                `}
              >
                <ConfigPanel />
              </div>

              {/* Phone Preview + Tabs */}
              <div
                className={`
                  bg-neutral-100 p-4 flex flex-col items-center overflow-y-auto text-black 
                  ${mobileTab === "preview" ? "block" : "hidden"} 
                  md:block w-full
                `}
              >
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

                  <div className="mt-4 w-full max-w-fit md:absolute bottom-36">
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
          </div>
        </main>
      </div>
    </div>
  );
}
