import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const WhatsAppChatButton = () => {
  return (
    <a
      href="https://wa.me/919847487297?text=Hi%21%20%F0%9F%92%96%20I%20want%20to%20know%20about%20Mits"
      target="_blank"
      rel="noreferrer noopener"
      className="fixed bottom-10 right-10 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#25d366]"
    >
      <div className="absolute z-10 top-0 left-0 w-full h-full rounded-full bg-[#25d366] animate-ping" />
      <div className="relative z-20 text-white text-2xl">
        <FontAwesomeIcon icon={faWhatsapp} />
      </div>
    </a>
  );
};

export default WhatsAppChatButton;