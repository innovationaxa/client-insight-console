import * as React from "react";
import { Phone, Star, MessageSquare, Cloud, Clock, PhoneCall, ChevronDown, PhoneForwarded, RefreshCw, ArrowRight, Pause, Mic, Grid3x3, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { CallReportDialog } from "./CallReportDialog";

interface SalesforceFooterProps {
  onAddInteraction: (data: { summary: string; type: string; date: string }) => void;
}

export const SalesforceFooter = ({ onAddInteraction }: SalesforceFooterProps) => {
  const [queueOpen, setQueueOpen] = React.useState(false);
  const [hasNotification, setHasNotification] = React.useState(false);
  const [callReportOpen, setCallReportOpen] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const panelRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const onMouseDown = (e: MouseEvent) => {
      if (!queueOpen) return;
      const target = e.target as Node;
      if (
        panelRef.current &&
        !panelRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setQueueOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setQueueOpen(false);
    };

    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [queueOpen]);

  return (
    <footer className="sticky bottom-0 border-t border-border bg-card shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-12">
          {/* Left Section */}
          <div className="flex items-center gap-6">
            <Button variant="ghost" size="sm" className="gap-2">
              <Phone className="w-4 h-4" />
              <span>Demandes Espace Client</span>
              <Badge variant="secondary" className="ml-1">50+</Badge>
            </Button>
            
            <Button variant="ghost" size="sm" className="gap-2">
              <Star className="w-4 h-4 fill-warning text-warning" />
              <span>Leads</span>
              <Badge variant="secondary" className="ml-1">2</Badge>
            </Button>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm" 
              className="gap-2 relative"
              onClick={() => {
                setHasNotification(false);
                setCallReportOpen(true);
              }}
            >
              <Sparkles className="w-4 h-4" />
              <span>CR par IA</span>
              {hasNotification && (
                <Badge 
                  variant="secondary" 
                  className="ml-1 bg-[hsl(265,85%,56%)] text-white hover:bg-[hsl(265,85%,56%)]"
                >
                  1
                </Badge>
              )}
            </Button>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Cloud className="w-4 h-4" />
              <span>Genesys Cloud</span>
            </div>
            
            <div className="relative">
              <Button
                ref={buttonRef}
                variant="ghost"
                size="sm"
                className="gap-2 text-muted-foreground hover:text-foreground"
                onClick={() => setQueueOpen((v) => !v)}
              >
                <Clock className="w-4 h-4" />
                <span>En file d'attente</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${queueOpen ? "rotate-180" : ""}`} />
              </Button>

              {queueOpen && (
                <div
                  ref={panelRef}
                  role="dialog"
                  aria-label="Détails de la file d'attente"
                  className="absolute bottom-full right-0 mb-2 w-80 rounded-md border bg-popover text-popover-foreground shadow-md z-50 animate-in slide-in-from-bottom-2"
                >
                  {/* Header */}
                  <div className="bg-primary text-primary-foreground p-3 rounded-t-md">
                    <div className="flex items-center gap-2">
                      <PhoneCall className="w-4 h-4" />
                      <span className="font-semibold">En file d'attente</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 space-y-2 bg-accent/20">
                    {/* Control Bar */}
                    <div className="flex items-center justify-center gap-1 bg-muted/50 rounded p-2 mb-3">
                      <Button variant="ghost" size="icon" className="h-8 w-8" disabled>
                        <Phone className="w-4 h-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 hover:bg-accent"
                        onClick={() => {
                          setHasNotification(true);
                          setQueueOpen(false);
                        }}
                      >
                        <PhoneForwarded className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-accent">
                        <RefreshCw className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-accent">
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-accent">
                        <Pause className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-accent">
                        <Mic className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-accent">
                        <Grid3x3 className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <div className="text-sm">
                      <span className="font-medium">N° appelant :</span> +33649730514
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">File d'attente :</span> AGC_Martin_Accueil
                    </div>
                    <div className="text-sm text-muted-foreground">---</div>
                    <div className="text-sm">
                      <span className="font-medium">Temps d'attente :</span> 1 min
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Dernier Appel :</span> <span className="italic">Aucun</span> [0 sur 48h]
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="p-3 border-t">
                    <div className="text-center text-xs text-muted-foreground mb-2">Genesys Cloud</div>
                    <Button className="w-full" size="sm">En file d'attente</Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <CallReportDialog 
        open={callReportOpen} 
        onOpenChange={setCallReportOpen}
        onSave={onAddInteraction}
      />
    </footer>
  );
};
