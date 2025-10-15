import { useState, useRef, useEffect } from "react";
import { X, Maximize2, Minimize2, Send, Paperclip, Mic } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface ChatbotDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ChatbotDialog = ({ open, onOpenChange }: ChatbotDialogProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Bonjour, Comment puis-je vous aider ?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue,
      timestamp: new Date()
    };

    setMessages([...messages, newMessage]);
    setInputValue("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Je suis votre assistant IA. Comment puis-je vous aider avec ce client ?",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md p-0 gap-0 h-[500px] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-3 border-b bg-gradient-to-r from-accent to-accent/80">
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6 bg-white/20">
              <span className="text-xs text-white">IA</span>
            </Avatar>
            <span className="font-semibold text-white text-sm">Dialogue IA</span>
          </div>
          <div className="flex items-center gap-1">
            <Button
              size="icon"
              variant="ghost"
              className="h-7 w-7 text-white hover:bg-white/20"
              onClick={() => onOpenChange(false)}
            >
              <Minimize2 className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="h-7 w-7 text-white hover:bg-white/20"
            >
              <Maximize2 className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="h-7 w-7 text-white hover:bg-white/20"
              onClick={() => onOpenChange(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4" ref={scrollRef}>
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2 ${message.role === "user" ? "flex-row-reverse" : ""}`}
              >
                <Avatar className={`h-8 w-8 flex-shrink-0 ${message.role === "assistant" ? "bg-accent" : "bg-primary"}`}>
                  <span className="text-xs text-white">
                    {message.role === "assistant" ? "IA" : "Y"}
                  </span>
                </Avatar>
                <div className={`flex flex-col ${message.role === "user" ? "items-end" : ""}`}>
                  <span className="text-xs font-semibold mb-1">
                    {message.role === "assistant" ? "Assistant IA" : "You"}
                  </span>
                  <div
                    className={`px-3 py-2 rounded-lg text-sm max-w-[280px] ${
                      message.role === "assistant"
                        ? "bg-muted"
                        : "bg-primary text-primary-foreground"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Input */}
        <div className="p-3 border-t bg-background">
          <div className="flex items-center gap-2">
            <Button size="icon" variant="ghost" className="h-9 w-9 flex-shrink-0">
              <Paperclip className="h-4 w-4" />
            </Button>
            <Input
              placeholder="Poser une question ..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              className="flex-1"
            />
            <Button size="icon" variant="ghost" className="h-9 w-9 flex-shrink-0">
              <Mic className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              className="h-9 w-9 flex-shrink-0 rounded-full"
              onClick={handleSend}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
