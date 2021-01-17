import { useEffect, useState } from 'react';

export const useBreakpoint = (query) => {
  // const hasWindowObject = typeof window !== 'undefined';
  //
  // if (!hasWindowObject) {
  //   return null;
  // }

  const mediaMatch = window.matchMedia(query);
  const [matches, setMatches] = useState(mediaMatch.matches);

  useEffect(() => {
    const handler = (e) => setMatches(e.matches);

    mediaMatch.addListener(handler);

    return () => mediaMatch.removeListener(handler);
  });

  return matches;
};
