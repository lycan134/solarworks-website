import { Phone } from "lucide-react";

export default function CallButton() {
  return (
    <a
      href="tel:09991234567"
      className="fixed bottom-6 right-6 bg-green-600 text-white px-5 py-3 rounded-full shadow-xl font-semibold hover:bg-green-700 transition flex items-center gap-2"
    >
      <Phone size={20} />
      Call Us
    </a>
  );
}
