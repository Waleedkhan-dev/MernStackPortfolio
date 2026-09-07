'use client';

import { useEffect, useState } from 'react';
// Hook to check if a media query matches
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
//   const [matches, setMatches] = useState(() => window.matchMedia(query).matches);  
  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, [query]);

  return matches;
}
