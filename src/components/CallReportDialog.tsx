import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { Badge } from "./ui/badge";
import { Sparkles, Mic, Upload, Calendar, User, Phone, FileText } from "lucide-react";

interface CallReportDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave: (interaction: { summary: string; type: string; date: string }) => void;
}

export const CallReportDialog = ({ open, onOpenChange, onSave }: CallReportDialogProps) => {
  const [selectedEmailContent, setSelectedEmailContent] = React.useState({
    documents: true,
    recommendations: true,
    recap: true
  });

  const [recommendationsText, setRecommendationsText] = React.useState("");

  const [formData, setFormData] = React.useState({
    summary: `Durée de l'appel : 00:05:36
Résumé de l'échange :
- Demande de justificatif : copie de la carte d'identité de Mme Dupond
- Mme Dupond demande à souscrire un nouveau contrat Auto, contrat en attente de signature
- Échange concernant la préparation de la retraite : Mme Dupond réfléchit concernant la proposition d'ouverture d'un plan d'épargne retraite
- Réponses à deux interrogations du client concernant son contrat d'habitation`,
    type: "phone",
    date: "2025-08-25"
  });

  const handleSave = () => {
    onSave({
      summary: formData.summary,
      type: formData.type,
      date: formData.date
    });
    onOpenChange(false);
  };


  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Sparkles className="w-5 h-5 text-[hsl(265,85%,56%)]" />
            Consigner un échange - CR automatique IA
          </DialogTitle>
          <DialogDescription className="sr-only">
            Formulaire de consignation d'échange avec transcription automatique par IA
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* AI Transcription Section */}
          <div className="rounded-lg border border-[hsl(265,85%,56%)]/20 bg-[hsl(265,85%,56%)]/5 p-4">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-[hsl(265,85%,56%)]" />
              <span className="font-semibold text-sm">Transcription automatique IA</span>
              <Badge variant="secondary" className="ml-auto">Généré</Badge>
            </div>
            <Textarea 
              value={formData.summary}
              onChange={(e) => setFormData({...formData, summary: e.target.value})}
              className="min-h-[120px] text-sm bg-background"
            />
            <div className="flex gap-2 mt-3">
              <Button variant="outline" size="sm" className="gap-2">
                <Mic className="w-3 h-3" />
                Enregistrer
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Upload className="w-3 h-3" />
                Importer note
              </Button>
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="object" className="flex items-center gap-1">
                <FileText className="w-3 h-3" />
                Objet
              </Label>
              <Input id="object" defaultValue="Échange" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="assignedTo" className="flex items-center gap-1">
                <User className="w-3 h-3" />
                Attribué à
              </Label>
              <Input id="assignedTo" defaultValue="Claire JAMET" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="type" className="flex items-center gap-1">
                <Phone className="w-3 h-3" />
                Type
              </Label>
              <Select value={formData.type} onValueChange={(value) => setFormData({...formData, type: value})}>
                <SelectTrigger id="type">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="phone">Téléphone</SelectItem>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="meeting">Rendez-vous</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="client" className="flex items-center gap-1">
                <User className="w-3 h-3" />
                Client
              </Label>
              <Input id="client" defaultValue="Sylviane DUPOND" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="direction">Direction</Label>
              <Select defaultValue="inbound">
                <SelectTrigger id="direction">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="inbound">Entrant</SelectItem>
                  <SelectItem value="outbound">Sortant</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="exchangeDate" className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                Date de l'échange
              </Label>
              <Input 
                id="exchangeDate" 
                type="date" 
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
              />
            </div>
          </div>

          {/* Email Content Selection */}
          <div className="space-y-3">
            <Label className="text-base font-semibold">Éléments à inclure dans l'email client</Label>
            <div className="space-y-2 p-4 rounded-lg bg-[hsl(178,79%,41%)]/20">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="documents" 
                  checked={selectedEmailContent.documents}
                  onCheckedChange={(checked) => 
                    setSelectedEmailContent(prev => ({ ...prev, documents: checked as boolean }))
                  }
                />
                <label htmlFor="documents" className="text-sm font-medium cursor-pointer">
                  Documents requis
                </label>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="recommendations" 
                    checked={selectedEmailContent.recommendations}
                    onCheckedChange={(checked) => 
                      setSelectedEmailContent(prev => ({ ...prev, recommendations: checked as boolean }))
                    }
                  />
                  <label htmlFor="recommendations" className="text-sm font-medium cursor-pointer">
                    Recommandations personnalisées
                  </label>
                </div>
                {selectedEmailContent.recommendations && (
                  <Textarea
                    placeholder="Saisissez vos recommandations personnalisées..."
                    value={recommendationsText}
                    onChange={(e) => setRecommendationsText(e.target.value)}
                    className="mt-2 min-h-[80px]"
                  />
                )}
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="recap" 
                  checked={selectedEmailContent.recap}
                  onCheckedChange={(checked) => 
                    setSelectedEmailContent(prev => ({ ...prev, recap: checked as boolean }))
                  }
                />
                <label htmlFor="recap" className="text-sm font-medium cursor-pointer">
                  Récapitulatif de l'échange
                </label>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter className="gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Annuler
          </Button>
          <Button variant="secondary" onClick={handleSave}>
            Enregistrer
          </Button>
          <Button className="gap-2 bg-[hsl(265,85%,56%)] hover:bg-[hsl(265,85%,66%)]" onClick={handleSave}>
            <Sparkles className="w-4 h-4" />
            Envoyer au client
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
