import { useState, useEffect } from 'react';


export default function Home() {
  const [title, setTitle] = useState('');
  const [url, setURL] = useState('');
  useEffect(() => {
    setURL('http' + window.location.href.split('http').at(-1));
    fetch('/api/getTitle', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url })
    }).then((r) => r.json()).then(setTitle)
  });

  return <h1>{title}</h1>;
}
