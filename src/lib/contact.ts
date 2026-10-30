// Número con lada, sin +, espacios ni guiones. Ejemplo: "521234567890" no; en México va "52" + 10 dígitos
export const WHATSAPP_NUMBER = "523511778020";

const mensaje = "Hola, quiero automatizar una parte de mi negocio.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  mensaje
)}`;