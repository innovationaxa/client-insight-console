import { User, Edit } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const AccountDetails = () => {
  return (
    <div id="col-center" className="space-y-4">
      {/* Account Header */}
      <Card className="shadow-lg">
        <CardHeader className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <User className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-bold">Mme DUPOND SYLVIANE</h1>
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <Edit className="h-3 w-3" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">Compte</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">Rafraîchir</Button>
              <Button size="sm">Accès vision consolidée</Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <div className="text-muted-foreground text-xs">Propriétaire du compte</div>
              <div className="font-medium">BENOIT TES 🔺</div>
              <div className="text-xs text-primary">TLAB</div>
            </div>
            <div>
              <div className="text-muted-foreground text-xs">Rôle</div>
              <div className="font-medium">Personne Principale</div>
            </div>
            <div>
              <div className="text-muted-foreground text-xs">Indices</div>
              <Badge variant="secondary" className="font-bold">3</Badge>
            </div>
            <div>
              <div className="text-muted-foreground text-xs">Score de préqualification crédit</div>
              <div className="font-medium">CP</div>
            </div>
          </div>

          <Separator />

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-muted-foreground text-xs">Origine client</div>
              <div className="font-medium">CADRE ENTREP.</div>
            </div>
            <div>
              <div className="text-muted-foreground text-xs">Profession précise</div>
              <div className="font-medium">CADRE ENTREP.</div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Tabs */}
      <Card id="tabs-main" className="shadow-lg">
        <Tabs defaultValue="details" className="w-full">
          <TabsList className="w-full flex flex-wrap h-auto gap-2 justify-start p-1">
            <TabsTrigger value="details" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
              Détails
            </TabsTrigger>
            <TabsTrigger value="contrats" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
              Contrats
            </TabsTrigger>
            <TabsTrigger value="opportunites" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
              Opportunités & Patrimoine
            </TabsTrigger>
            <TabsTrigger value="demandes" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
              Demandes & Sinistres
            </TabsTrigger>
            <TabsTrigger value="plus" className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none">
              Plus
            </TabsTrigger>
          </TabsList>

          <TabsContent value="details" id="tab-details" className="p-6">
            <div className="space-y-6">
              <div className="flex gap-4 border-b">
                <button className="px-4 py-2 text-sm font-medium border-b-2 border-primary">
                  Informations Générales
                </button>
                <button className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground">
                  Coordonnées
                </button>
                <button className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground">
                  Client Digital
                </button>
              </div>

              {/* État civil */}
              <div className="space-y-4">
                <h3 className="font-semibold flex items-center gap-2">
                  État civil
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-muted-foreground text-xs">Nom du compte</div>
                    <div className="font-medium">Mme DUPOND SYLVIANE</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground text-xs">Sexe</div>
                    <div className="font-medium">Féminin</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground text-xs">Nom de naissance</div>
                    <div className="font-medium">GEORGIE</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground text-xs">Prénom 2</div>
                    <div className="font-medium">-</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground text-xs">Prénom 3</div>
                    <div className="font-medium">-</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground text-xs">Date de naissance</div>
                    <div className="font-medium">31/05/1964</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground text-xs">Âge</div>
                    <div className="font-medium">41 ans</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground text-xs">Ville de naissance</div>
                    <div className="font-medium">BERNE</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground text-xs">Pays de naissance</div>
                    <div className="font-medium">Suisse</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground text-xs">Département de naissance</div>
                    <div className="font-medium">99</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground text-xs">Nationalité</div>
                    <div className="font-medium">France</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground text-xs">Nationalité 2</div>
                    <div className="font-medium">-</div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="contrats" id="tab-contrats" className="p-6">
            <div className="text-sm text-muted-foreground">
              Contrats en cours d'affichage...
            </div>
          </TabsContent>

          <TabsContent value="opportunites" id="tab-opportunites" className="p-6">
            <div className="text-sm text-muted-foreground">
              Opportunités et patrimoine en cours d'affichage...
            </div>
          </TabsContent>

          <TabsContent value="demandes" id="tab-demandes" className="p-6">
            <div className="text-sm text-muted-foreground">
              Demandes et sinistres en cours d'affichage...
            </div>
          </TabsContent>

          <TabsContent value="plus" id="tab-plus" className="p-6">
            <div className="text-sm text-muted-foreground">
              Informations complémentaires en cours d'affichage...
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};
