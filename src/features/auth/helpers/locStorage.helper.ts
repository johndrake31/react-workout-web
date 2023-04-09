//TODO: Replace string with Constant Var
export const storeLocalToken = (token: string) =>
  localStorage.setItem('userToken', token);
export const removeLocalToken = () => localStorage.removeItem('userToken');

export const getLocalToken = ()=>{
  return localStorage.getItem('userToken');
}

