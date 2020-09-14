import { useCallback, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../constants';

const instance = axios.create({
  baseURL: `${BASE_URL}/api`,
});

export function useRequest(url) {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState();

  const makeRequest = useCallback(
    async (extendedUrl) => {
      try {
        const result = await instance(extendedUrl && `/${extendedUrl}`);
        setResponse(result.data);
      } catch (e) {
        setError(e);
      }
    },
    [],
  );

  return [response, makeRequest, error];
}
