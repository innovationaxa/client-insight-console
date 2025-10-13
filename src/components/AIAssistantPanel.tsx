import { useState } from "react";
import { Sparkles, ChevronDown, ChevronUp, RefreshCw, Copy, Send, User, Home, CreditCard, AlertCircle, TrendingUp, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface AccordionSectionProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  dataSlot?: string;
}

const AccordionSection = ({ id, title, icon, children, defaultOpen = false, dataSlot }: AccordionSectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="border-b last:border-0">
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
    </Collapsible>
  );
};

export const AIAssistantPanel = () => {
  const [prompt, setPrompt] = useState("");

  return (
    <div id="col-right" className="sticky top-4 h-[calc(100vh-2rem)] flex flex-col">
      <Card id="ai-panel" className="shadow-lg flex flex-col h-full overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground rounded-t-lg flex-shrink-0">
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              Mon Assistant IA
            </div>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/40">
              connecté
            </Badge>
          </CardTitle>
        </CardHeader>

        <div className="flex-1 overflow-y-auto">
          {/* Synthèse fiche client */}
          <AccordionSection
            id="ai-summary"
            dataSlot="summary"
            title="Synthèse fiche client"
            icon={<User className="h-4 w-4 text-primary" />}
            defaultOpen={true}
          >
            <div className="space-y-2">
              <p>Sylviane Dupond a <strong>41 ans</strong>, elle est <strong>cadre en entreprise</strong> et a sa résidence principale à Lasseube (64), ainsi qu'une résidence secondaire à Biarritz (64). Elle est mariée et a 2 enfants de 20 et 19 ans.</p>
              <Button 
                id="btn-summary-refresh" 
                variant="outline" 
                size="sm" 
                className="w-full gap-2"
              >
                <RefreshCw className="h-3 w-3" />
                Rafraîchir
              </Button>
              <div id="summary-confidence" className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Confiance du modèle</span>
                  <span className="font-medium">87%</span>
                </div>
                <Progress value={87} className="h-2" />
              </div>
            </div>
          </AccordionSection>

          {/* Situation du foyer */}
          <AccordionSection
            id="ai-household"
            dataSlot="household"
            title="Situation du foyer"
            icon={<Home className="h-4 w-4 text-sf-teal" />}
          >
            <ul className="space-y-2 list-disc list-inside marker:text-primary">
              <li><strong>1 contrat Auto</strong> : Renault Captur (2028), usage personnel, assuré tous risques</li>
              <li><strong>2 contrats Habitation</strong> : résidence principale à Lasseube, résidence secondaire à Biarritz (appartement en copropriété)</li>
              <li><strong>2 contrats Banque – Crédit</strong> :
                <ul className="ml-6 mt-1 space-y-1 list-circle">
                  <li>Prêt personnel (reste 18 mois)</li>
                  <li>Compte bancaire avec 2 cartes</li>
                </ul>
              </li>
            </ul>
          </AccordionSection>

          {/* Profil client */}
          <AccordionSection
            id="ai-profile"
            dataSlot="profile"
            title="Profil client"
            icon={<User className="h-4 w-4 text-accent" />}
          >
            <ul className="space-y-1">
              <li className="flex justify-between">
                <span className="text-muted-foreground">Fidélité</span>
                <span className="font-medium">Très fidèle, 22 ans d'ancienneté</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Incidents</span>
                <span className="font-medium">Aucun incident de paiement</span>
              </li>
              <li className="flex justify-between">
                <span className="text-muted-foreground">Scoring</span>
                <Badge variant="secondary">3</Badge>
              </li>
            </ul>
          </AccordionSection>

          {/* Dernière interaction notable */}
          <AccordionSection
            id="ai-last-interaction"
            dataSlot="last-interaction"
            title="Dernière interaction notable"
            icon={<MessageSquare className="h-4 w-4 text-warning" />}
          >
            <div className="space-y-2">
              <p><strong>Sinistre Auto</strong> survenu en mai 2025 (accrochage mineur en stationnement) dont la gestion est terminée, véhicule réparé via un SAD</p>
              <p className="text-muted-foreground">Client très satisfait (ICF 4,5/5)</p>
            </div>
          </AccordionSection>

          {/* Complétude KYC */}
          <AccordionSection
            id="ai-kyc"
            dataSlot="kyc"
            title="Complétude KYC"
            icon={<CreditCard className="h-4 w-4 text-success" />}
          >
            <div className="space-y-3">
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Progression</span>
                  <span className="font-medium">50%</span>
                </div>
                <Progress value={50} className="h-2" />
              </div>
              <div className="flex items-start gap-2 p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                <AlertCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-medium text-destructive">Pièce d'identité obligatoire à collecter</p>
                  <Button
                    id="btn-kyc-request"
                    size="sm"
                    variant="destructive"
                    className="w-full mt-2"
                  >
                    Demander la pièce
                  </Button>
                </div>
              </div>
            </div>
          </AccordionSection>

          {/* Pistes commerciales */}
          <AccordionSection
            id="ai-next-best-actions"
            dataSlot="next-best-actions"
            title="Pistes commerciales"
            icon={<TrendingUp className="h-4 w-4 text-success" />}
          >
            <div className="space-y-3">
              <div className="p-3 bg-muted/50 rounded-lg space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Assurance vie épargne</span>
                  <Badge variant="secondary" className="bg-success/20 text-success border-success/40">
                    Score: 8/10
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">Profil stable avec capacité d'épargne</p>
              </div>
              <div className="p-3 bg-muted/50 rounded-lg space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Mutuelle santé famille</span>
                  <Badge variant="secondary" className="bg-warning/20 text-warning border-warning/40">
                    Score: 6/10
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">2 enfants jeunes adultes à couvrir</p>
              </div>
              <Button 
                id="btn-nba-generate" 
                variant="outline" 
                size="sm" 
                className="w-full"
              >
                Générer d'autres pistes
              </Button>
            </div>
          </AccordionSection>
        </div>

        {/* AI Console */}
        <CardContent id="ai-console" className="border-t p-4 space-y-3 flex-shrink-0">
          <Textarea
            placeholder="Demandez à l'IA d'analyser, générer ou expliquer..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="min-h-[80px] resize-none"
          />
          <div className="flex gap-2">
            <Button size="sm" className="flex-1 gap-2">
              <Send className="h-3 w-3" />
              Générer
            </Button>
            <Button size="sm" variant="outline" className="gap-2">
              Expliquer
            </Button>
            <Button size="sm" variant="outline">
              <Copy className="h-3 w-3" />
            </Button>
          </div>
          
          {/* History */}
          <div id="ai-history" className="pt-2 border-t">
            <p className="text-xs text-muted-foreground mb-2">Historique récent</p>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Synthèse générée</span>
                <span className="text-muted-foreground">Il y a 5 min</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
