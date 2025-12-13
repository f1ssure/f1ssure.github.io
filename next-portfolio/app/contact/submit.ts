import { useState } from 'react';

interface Data {
  email: string
  subject: string
  text: string
}

interface ApiResponse {
  message?: string;
  messageId?: string;
  error?: string;
}

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState<ApiResponse | null>(null);

  const submit = async (data: Data) => {
    setLoading(true);
    setResponse(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result: ApiResponse = await res.json();

      if (!res.ok) {
        setResponse({ error: result.error || 'Failed to send email' });
      } else {
        setResponse({ message: result.message || 'Email sent successfully' });
      }
    } catch (error) {
      setResponse({ error: 'Network error. Please check your connection and try again.' });
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
};

export default useSubmit;
