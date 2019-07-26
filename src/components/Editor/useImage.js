import { useState, useEffect } from 'react';

const defaultState = { image: undefined, status: 'loading' };

export default function useImage(url, crossOrigin) {
  const [{ image, status }, setState] = useState(defaultState);
  useEffect(() => {
    if (!url) return;
    const img = new window.Image();
    img.src = url;
    img.onload = () => setState({ image: img, status: 'loaded' });
    if (crossOrigin) img.crossOrigin = crossOrigin;

    return () => setState(defaultState);
  }, [url, crossOrigin]);

  return [image, status];
}
