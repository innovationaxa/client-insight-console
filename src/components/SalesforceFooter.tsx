import { Phone, Star, MessageSquare, Cloud, Clock, PhoneCall, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export const SalesforceFooter = () => {
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
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MessageSquare className="w-4 h-4" />
              <span>Dialogue IA</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Cloud className="w-4 h-4" />
              <span>Genesys Cloud</span>
            </div>
            
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
                  <Clock className="w-4 h-4" />
                  <span>En file d'attente</span>
                  <ChevronDown className="w-3 h-3" />
                </Button>
              </PopoverTrigger>
              <PopoverContent 
                side="top" 
                align="end" 
                className="w-80 p-0 shadow-lg animate-in slide-in-from-bottom-2"
              >
                {/* Header */}
                <div className="bg-[hsl(199,89%,48%)] text-white p-3 rounded-t-md">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <PhoneCall className="w-4 h-4" />
                      <span className="font-semibold">En file d'attente</span>
                    </div>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                  <div className="flex items-center justify-around py-2 border-y border-white/20">
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 h-8 w-8">
                      <Phone className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 h-8 w-8">
                      <PhoneCall className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 h-8 w-8">
                      <Clock className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="bg-[hsl(120,40%,85%)] p-4 space-y-2">
                  <div className="flex items-start gap-2">
                    <PhoneCall className="w-4 h-4 mt-1 text-foreground" />
                    <div className="flex-1">
                      <span className="text-sm font-medium">N° appelant : </span>
                      <span className="text-sm">+33649730514</span>
                    </div>
                  </div>
                  
                  <div className="text-sm">
                    <span className="font-medium">File d'attente : </span>
                    <span>AGC_Martin_Accueil</span>
                  </div>
                  
                  <div className="text-sm text-muted-foreground">---</div>
                  
                  <div className="text-sm">
                    <span className="font-medium">Temps d'attente: </span>
                    <span>1 min</span>
                  </div>
                  
                  <div className="text-sm">
                    <span className="font-medium">Dernier Appel : </span>
                    <span className="italic">Aucun</span>
                    <span> [0 sur 48h]</span>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-3 border-t">
                  <div className="text-center text-sm text-muted-foreground mb-2">
                    Genesys Cloud
                  </div>
                  <Button className="w-full bg-[hsl(199,89%,48%)] hover:bg-[hsl(199,89%,42%)] text-white">
                    En file d'attente
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </footer>
  );
};
