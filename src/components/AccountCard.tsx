import { Mail, Phone, MapPin, Calendar, Hash, FileText, MessageSquare, CalendarPlus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const AccountCard = () => {
  return (
    <Card id="card-account" className="shadow-lg">
      <CardHeader className="bg-sf-teal text-white rounded-t-lg">
        <CardTitle className="flex items-center gap-2 text-lg">
          <FileText className="h-5 w-5" />
          Compte Particulier
        </CardTitle>
        <p className="text-sm opacity-90">Client</p>
      </CardHeader>
      <CardContent className="pt-4 space-y-3">
        {/* Contact Info */}
        <div className="space-y-2 text-sm">
          <div className="flex items-start gap-2">
            <Mail className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
            <span className="break-all">sdufatklife@wanadoo.fr</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            <span>06 98 86 35 02</span>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 mt-0.5 text-muted-foreground flex-shrink-0" />
            <span>1660 CHEMIN CLERGAT<br />64290 LASSEUBE France</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground flex-shrink-0" />
            <div>
              <div>31/05/1964</div>
              <div className="text-muted-foreground">41 ans</div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Account Numbers */}
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <Hash className="h-4 w-4 text-muted-foreground" />
            <div>
              <div className="text-muted-foreground text-xs">N° foyer / N° abonné</div>
              <div className="font-mono">0033682587 / 0221765483</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Hash className="h-4 w-4 text-muted-foreground" />
            <div>
              <div className="text-muted-foreground text-xs">N° de portefeuille</div>
              <div className="font-mono">0001022144</div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Action Buttons */}
        <div className="space-y-2">
          <Button className="w-full justify-start gap-2" variant="outline">
            <MessageSquare className="h-4 w-4" />
            Consigner un échange
          </Button>
          <Button className="w-full justify-start gap-2" variant="outline">
            <CalendarPlus className="h-4 w-4" />
            Créer un RDV
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
