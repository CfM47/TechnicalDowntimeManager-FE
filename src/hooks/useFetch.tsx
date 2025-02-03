import { useEffect, useState } from 'react';

import { ApiResponse } from '@/services/api/api';

interface UseFetchProps<T> {
  promise: Promise<ApiResponse<T>>;
  defaultData: T;
}

export const useFetch = <T,>({ promise, defaultData }: UseFetchProps<T>) => {
  const [data, setData] = useState<T>(defaultData);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);
      const response = await promise;
      setIsFetching(false);
      setData(response.data);
    };
    fetchData();
  }, []);

  return { data, isFetching };
};
