import { SalesforceHeader } from "@/components/SalesforceHeader";
import { AccountCard } from "@/components/AccountCard";
import { InteractionsPanel } from "@/components/InteractionsPanel";
import { AccountDetails } from "@/components/AccountDetails";
import { AIAssistantPanel } from "@/components/AIAssistantPanel";

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

        {/* Desktop: Full height grid layout */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-4 h-[calc(100vh-5rem)]">
          {/* Left Column */}
          <div id="col-left" className="lg:col-span-3 space-y-4 overflow-y-auto">
            <AccountCard />
            <InteractionsPanel />
          </div>

          {/* Center Column */}
          <div className="lg:col-span-6 overflow-y-auto">
            <AccountDetails />
          </div>

          {/* Right Column - AI Panel */}
          <div className="lg:col-span-3 overflow-y-auto">
            <AIAssistantPanel />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
