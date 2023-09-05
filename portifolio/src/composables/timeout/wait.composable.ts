export function useWait(millis: number) {
  return new Promise<void>(
    resolve => setTimeout(
      () => resolve(),
      millis,
    ),
  );
}
