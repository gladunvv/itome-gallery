import { useCallback, useState } from 'react';

export function useRequest() {
  const [response, setResponse] = useState();

  const makeRequest = useCallback(async (url, options) => {
    try {
      const result = await fetch(url, {
        ...options,
      });
      const parsedResult = await result.json();
      setResponse(parsedResult);
    } catch (e) {
      console.log(e);
    }
  }, []);

  return {
    response,
    makeRequest,
  };
}
