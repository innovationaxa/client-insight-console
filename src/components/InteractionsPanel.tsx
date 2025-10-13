import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export const InteractionsPanel = () => {
  const [filters, setFilters] = useState({
    network: false,
    company: false,
    exchange: false,
    rdv: false,
  });

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <Tabs defaultValue="interactions" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="interactions">Interactions Clients</TabsTrigger>
            <TabsTrigger value="notes">Notes</TabsTrigger>
          </TabsList>
          <TabsContent value="interactions" className="mt-4">
            <CardTitle className="text-base mb-4">Filtres</CardTitle>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="client-network" 
                  checked={filters.network}
                  onCheckedChange={(checked) => setFilters({...filters, network: !!checked})}
                />
                <Label htmlFor="client-network" className="text-sm cursor-pointer">
                  Client - Réseau
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="client-company" 
                  checked={filters.company}
                  onCheckedChange={(checked) => setFilters({...filters, company: !!checked})}
                />
                <Label htmlFor="client-company" className="text-sm cursor-pointer">
                  Client - Compagnie
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="exchange" 
                  checked={filters.exchange}
                  onCheckedChange={(checked) => setFilters({...filters, exchange: !!checked})}
                />
                <Label htmlFor="exchange" className="text-sm cursor-pointer">
                  Échange
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="rdv" 
                  checked={filters.rdv}
                  onCheckedChange={(checked) => setFilters({...filters, rdv: !!checked})}
                />
                <Label htmlFor="rdv" className="text-sm cursor-pointer">
                  RDV
                </Label>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="notes" className="mt-4">
            <p className="text-sm text-muted-foreground">Aucune note disponible</p>
          </TabsContent>
        </Tabs>
      </CardHeader>
    </Card>
  );
};
