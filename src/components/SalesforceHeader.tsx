import { Search, Bell, HelpCircle, User, Grid3x3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const SalesforceHeader = () => {
  return (
    <header id="app-header" className="sticky top-0 z-50 w-full border-b bg-card shadow-sm">
      <div className="flex h-12 items-center gap-4 px-4">
        {/* Logo and App Switcher */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Grid3x3 className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2 border-r pr-4">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-primary">
              <span className="text-sm font-bold text-primary-foreground">SF</span>
            </div>
            <span className="text-sm font-semibold">Console Distributeurs</span>
          </div>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Rechercher..."
              className="pl-9 h-9 bg-muted/50 border-none"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Bell className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <HelpCircle className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <User className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 px-4 py-2 text-xs text-muted-foreground border-t bg-muted/30">
        <span>Console Distributeurs</span>
        <span>›</span>
        <span className="text-foreground font-medium">Compte</span>
      </div>
    </header>
  );
};
