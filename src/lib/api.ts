export async function submitLead(data: any) {
  const endpoint = process.env.NEXT_PUBLIC_CRM_API_URL;
  
  if (!endpoint) {
    console.error('CRM API URL is not defined in environment variables');
    throw new Error('API configuration missing');
  }

  const response = await fetch(`${endpoint}/leads`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...data,
      source: 'web-frontend',
      timestamp: new Date().toISOString(),
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to submit lead: ${response.statusText}`);
  }

  return response.json();
}
