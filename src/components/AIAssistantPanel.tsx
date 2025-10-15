import { useState } from "react";
import { Sparkles, ChevronDown, ChevronUp, RefreshCw, User, Home, CreditCard, AlertCircle, TrendingUp, MessageSquare, Clock, Star, DollarSign, FileWarning, CheckCircle2, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
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
  return <div id="col-right" className="sticky top-4 h-[calc(100vh-2rem)] flex flex-col">
      <Card id="ai-panel" className="shadow-lg flex flex-col h-full overflow-hidden bg-card">
        <CardHeader className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground flex-shrink-0 py-3 px-4">
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              <span className="text-base">Synthèse fiche client</span>
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

        <div className="flex-1 overflow-y-auto">
          {/* Foyer */}
          <AccordionSection id="ai-household" dataSlot="household" title="Foyer" icon={<Home className="h-4 w-4 text-primary" />} defaultOpen={true}>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-muted/30 rounded">
                <span className="text-xs">Résidence principale</span>
                <span className="text-xs font-medium">Lasseube (64)</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-muted/30 rounded">
                <span className="text-xs">Résidence secondaire</span>
                <span className="text-xs font-medium">Biarritz (64)</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-muted/30 rounded">
                <span className="text-xs">Situation familiale</span>
                <span className="text-xs font-medium">Mariée, 2 enfants</span>
              </div>
              <div className="mt-3 p-3 bg-primary/5 border border-primary/20 rounded">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold">Contrats actifs</span>
                  <Badge variant="outline" className="text-xs">5</Badge>
                </div>
                <div className="space-y-1 text-xs">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-3 w-3 text-success" />
                    <span>1 Auto • 2 Habitation • 2 Banque</span>
                  </div>
                </div>
              </div>
            </div>
          </AccordionSection>

          {/* Profil */}
          <AccordionSection id="ai-profile" dataSlot="profile" title="Profil" icon={<User className="h-4 w-4 text-accent" />}>
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2 bg-success/5 border border-success/20 rounded">
                  <div className="text-[10px] text-muted-foreground uppercase">Fidélité</div>
                  <div className="text-xs font-semibold mt-0.5">Très fidèle</div>
                </div>
                <div className="p-2 bg-success/5 border border-success/20 rounded">
                  <div className="text-[10px] text-muted-foreground uppercase">Incidents</div>
                  <div className="text-xs font-semibold mt-0.5 flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3 text-success" />
                    Aucun
                  </div>
                </div>
              </div>
              <div className="p-3 bg-accent/5 border border-accent/20 rounded">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium">Potentiel commercial</span>
                  <Badge className="bg-accent text-accent-foreground">Élevé</Badge>
                </div>
              </div>
            </div>
          </AccordionSection>

          {/* Dernières interactions */}
          <AccordionSection id="ai-last-interaction" dataSlot="last-interaction" title="Dernières interactions" icon={<MessageSquare className="h-4 w-4 text-sf-teal" />}>
            <div className="space-y-2">
              <div className="p-2 bg-muted/30 rounded space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium">Sinistre Auto</span>
                  <Badge variant="outline" className="text-[10px] h-4">Mai 2025</Badge>
                </div>
                <p className="text-[11px] text-muted-foreground">Accrochage mineur, réparé via SAD</p>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="h-3 w-3 fill-warning text-warning" />
                  <span className="text-[10px] font-medium">Satisfaction: 4,5/5</span>
                </div>
              </div>
            </div>
          </AccordionSection>

          {/* KYC */}
          <AccordionSection id="ai-kyc" dataSlot="kyc" title="KYC / Documents" icon={<FileWarning className="h-4 w-4 text-destructive" />} defaultOpen={true}>
            <div className="space-y-3">
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-muted-foreground">Complétude</span>
                  <span className="font-semibold">50%</span>
                </div>
                <Progress value={50} className="h-1.5" />
              </div>
              <div className="p-3 bg-destructive/10 border border-destructive/30 rounded space-y-2">
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <Badge variant="destructive" className="mb-2 h-5 text-[10px]">
                      Document manquant
                    </Badge>
                    <p className="text-xs font-medium">Pièce d'identité obligatoire</p>
                  </div>
                </div>
                <Button id="btn-kyc-request" size="sm" variant="destructive" className="w-full h-7 text-xs">
                  Demander le document
                </Button>
              </div>
            </div>
          </AccordionSection>

          {/* Opportunités */}
          <AccordionSection id="ai-next-best-actions" dataSlot="next-best-actions" title="Opportunités" icon={<TrendingUp className="h-4 w-4 text-success" />}>
            <div className="space-y-2">
              <div className="p-2.5 bg-success/5 border border-success/20 rounded space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold">Assurance vie épargne</span>
                  <Badge className="bg-success text-success-foreground text-[10px] h-4 px-1.5">8/10</Badge>
                </div>
                <p className="text-[11px] text-muted-foreground">Capacité d'épargne identifiée</p>
                <div className="flex items-center gap-1">
                  <DollarSign className="h-3 w-3 text-success" />
                  <span className="text-[10px] font-medium text-success">Rentabilité élevée</span>
                </div>
              </div>
              <div className="p-2.5 bg-warning/5 border border-warning/20 rounded space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold">Mutuelle santé famille</span>
                  <Badge className="bg-warning text-warning-foreground text-[10px] h-4 px-1.5">6/10</Badge>
                </div>
                <p className="text-[11px] text-muted-foreground">2 enfants jeunes adultes</p>
              </div>
              <Button id="btn-nba-generate" variant="outline" size="sm" className="w-full h-7 text-xs mt-2">
                <RefreshCw className="h-3 w-3 mr-1" />
                Actualiser les pistes
              </Button>
            </div>
          </AccordionSection>
        </div>

      </Card>
    </div>;
};