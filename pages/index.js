import { useState, useEffect } from 'react';

export default function Home() {
  const [simple_contents, set_simple_contents] = useState('');
  useEffect(() => {
    const url = encodeURIComponent(new URLSearchParams(window.location.search).get('url'));
    fetch('/api/getSimpleContents?url=' + url).then((r) => r.text()).then(set_simple_contents)
  });

  return <div dangerouslySetInnerHTML={{ __html: simple_contents }} />;
}
