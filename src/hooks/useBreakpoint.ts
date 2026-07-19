import { useEffect, useState } from 'react';
import _throttle from 'lodash/throttle';

export const useBreakpoint = (query: string) => {
  const hasWindowObject = typeof window !== 'undefined';

  if (!hasWindowObject) {
    return null;
  }

  const mediaMatch = window.matchMedia(query);
  // pre-existing: hooks called after an early return (currently unused hook)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [matches, setMatches] = useState(mediaMatch.matches);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);

    mediaMatch.addListener(handler);

    return () => mediaMatch.removeListener(handler);
  });

  return matches;
};

export const useBreakpointWithThrottle = (breakpoint: number) => {
  const [isPortrait, setIsPortrait] = useState(window.innerWidth <= breakpoint);
  const calculateIsPortrait = _throttle(() => {
    setIsPortrait(window.innerWidth <= breakpoint);
  }, 500);

  useEffect(() => {
    window.addEventListener('resize', calculateIsPortrait);

    return () => {
      window.removeEventListener('resize', calculateIsPortrait);
    };
  });

  return isPortrait;
};
