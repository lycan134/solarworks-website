"use client";
import { useState } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-24 right-6 bg-blue-600 text-white px-4 py-3 rounded-full shadow-xl"
      >
        🤖 Chat AI
      </button>

      {/* Chat Panel */}
      {open && (
        <div className="fixed bottom-6 right-6 w-80 bg-white shadow-xl rounded-xl p-4">
          <button
            className="text-right w-full text-gray-500"
            onClick={() => setOpen(false)}
          >
            ✖
          </button>

          <h2 className="text-lg font-bold mb-2">AI Solar Assistant</h2>

          <input
            type="text"
            className="w-full border p-2 rounded"
            placeholder="Ask something…"
          />
        </div>
      )}
    </>
  );
}
