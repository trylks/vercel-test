import { useState, useEffect } from 'react';

export default function Home() {
  const [title, setTitle] = useState('');
  useEffect(() => {
    const url = encodeURIComponent(new URLSearchParams(window.location.search).get('url'));
    fetch('/api/getTitle?url=' + url).then((r) => r.text()).then(setTitle)
  });

  return <h1>{title}</h1>;
}
