import { FaWhatsapp } from "react-icons/fa";

const whatsappNumber = "1234567890";
const message = encodeURIComponent("Hola, quiero más información sobre...");

export default function WhatsappButton() {
  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-700 hover:bg-white/90 text-white hover:text-green-700 rounded-full p-4 shadow-lg flex items-center justify-center z-50"
      aria-label="Enviar mensaje por WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
