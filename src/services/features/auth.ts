import { httpRequest } from '../api';
import { routes } from '../routes/routes';
import { buildUrl } from '../routes/utils';

export const AuthServices = {
  signin(data: any) {
    const url = buildUrl(routes.auth.signin);
    return httpRequest({ url, method: 'POST', data });
  },
  authorize() {
    const url = buildUrl(routes.auth.authorize);
    return httpRequest({ url, method: 'POST' });
  }
};
