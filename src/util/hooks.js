import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import queryString from 'query-string';

/** onMount,
 * parse the redirect query param
 * and execute a redirect if it exists
 */
export const useRedirectQuery = () => {
  const nav = useNavigate();
  useEffect(() => {
    const { redirect } = queryString.parse(nav.location.search);
    if (redirect) {
      nav.replace(redirect);
    }
  }, []);
};

export const useCustom = () => { };