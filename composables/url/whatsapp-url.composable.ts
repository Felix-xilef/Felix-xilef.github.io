import { usePhoneWithoutSpecialCharacters } from "../string/phone-without-special-characters.composable";

export function useWhatsappUrl() {
  return `https://wa.me/${usePhoneWithoutSpecialCharacters(import.meta.env.VITE_PHONE)}`;
}
