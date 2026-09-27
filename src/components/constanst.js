const WHATSAPP_NUMBER = '6285789021996' 

export function buildWhatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const WHATSAPP_LINK_GENERAL = buildWhatsAppLink(
  'Halo Webvia, saya ingin konsultasi website untuk bisnis saya.'
)

export const WHATSAPP_LINK_PRICING = buildWhatsAppLink(
  'Halo Webvia, saya ingin tanya soal paket harga.'
)