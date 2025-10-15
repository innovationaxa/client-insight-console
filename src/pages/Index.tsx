import { SalesforceHeader } from "@/components/SalesforceHeader";
import { AccountCard } from "@/components/AccountCard";
import { InteractionsPanel } from "@/components/InteractionsPanel";
import { AccountDetails } from "@/components/AccountDetails";
import { AIAssistantPanel } from "@/components/AIAssistantPanel";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";

const Index = () => {
  return (
    <div id="app" className="min-h-screen bg-background flex flex-col">
      <SalesforceHeader />
      
      <main className="flex-1 container mx-auto p-4">
        {/* Mobile: Stack vertically */}
        <div className="lg:hidden space-y-4">
          <div id="col-left" className="space-y-4">
            <AccountCard />
            <InteractionsPanel />
          </div>
          <div>
            <AccountDetails />
          </div>
          <div>
            <AIAssistantPanel />
          </div>
        </div>

        {/* Desktop: Resizable panels */}
        <div className="hidden lg:block h-[calc(100vh-5rem)]">
          <ResizablePanelGroup direction="horizontal" className="gap-4">
            {/* Left Column */}
            <ResizablePanel 
              defaultSize={20} 
              minSize={15} 
              maxSize={30}
              id="col-left"
            >
              <div className="space-y-4 h-full overflow-y-auto pr-2">
                <AccountCard />
                <InteractionsPanel />
              </div>
            </ResizablePanel>

            <ResizableHandle withHandle />

            {/* Center Column */}
            <ResizablePanel 
              defaultSize={50} 
              minSize={35} 
            >
              <div className="h-full overflow-y-auto px-2">
                <AccountDetails />
              </div>
            </ResizablePanel>

            <ResizableHandle withHandle />

            {/* Right Column - AI Panel */}
            <ResizablePanel 
              defaultSize={30} 
              minSize={20} 
              maxSize={40}
            >
              <div className="h-full overflow-y-auto pl-2">
                <AIAssistantPanel />
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </main>
    </div>
  );
};

export default Index;
