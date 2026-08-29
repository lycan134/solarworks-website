"use client";

import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

type Message = {
  role: "user" | "assistant";
  text: string;
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Hi! I'm the Solarworks AI Assistant. I can answer questions about solar energy, our systems, services, and getting a quote. How can I help?",
    },
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const quickReplies = [
    "How does solar work?",
    "What's the difference between grid-tie and hybrid?",
    "How much does solar cost?",
    "I want a free quote",
  ];

  const handleSendMessage = async (messageText?: string) => {
    const text = (messageText ?? input).trim();

    if (!text || isLoading) {
      return;
    }

    setInput("");

    const userMessage: Message = {
      role: "user",
      text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Send message to our Next.js API route
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
        }),
      });

      // Read response as text first so we can see
      // the actual server response if something goes wrong.
      const rawResponse = await response.text();

      console.log("API status:", response.status);
      console.log("API response:", rawResponse);

      let data;

      try {
        data = JSON.parse(rawResponse);
      } catch {
        throw new Error(
          `The API returned invalid JSON: ${rawResponse}`
        );
      }

      // Handle API errors
      if (!response.ok) {
        throw new Error(
          data.error ||
            `API request failed with status ${response.status}`
        );
      }

      // Our API route should return:
      // { reply: "Gemini response..." }
      if (!data.reply) {
        throw new Error(
          "The API response did not contain a reply."
        );
      }

      // Add Gemini's response to the chat
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: data.reply,
        },
      ]);
    } catch (error) {
      console.error("Chat error:", error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text:
            "Sorry, I'm having trouble connecting to the Solarworks AI service right now. Please try again in a moment or contact our team directly.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* =====================================================
          FLOATING CHAT BUTTON
      ===================================================== */}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="
          fixed
          bottom-6
          right-4
          z-50
          flex
          items-center
          gap-2
          rounded-full
          bg-green-600
          px-4
          py-3
          font-semibold
          text-white
          shadow-xl
          transition
          hover:bg-green-700
          sm:right-6
          sm:px-5
        "
      >
        {open ? (
          <X size={20} />
        ) : (
          <MessageCircle size={20} />
        )}

        <span className="hidden sm:inline">
          {open ? "Close" : "Chat AI"}
        </span>
      </button>

      {/* =====================================================
          CHAT WINDOW
      ===================================================== */}

      {open && (
        <div
          className="
            fixed
            inset-x-3
            bottom-20
            z-50
            flex
            h-[70vh]
            max-h-[650px]
            flex-col
            overflow-hidden
            rounded-2xl
            border
            border-slate-200
            bg-white
            shadow-2xl

            sm:inset-x-auto
            sm:bottom-20
            sm:right-6
            sm:h-[600px]
            sm:w-[400px]
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
              from-green-600
              to-green-500
              px-4
              py-4
              text-white
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-white/15
                "
              >
                <MessageCircle size={21} />
              </div>

              <div>
                <h2 className="font-bold">
                  Solarworks AI Assistant
                </h2>

                <p className="text-xs text-green-100">
                  Ask us about solar energy
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="
                rounded-full
                p-2
                transition
                hover:bg-white/15
              "
            >
              <X size={20} />
            </button>
          </div>

          {/* =================================================
              MESSAGES
          ================================================= */}

          <div
            className="
              min-h-0
              flex-1
              space-y-4
              overflow-y-auto
              bg-slate-50
              p-4
            "
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    message.role === "user"
                      ? "rounded-br-sm bg-green-600 text-white"
                      : "rounded-bl-sm border border-slate-200 bg-white text-slate-700 shadow-sm"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {/* =================================================
                LOADING INDICATOR
            ================================================= */}

            {isLoading && (
              <div className="flex justify-start">
                <div
                  className="
                    rounded-2xl
                    rounded-bl-sm
                    border
                    border-slate-200
                    bg-white
                    px-4
                    py-3
                    shadow-sm
                  "
                >
                  <div className="flex items-center gap-1">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400" />

                    <span
                      className="h-2 w-2 animate-bounce rounded-full bg-slate-400"
                      style={{
                        animationDelay: "150ms",
                      }}
                    />

                    <span
                      className="h-2 w-2 animate-bounce rounded-full bg-slate-400"
                      style={{
                        animationDelay: "300ms",
                      }}
                    />
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
                border-slate-200
                bg-white
                px-3
                py-3
              "
            >
              <p className="mb-2 text-xs font-medium text-slate-500">
                Quick questions
              </p>

              <div className="flex gap-2 overflow-x-auto pb-1">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    type="button"
                    onClick={() =>
                      handleSendMessage(reply)
                    }
                    className="
                      shrink-0
                      rounded-full
                      border
                      border-slate-200
                      bg-slate-50
                      px-3
                      py-2
                      text-xs
                      font-medium
                      text-slate-700
                      transition
                      hover:border-green-300
                      hover:bg-green-50
                      hover:text-green-700
                    "
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* =================================================
              INPUT
          ================================================= */}

          <div
            className="
              shrink-0
              border-t
              border-slate-200
              bg-white
              p-3
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
                placeholder="Ask about solar..."
                disabled={isLoading}
                className="
                  min-w-0
                  flex-1
                  rounded-xl
                  border
                  border-slate-300
                  px-4
                  py-3
                  text-sm
                  text-slate-800
                  outline-none
                  transition
                  placeholder:text-slate-400
                  focus:border-green-500
                  focus:ring-2
                  focus:ring-green-100
                  disabled:bg-slate-100
                "
              />

              <button
                type="button"
                onClick={() => handleSendMessage()}
                disabled={
                  isLoading || !input.trim()
                }
                aria-label="Send message"
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-green-600
                  text-white
                  transition
                  hover:bg-green-700
                  disabled:cursor-not-allowed
                  disabled:bg-slate-300
                "
              >
                <Send size={18} />
              </button>
            </div>

            <p
              className="
                mt-2
                text-center
                text-[10px]
                text-slate-400
              "
            >
              Solarworks AI Assistant
            </p>
          </div>
        </div>
      )}
    </>
  );
}