import { useState } from 'react';


export default function Home() {
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');

  const handleUrlChange = (event) => { setUrl(event.target.value) };

  const handleSubmit = (event) => {
    event.preventDefault();
    return fetch('/api/getTitle', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url })
    }).then((r) => r.json())
      .then(setTitle);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter a URL:
          <input type="text" value={url} onChange={handleUrlChange} />
        </label>
        <button type="submit">Get Title</button>
      </form>
      <h1>{title}</h1>
    </div>
  );
}