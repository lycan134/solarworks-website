"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState<
    { type: "user" | "assistant"; text: string }[]
  >([
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

  const getSampleResponses: { [key: string]: string } = {
    "how does solar work":
      "Solar panels convert sunlight into electricity through the photovoltaic effect. The inverter converts DC power to AC power for your home. In grid-tie systems, excess energy can be sent back to the grid. In off-grid systems, energy is stored in batteries for later use.",

    "what's the difference":
      "Grid-Tie: Connected to the utility grid and designed to reduce electricity bills. Off-Grid: Completely independent and ideal for remote areas. Hybrid: Combines grid connection with battery backup for greater energy security. Each system is suited to different needs and budgets.",

    "what info do you need":
      "For a quote, we typically need your current electricity bill, property location, roof condition, available roof space, and your energy goals. This helps our team design a system suited to your property. Would you like to request a professional consultation?",

    "talk to a specialist":
      "Great! You can reach our team at 0999-123-4567 or email solarbusiness@email.com. You can also click 'Get a Free Quote' on our website to request a consultation directly. Our specialists will respond within 24 hours!",
  };

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();

    setInput("");

    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        text: userMessage,
      },
    ]);

    setIsLoading(true);

    setTimeout(() => {
      const lowerInput = userMessage.toLowerCase();

      let response =
        "Thanks for your question! For more detailed information, please reach out to our team at 0999-123-4567 or use our quote form. Is there anything else I can help with?";

      for (const [key, value] of Object.entries(getSampleResponses)) {
        if (lowerInput.includes(key)) {
          response = value;
          break;
        }
      }

      setMessages((prev) => [
        ...prev,
        {
          type: "assistant",
          text: response,
        },
      ]);

      setIsLoading(false);
    }, 500);
  };

  const handleQuickReply = (reply: string) => {
    setInput(reply);
  };

  return (
    <>
      {/* =====================================================
          FLOATING CHAT BUTTON
      ===================================================== */}

      <button
        onClick={() => setOpen(!open)}
        className="
          fixed
          bottom-5
          right-4
          sm:bottom-6
          sm:right-6
          z-40
          flex
          items-center
          justify-center
          gap-2
          rounded-full
          bg-green-500
          px-4
          py-3
          sm:px-5
          sm:py-3
          text-sm
          sm:text-base
          font-semibold
          text-white
          shadow-xl
          transition-all
          duration-200
          hover:bg-green-600
          hover:scale-105
        "
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {open ? <X size={20} /> : <MessageCircle size={20} />}

        <span>{open ? "Close" : "Chat AI"}</span>
      </button>

      {/* =====================================================
          CHAT PANEL
      ===================================================== */}

      {open && (
        <div
          className="
            fixed
            z-50

            /* Mobile */
            left-4
            right-4
            bottom-4
            w-auto
            h-[calc(100vh-6rem)]
            max-h-[700px]

            /* Desktop */
            sm:left-auto
            sm:right-6
            sm:bottom-6
            sm:w-96
            sm:h-[500px]

            flex
            flex-col
            overflow-hidden
            rounded-2xl
            border
            border-gray-200
            bg-white
            shadow-2xl
          "
        >
          {/* =================================================
              HEADER
          ================================================= */}

          <div
            className="
              flex
              shrink-0
              items-center
              justify-between
              bg-gradient-to-r
              from-green-500
              to-green-600
              px-4
              py-3
              sm:p-4
              text-white
            "
          >
            <div className="min-w-0">
              <h2 className="truncate text-base sm:text-lg font-bold">
                Solarworks AI Assistant
              </h2>

              <p className="text-xs text-green-100">
                Always here to help
              </p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="
                ml-3
                shrink-0
                rounded-full
                p-2
                text-white
                transition-colors
                hover:bg-green-700
              "
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* =================================================
              MESSAGES AREA
          ================================================= */}

          <div
            className="
              min-h-0
              flex-1
              overflow-y-auto
              overflow-x-hidden
              bg-gray-50
              p-3
              sm:p-4
              space-y-3
              sm:space-y-4
            "
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.type === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`
                    max-w-[85%]
                    sm:max-w-xs
                    break-words
                    px-3
                    py-2.5
                    sm:px-4
                    sm:py-3
                    rounded-lg
                    ${
                      msg.type === "user"
                        ? "rounded-br-none bg-green-500 text-white"
                        : "rounded-bl-none border border-gray-200 bg-white text-gray-800"
                    }
                  `}
                >
                  <p className="text-sm leading-relaxed">
                    {msg.text}
                  </p>
                </div>
              </div>
            ))}

            {/* Loading indicator */}

            {isLoading && (
              <div className="flex justify-start">
                <div
                  className="
                    rounded-lg
                    rounded-bl-none
                    border
                    border-gray-200
                    bg-white
                    px-4
                    py-3
                  "
                >
                  <div className="flex gap-2">
                    <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400" />

                    <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:100ms]" />

                    <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400 [animation-delay:200ms]" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* =================================================
              QUICK REPLIES
          ================================================= */}

          {messages.length === 1 && !isLoading && (
            <div
              className="
                shrink-0
                border-t
                border-gray-200
                bg-white
                px-3
                py-2
                sm:px-4
              "
            >
              <p className="mb-2 text-xs text-gray-500">
                Quick options:
              </p>

              <div className="flex max-h-24 flex-wrap gap-2 overflow-y-auto">
                {quickReplies.map((reply, i) => (
                  <button
                    key={i}
                    onClick={() => handleQuickReply(reply)}
                    className="
                      rounded-full
                      bg-gray-100
                      px-3
                      py-1.5
                      text-xs
                      text-gray-700
                      transition-colors
                      hover:bg-gray-200
                    "
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* =================================================
              INPUT AREA
          ================================================= */}

          <div
            className="
              shrink-0
              border-t
              border-gray-200
              bg-white
              p-3
              sm:p-4
            "
          >
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSendMessage();
                  }
                }}
                placeholder="Type your question..."
                className="
                  min-w-0
                  flex-1
                  rounded-lg
                  border
                  border-gray-300
                  px-3
                  py-2.5
                  text-sm
                  text-gray-900
                  outline-none
                  transition
                  placeholder:text-gray-400
                  focus:border-green-500
                  focus:ring-1
                  focus:ring-green-300
                "
                disabled={isLoading}
              />

              <button
                onClick={handleSendMessage}
                disabled={isLoading || !input.trim()}
                className="
                  shrink-0
                  rounded-lg
                  bg-green-500
                  px-3
                  py-2.5
                  text-sm
                  font-semibold
                  text-white
                  transition-colors
                  hover:bg-green-600
                  disabled:cursor-not-allowed
                  disabled:bg-gray-300
                "
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}