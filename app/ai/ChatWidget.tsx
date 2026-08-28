"use client";
import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ type: "user" | "assistant"; text: string }[]>([
    {
      type: "assistant",
      text: "Hi! I'm the Solarworks AI Assistant. I can help you with questions about solar energy, our services, system types, and more. How can I help today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const quickReplies = [
    "How does solar work?",
    "What's the difference between systems?",
    "What info do you need for a quote?",
    "Talk to a specialist",
  ];

  const getSampleResponses: {
    [key: string]: string;
  } = {
    "how does solar work":
      "Solar panels convert sunlight into electricity through the photovoltaic effect. The inverter converts DC power to AC power for your home. In grid-tie systems, excess energy goes back to the grid. In off-grid systems, energy is stored in batteries for later use.",
    "what's the difference":
      "Grid-Tie: Connected to utility grid, lowers bills, simplest setup. Off-Grid: Completely independent, best for remote areas. Hybrid: Grid connection + battery backup, combines benefits of both. Each suits different needs and budgets.",
    "what info do you need":
      "For a quote, we typically need: your current electricity bill, property location, roof condition, available roof space, and your energy goals. This helps our team design a perfect system for you. Would you like to schedule a professional consultation?",
    "talk to a specialist":
      "Great! You can reach our team at 0999-123-4567 or email solarbusiness@email.com. You can also click 'Get a Free Quote' on our website to request a consultation directly. Our specialists will respond within 24 hours!",
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput("");
    setMessages((prev) => [...prev, { type: "user", text: userMessage }]);
    setIsLoading(true);

    // Simulate a delay for assistant response
    setTimeout(() => {
      const lowerInput = userMessage.toLowerCase();
      let response =
        "Thanks for your question! For more detailed information, please reach out to our team at 0999-123-4567 or use our quote form. Is there anything else I can help with?";

      // Match user input to sample responses
      for (const [key, value] of Object.entries(getSampleResponses)) {
        if (lowerInput.includes(key)) {
          response = value;
          break;
        }
      }

      setMessages((prev) => [...prev, { type: "assistant", text: response }]);
      setIsLoading(false);
    }, 500);
  };

  const handleQuickReply = (reply: string) => {
    setInput(reply);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-24 right-6 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-xl transition-all duration-200 font-semibold flex items-center gap-2 z-40"
        aria-label="Open chat"
      >
        <MessageCircle size={20} />
        Chat AI
      </button>

      {/* Chat Panel */}
      {open && (
        <div className="fixed bottom-6 right-6 w-96 bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col h-96 z-50 border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 flex justify-between items-center">
            <div>
              <h2 className="font-bold text-lg">Solarworks AI Assistant</h2>
              <p className="text-xs text-green-100">Always here to help</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white hover:bg-green-700 p-2 rounded-full transition-colors"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-xs px-4 py-3 rounded-lg ${
                    msg.type === "user"
                      ? "bg-green-500 text-white rounded-br-none"
                      : "bg-white text-gray-800 border border-gray-200 rounded-bl-none"
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 border border-gray-200 px-4 py-3 rounded-lg rounded-bl-none">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Replies */}
          {messages.length === 1 && !isLoading && (
            <div className="px-4 py-2 bg-white border-t border-gray-200">
              <p className="text-xs text-gray-500 mb-2">Quick options:</p>
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply, i) => (
                  <button
                    key={i}
                    onClick={() => handleQuickReply(reply)}
                    className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="border-t border-gray-200 p-3 bg-white flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Type your question..."
              className="flex-1 border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-300 text-sm"
              disabled={isLoading}
            />
            <button
              onClick={handleSendMessage}
              disabled={isLoading || !input.trim()}
              className="bg-green-500 hover:bg-green-600 disabled:bg-gray-300 text-white px-4 py-2 rounded-lg transition-colors font-semibold text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
