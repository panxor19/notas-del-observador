export function calculateReadingTime(text: string) {
  const wordsPerMinute = 220;
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / wordsPerMinute));

  return {
    minutes,
    text: `${minutes} min de lectura`
  };
}
