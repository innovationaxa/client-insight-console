import { useState } from "react";
import { Sparkles, ChevronDown, ChevronUp, RefreshCw, User, Home, CreditCard, AlertCircle, TrendingUp, MessageSquare, Clock, Star, DollarSign, FileWarning, CheckCircle2, Shield, Lightbulb, FileText, Baby, Briefcase, Palmtree, Home as HomeMove, Target, ThumbsDown, Calendar, Lock, TrendingUp as Growth } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
interface AccordionSectionProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  dataSlot?: string;
}
const AccordionSection = ({
  id,
  title,
  icon,
  children,
  defaultOpen = false,
  dataSlot
}: AccordionSectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return <Collapsible open={isOpen} onOpenChange={setIsOpen} className="border-b last:border-0">
      <CollapsibleTrigger className="flex w-full items-center justify-between p-4 hover:bg-muted/50 transition-colors">
        <div className="flex items-center gap-2">
          {icon}
          <span className="font-semibold text-sm">{title}</span>
        </div>
        {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div id={id} data-slot={dataSlot} className="p-4 pt-0 text-sm space-y-3">
          {children}
        </div>
      </CollapsibleContent>
    </Collapsible>;
};
export const AIAssistantPanel = () => {
  const [viewMode, setViewMode] = useState<"preparation" | "live">("preparation");

  return <div id="col-right" className="sticky top-4 h-[calc(100vh-2rem)] flex flex-col">
      <Card id="ai-panel" className="shadow-lg flex flex-col h-full overflow-hidden bg-card">
        <CardHeader className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground flex-shrink-0 py-3 px-4">
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              <span className="text-base">Mon Assistant IA</span>
            </div>
            <Button size="icon" variant="ghost" className="h-8 w-8 text-white hover:bg-white/20">
              <MessageSquare className="h-4 w-4" />
            </Button>
          </CardTitle>
        </CardHeader>

        {/* Quick Summary Header */}
        <div className="bg-gradient-to-br from-sf-gray-50 to-background p-4 border-b flex-shrink-0">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <div className="text-xs text-muted-foreground">Âge / Profession</div>
              <div className="font-semibold text-sm">41 ans • Cadre</div>
            </div>
            <div className="space-y-1">
              <div className="text-xs text-muted-foreground">Score client</div>
              <div className="flex items-center gap-1">
                <Badge variant="secondary" className="h-5 px-2 text-xs font-bold">3</Badge>
                <div className="flex gap-0.5">
                  {[1, 2, 3].map((i) => (
                    <Star key={i} className="h-3 w-3 fill-warning text-warning" />
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-xs text-muted-foreground">Ancienneté</div>
              <div className="font-semibold text-sm flex items-center gap-1">
                <Shield className="h-3 w-3 text-success" />
                22 ans
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-xs text-muted-foreground">Dernier contact</div>
              <div className="font-semibold text-sm flex items-center gap-1">
                <Clock className="h-3 w-3 text-primary" />
                Mai 2025
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="synthese" className="flex-1 flex flex-col overflow-hidden">
          <TabsList className="w-full rounded-none border-b bg-transparent p-0 h-auto flex-shrink-0">
            <TabsTrigger 
              value="synthese" 
              className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3"
            >
              <FileText className="h-4 w-4 mr-2" />
              Synthèse 360
            </TabsTrigger>
            <TabsTrigger 
              value="pistes" 
              className="flex-1 rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none py-3"
            >
              <Lightbulb className="h-4 w-4 mr-2" />
              Pistes Commerciales
            </TabsTrigger>
          </TabsList>

          {/* Synthèse 360 Tab */}
          <TabsContent value="synthese" className="flex-1 overflow-y-auto mt-0 p-4 space-y-4">
            {/* Client Identity Card */}
            <Card className="bg-gradient-to-br from-primary/5 to-background border-primary/20">
              <CardContent className="p-4 space-y-3">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold">Viviane Dupond</h3>
                  <p className="text-sm text-muted-foreground">Cadre Entreprise</p>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span>🎂</span>
                    <span>41 ans</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>👨‍👩‍👧‍👦</span>
                    <span>Mariée, 2 enfants</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>📍</span>
                    <span>Lasseube (64)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>🏡</span>
                    <span>+ résidence Biarritz</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-3">
              <Card className="bg-card">
                <CardContent className="p-3 text-center">
                  <div className="text-2xl font-bold text-primary">22</div>
                  <div className="text-xs text-muted-foreground">Ancienneté</div>
                </CardContent>
              </Card>
              <Card className="bg-card">
                <CardContent className="p-3 text-center">
                  <div className="text-2xl font-bold text-primary">3</div>
                  <div className="text-xs text-muted-foreground">Score fidélité</div>
                </CardContent>
              </Card>
              <Card className="bg-card">
                <CardContent className="p-3 text-center">
                  <div className="text-2xl font-bold text-success">0</div>
                  <div className="text-xs text-muted-foreground">Incidents</div>
                </CardContent>
              </Card>
            </div>

            {/* KYC Alert */}
            <Card className="bg-destructive/10 border-destructive/20">
              <CardContent className="p-3">
                <div className="flex items-start gap-2 text-sm">
                  <AlertCircle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="font-medium text-destructive">⚠️ Complétude KYC : 50%</div>
                    <div className="text-muted-foreground text-xs mt-1">
                      📋 Pièces d'identité obligatoires à collecter
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contracts Section */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm flex items-center gap-2">
                  <FileText className="h-4 w-4 text-primary" />
                  📄 Contrats (4)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="p-3 bg-muted/50 rounded-lg">
                  <div className="font-medium mb-1 flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Home className="h-4 w-4" />
                      🏠 Habitation
                    </span>
                    <Badge variant="secondary">Actif</Badge>
                  </div>
                  <div className="text-muted-foreground text-xs space-y-0.5 mt-2">
                    <div>Résidence principale - Lasseube</div>
                    <div>+ résidence secondaire - Biarritz</div>
                  </div>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <div className="font-medium mb-1 flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4" />
                      🏦 Banque - Crédit
                    </span>
                    <Badge variant="secondary">Actif</Badge>
                  </div>
                  <div className="text-muted-foreground text-xs space-y-0.5 mt-2">
                    <div>Prêt personnel (18 mois restants)</div>
                    <div>Compte bancaire avec 2 cartes</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Last Interaction */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-accent" />
                  💬 Dernière interaction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-3 bg-muted/30 rounded-lg text-sm">
                  <div className="text-xs text-muted-foreground mb-2">📅 Mai 2025 - Appel téléphonique</div>
                  <p className="text-xs mb-2">
                    Déclaration d'accroché mineur en stationnement. Véhicule réparé via Service d'Assistance Dommage.
                  </p>
                  <div className="flex items-center gap-1 text-xs font-medium text-warning">
                    <Star className="h-3 w-3 fill-warning" />
                    Très satisfait (ICF 4,5/5)
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Button */}
            <Button className="w-full" size="lg">
              <Target className="h-4 w-4 mr-2" />
              🎯 Préparer mon RDV client
            </Button>

          </TabsContent>

          {/* Pistes Commerciales Tab */}
          <TabsContent value="pistes" className="flex-1 overflow-y-auto mt-0 p-4 space-y-4">
            {/* Life Moments */}
            <div className="space-y-2">
              <h3 className="text-xs font-semibold text-muted-foreground uppercase">Moments de vie détectés</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="gap-1">
                  <Baby className="h-3 w-3" />
                  Enfants jeunes adultes
                </Badge>
                <Badge variant="secondary" className="gap-1">
                  <HomeMove className="h-3 w-3" />
                  Rés. secondaire récente
                </Badge>
              </div>
            </div>

            {/* Junior Guidance */}
            <div className="p-3 bg-accent/5 border border-accent/20 rounded space-y-2">
              <div className="flex items-start gap-2">
                <MessageSquare className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                <div className="flex-1 space-y-1">
                  <p className="text-xs font-semibold text-accent">Questions de découverte</p>
                  <p className="text-[11px] text-muted-foreground">"Comment envisagez-vous l'avenir de vos enfants ?"</p>
                  <p className="text-[11px] text-muted-foreground">"Avez-vous pensé à sécuriser votre résidence secondaire ?"</p>
                </div>
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center justify-between pb-2 border-b">
              <h3 className="text-sm font-semibold">Recommandations (3)</h3>
              <div className="flex gap-1">
                <Button 
                  size="sm" 
                  variant={viewMode === "preparation" ? "default" : "ghost"}
                  className="h-7 text-xs"
                  onClick={() => setViewMode("preparation")}
                >
                  Préparation
                </Button>
                <Button 
                  size="sm" 
                  variant={viewMode === "live" ? "default" : "ghost"}
                  className="h-7 text-xs"
                  onClick={() => setViewMode("live")}
                >
                  Live
                </Button>
              </div>
            </div>

            {/* Recommendation 1 - Assurance Vie */}
            <div className="border rounded overflow-hidden">
              <div className="bg-success/10 p-3 border-b border-success/20">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold">Assurance Vie Épargne</span>
                    <Badge className="bg-success text-success-foreground text-[10px] h-5">Score 8/10</Badge>
                  </div>
                </div>
                <div className="flex items-start gap-2 bg-white/50 p-2 rounded">
                  <Target className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                  <p className="text-xs font-medium">
                    Cadre avec capacité d'épargne, couple avec enfants majeurs = moment idéal pour préparer transmission
                  </p>
                </div>
              </div>
              
              <div className="p-3 space-y-3">
                {viewMode === "preparation" ? (
                  <>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <DollarSign className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-semibold">Avantages fiscaux attractifs</p>
                          <p className="text-[11px] text-muted-foreground">Jusqu'à 152 500€ exonérés par bénéficiaire sur les capitaux transmis</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Growth className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-semibold">Rendement compétitif</p>
                          <p className="text-[11px] text-muted-foreground">Performance moyenne de 3,2% en 2024, supérieure au Livret A</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Lock className="h-4 w-4 text-success flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-semibold">Disponibilité des fonds</p>
                          <p className="text-[11px] text-muted-foreground">Rachat possible à tout moment sans pénalité après 8 ans</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-2 bg-muted/30 rounded">
                      <p className="text-[11px] text-muted-foreground italic">
                        💡 Tip conseiller : Insister sur la double casquette épargne + transmission
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs">
                      <DollarSign className="h-3 w-3 text-success" />
                      <span>Avantages fiscaux transmission</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <Growth className="h-3 w-3 text-success" />
                      <span>Rendement 3,2% en 2024</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <Lock className="h-3 w-3 text-success" />
                      <span>Disponible après 8 ans</span>
                    </div>
                  </div>
                )}
                
                <div className="flex gap-2 pt-2">
                  <Button size="sm" className="flex-1 h-8 text-xs">
                    <Target className="h-3 w-3 mr-1" />
                    Créer opportunité
                  </Button>
                  <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                    <Calendar className="h-3 w-3" />
                  </Button>
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                    <ThumbsDown className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Recommendation 2 - Mutuelle Santé */}
            <div className="border rounded overflow-hidden">
              <div className="bg-warning/10 p-3 border-b border-warning/20">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold">Mutuelle Santé Famille</span>
                    <Badge className="bg-warning text-warning-foreground text-[10px] h-5">Score 6/10</Badge>
                  </div>
                </div>
                <div className="flex items-start gap-2 bg-white/50 p-2 rounded">
                  <Target className="h-4 w-4 text-warning flex-shrink-0 mt-0.5" />
                  <p className="text-xs font-medium">
                    2 enfants jeunes adultes = besoin de couverture santé renforcée (études, sport)
                  </p>
                </div>
              </div>
              
              <div className="p-3 space-y-3">
                {viewMode === "preparation" ? (
                  <>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <Shield className="h-4 w-4 text-warning flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-semibold">Protection optimale jeunes adultes</p>
                          <p className="text-[11px] text-muted-foreground">Couverture optique, dentaire et hospitalisation renforcée</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <DollarSign className="h-4 w-4 text-warning flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-semibold">Tarif famille avantageux</p>
                          <p className="text-[11px] text-muted-foreground">Réduction de 15% pour 2 enfants rattachés</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-warning flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-semibold">Services inclus</p>
                          <p className="text-[11px] text-muted-foreground">Téléconsultation 24/7 et tiers payant généralisé</p>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs">
                      <Shield className="h-3 w-3 text-warning" />
                      <span>Protection jeunes adultes</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <DollarSign className="h-3 w-3 text-warning" />
                      <span>-15% tarif famille</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <CheckCircle2 className="h-3 w-3 text-warning" />
                      <span>Téléconsultation incluse</span>
                    </div>
                  </div>
                )}
                
                <div className="flex gap-2 pt-2">
                  <Button size="sm" className="flex-1 h-8 text-xs">
                    <Target className="h-3 w-3 mr-1" />
                    Créer opportunité
                  </Button>
                  <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                    <Calendar className="h-3 w-3" />
                  </Button>
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                    <ThumbsDown className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Recommendation 3 - Habitation Secondaire */}
            <div className="border rounded overflow-hidden">
              <div className="bg-primary/10 p-3 border-b border-primary/20">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold">Assurance Habitation Secondaire</span>
                    <Badge className="bg-primary text-primary-foreground text-[10px] h-5">Score 7/10</Badge>
                  </div>
                </div>
                <div className="flex items-start gap-2 bg-white/50 p-2 rounded">
                  <Target className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-xs font-medium">
                    Nouvelle résidence à Biarritz = besoin de protection adaptée zone côtière
                  </p>
                </div>
              </div>
              
              <div className="p-3 space-y-3">
                {viewMode === "preparation" ? (
                  <>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <Home className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-semibold">Protection zone à risque</p>
                          <p className="text-[11px] text-muted-foreground">Couverture tempêtes, inondations et catastrophes naturelles</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Shield className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-semibold">Garanties vacances</p>
                          <p className="text-[11px] text-muted-foreground">Protection location saisonnière et vol aggravé</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <DollarSign className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-semibold">Remise multi-contrats</p>
                          <p className="text-[11px] text-muted-foreground">-20% sur ce contrat si souscription</p>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs">
                      <Home className="h-3 w-3 text-primary" />
                      <span>Protection zone côtière</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <Shield className="h-3 w-3 text-primary" />
                      <span>Garanties location saisonnière</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <DollarSign className="h-3 w-3 text-primary" />
                      <span>-20% remise multi-contrats</span>
                    </div>
                  </div>
                )}
                
                <div className="flex gap-2 pt-2">
                  <Button size="sm" className="flex-1 h-8 text-xs">
                    <Target className="h-3 w-3 mr-1" />
                    Créer opportunité
                  </Button>
                  <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                    <Calendar className="h-3 w-3" />
                  </Button>
                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                    <ThumbsDown className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Refresh Button */}
            <Button variant="outline" size="sm" className="w-full h-8 text-xs">
              <RefreshCw className="h-3 w-3 mr-1" />
              Actualiser les recommandations
            </Button>
          </TabsContent>
        </Tabs>
      </Card>
    </div>;
};