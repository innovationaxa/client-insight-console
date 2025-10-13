import { SalesforceHeader } from "@/components/SalesforceHeader";
import { AccountCard } from "@/components/AccountCard";
import { InteractionsPanel } from "@/components/InteractionsPanel";
import { AccountDetails } from "@/components/AccountDetails";
import { AIAssistantPanel } from "@/components/AIAssistantPanel";

const Index = () => {
  return (
    <div id="app" className="min-h-screen bg-background">
      <SalesforceHeader />
      
      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Left Column */}
          <div id="col-left" className="lg:col-span-3 space-y-4">
            <AccountCard />
            <InteractionsPanel />
          </div>

          {/* Center Column */}
          <div className="lg:col-span-6">
            <AccountDetails />
          </div>

          {/* Right Column - AI Panel */}
          <div className="lg:col-span-3">
            <AIAssistantPanel />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
