import { Phone } from "lucide-react";

export default function CallButton() {
  return (
    <a
      href="tel:09991234567"
      aria-label="Call Solarworks"
      className="
        fixed bottom-6 right-6 z-40
        flex items-center gap-2
        rounded-full
        bg-green-600 px-4 py-3
        text-sm font-semibold text-white
        shadow-lg
        transition-all duration-200
        hover:bg-green-700 hover:shadow-xl
        sm:px-5 sm:py-3
      "
    >
      <Phone size={18} />
      <span>Call Us</span>
    </a>
  );
}