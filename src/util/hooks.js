import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';

/** onMount,
 * parse the redirect query param
 * and execute a redirect if it exists
 */
export const useRedirectQuery = () => {
  const history = useHistory();
  useEffect(() => {
    const { redirect } = queryString.parse(history.location.search);
    if (redirect) {
      history.replace(redirect);
    }
  }, []);
};

export const useCustom = () => { };