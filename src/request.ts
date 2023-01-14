import fetch from 'node-fetch';

export default async (link: string, body: object) => {
  const req = await fetch(link, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!req.ok) {
    throw new Error(`Request error: ${req.statusText}`);
  }

  const text = await req.json();

  if (!text.ok) {
    throw new Error(`Request error: ${JSON.stringify(text)}`);
  }

  return text;
};
