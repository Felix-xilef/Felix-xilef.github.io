export function usePhoneWithoutSpecialCharacters(phoneNumber: string) {
  return phoneNumber.replace(
    new RegExp(
      /\D/,
      'g',
    ),
    '',
  );
}
