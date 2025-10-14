import { useState } from "react";
import { Building2, Car, Check, X, Wallet, Settings, RotateCw } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";

const contractsData = [
  {
    id: 1,
    type: "immeuble",
    name: "IMMEUBLE",
    contractNumber: "0000003624787404",
    specificity: "",
    effectDate: "01/04/2008",
    status: "en cours",
    cotisation: "796,00 €",
    fractionnement: "S"
  },
  {
    id: 2,
    type: "auto",
    name: "MON AUTO",
    contractNumber: "0000080114634904",
    specificity: "AA-001-AA",
    effectDate: "06/10/2025",
    status: "en cours",
    cotisation: "341,00 €",
    fractionnement: "M"
  },
  {
    id: 3,
    type: "auto",
    name: "MON AUTO",
    contractNumber: "0000080114635004",
    specificity: "AA-001-AA",
    effectDate: "06/10/2025",
    status: "en cours",
    cotisation: "323,00 €",
    fractionnement: "M"
  }
];

export const ContractsTab = () => {
  const [iardOpen, setIardOpen] = useState(true);

  return (
    <div className="space-y-4">
      <Tabs defaultValue="actifs" className="w-full">
        <TabsList className="w-full justify-start bg-transparent border-b rounded-none p-0 h-auto">
          <TabsTrigger 
            value="actifs" 
            className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none flex items-center gap-2"
          >
            <Check className="h-4 w-4" />
            Actifs
          </TabsTrigger>
          <TabsTrigger 
            value="inactifs"
            className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none flex items-center gap-2"
          >
            <X className="h-4 w-4" />
            Inactifs
          </TabsTrigger>
          <TabsTrigger 
            value="panorama"
            className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none flex items-center gap-2"
          >
            <Wallet className="h-4 w-4" />
            Panorama Banque
          </TabsTrigger>
        </TabsList>

        <TabsContent value="actifs" className="space-y-4 mt-4">
          {/* IARD Section */}
          <Collapsible open={iardOpen} onOpenChange={setIardOpen} className="border rounded-lg">
            <CollapsibleTrigger className="flex items-center gap-3 p-4 w-full hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center">
                  <Building2 className="h-4 w-4 text-primary" />
                </div>
                <span className="font-semibold">IARD (3)</span>
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="px-4 pb-4 space-y-4">
                <div className="text-xs text-muted-foreground">
                  3 éléments • Trié(s) par Spécificité • Filtré par Famille de Branche, Situation, Désactivé • Mis à jour il y a quelques secondes
                </div>
                
                <div className="flex gap-2 justify-end mb-2">
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <Settings className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <RotateCw className="h-4 w-4" />
                  </Button>
                </div>

                <div className="border rounded-lg overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-12">#</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Nom de Co...</TableHead>
                        <TableHead>N° Contrat AXA</TableHead>
                        <TableHead>Spécificité</TableHead>
                        <TableHead>Date d'effet</TableHead>
                        <TableHead>Situation</TableHead>
                        <TableHead>Cotisation ...</TableHead>
                        <TableHead>Fractionne...</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {contractsData.map((contract) => (
                        <TableRow key={contract.id}>
                          <TableCell className="font-medium">{contract.id}</TableCell>
                          <TableCell>
                            {contract.type === "immeuble" ? (
                              <Building2 className="h-5 w-5 text-primary" />
                            ) : (
                              <Car className="h-5 w-5 text-primary" />
                            )}
                          </TableCell>
                          <TableCell>{contract.name}</TableCell>
                          <TableCell>
                            <a href="#" className="text-primary hover:underline">
                              {contract.contractNumber}
                            </a>
                          </TableCell>
                          <TableCell>{contract.specificity}</TableCell>
                          <TableCell>{contract.effectDate}</TableCell>
                          <TableCell>{contract.status}</TableCell>
                          <TableCell>{contract.cotisation}</TableCell>
                          <TableCell>{contract.fractionnement}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div className="text-center">
                  <Button variant="link" className="text-primary">
                    Afficher tout
                  </Button>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* Prévoyance Section */}
          <Collapsible className="border rounded-lg">
            <CollapsibleTrigger className="flex items-center gap-3 p-4 w-full hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center">
                  <span className="text-lg">🎁</span>
                </div>
                <span className="font-semibold">Prévoyance (0)</span>
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="px-4 pb-4">
                <p className="text-sm text-muted-foreground">Aucun contrat de prévoyance</p>
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* Epargne / Retraite Section */}
          <Collapsible className="border rounded-lg">
            <CollapsibleTrigger className="flex items-center gap-3 p-4 w-full hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center">
                  <span className="text-lg">💰</span>
                </div>
                <span className="font-semibold">Epargne / Retraite (0)</span>
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="px-4 pb-4">
                <p className="text-sm text-muted-foreground">Aucun contrat d'épargne ou retraite</p>
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* Santé Section */}
          <Collapsible className="border rounded-lg">
            <CollapsibleTrigger className="flex items-center gap-3 p-4 w-full hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center">
                  <span className="text-lg">🛡️</span>
                </div>
                <span className="font-semibold">Santé (0)</span>
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="px-4 pb-4">
                <p className="text-sm text-muted-foreground">Aucun contrat de santé</p>
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* Banque Section */}
          <Collapsible className="border rounded-lg">
            <CollapsibleTrigger className="flex items-center gap-3 p-4 w-full hover:bg-muted/50 transition-colors">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center">
                  <span className="text-lg">💵</span>
                </div>
                <span className="font-semibold">Banque (0)</span>
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="px-4 pb-4">
                <p className="text-sm text-muted-foreground">Aucun contrat bancaire</p>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </TabsContent>

        <TabsContent value="inactifs" className="mt-4">
          <div className="text-sm text-muted-foreground p-4 border rounded-lg">
            Aucun contrat inactif
          </div>
        </TabsContent>

        <TabsContent value="panorama" className="mt-4">
          <div className="text-sm text-muted-foreground p-4 border rounded-lg">
            Vue panorama banque
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
