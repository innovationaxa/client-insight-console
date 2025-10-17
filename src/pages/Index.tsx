import { useState } from "react";
import { SalesforceHeader } from "@/components/SalesforceHeader";
import { SalesforceFooter } from "@/components/SalesforceFooter";
import { AccountCard } from "@/components/AccountCard";
import { InteractionsPanel } from "@/components/InteractionsPanel";
import { AccountDetails } from "@/components/AccountDetails";
import { AIAssistantPanel } from "@/components/AIAssistantPanel";
import backgroundImage from "@/assets/SALESFORCE-background.webp";

interface Interaction {
  id: string;
  summary: string;
  type: string;
  date: string;
  timestamp: string;
}

const Index = () => {
  const [interactions, setInteractions] = useState<Interaction[]>([]);

  const handleAddInteraction = (data: { summary: string; type: string; date: string }) => {
    const newInteraction: Interaction = {
      id: Date.now().toString(),
      summary: data.summary,
      type: data.type,
      date: data.date,
      timestamp: new Date().toISOString()
    };
    setInteractions([newInteraction, ...interactions]);
  };

  return (
    <div 
      id="app" 
      className="min-h-screen bg-background flex flex-col"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <SalesforceHeader />
      
      <main className="flex-1 container mx-auto p-4">
        {/* Mobile: Stack vertically */}
        <div className="lg:hidden space-y-4">
          <div id="col-left" className="space-y-4">
            <AccountCard />
            <InteractionsPanel interactions={interactions} />
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
          <div id="col-left" className="lg:col-span-3 space-y-4 overflow-y-auto scrollbar-hide">
            <AccountCard />
            <InteractionsPanel interactions={interactions} />
          </div>

          {/* Center Column */}
          <div className="lg:col-span-6 overflow-y-auto scrollbar-hide">
            <AccountDetails />
          </div>

          {/* Right Column - AI Panel */}
          <div className="lg:col-span-3 overflow-y-auto scrollbar-hide">
            <AIAssistantPanel />
          </div>
        </div>
      </main>
      
      <SalesforceFooter onAddInteraction={handleAddInteraction} />
    </div>
  );
};

export default Index;
