import { Phone, Star, MessageSquare, Cloud, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

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
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>En file d'attente</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
