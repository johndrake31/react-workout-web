
export const storeLocalToken = (token: string) =>
  localStorage.setItem('userToken', token);
export const removeLocalToken = () => localStorage.removeItem('userToken');


