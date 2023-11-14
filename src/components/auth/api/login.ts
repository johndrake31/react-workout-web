import axios from 'axios';

const loginApi = async (body: { email: string; password: string }) => {
  const baseUrl = process.env.REACT_APP_API_LOGIN;
  const { email, password } = body;
  if (baseUrl) {
    const post = await axios.post(baseUrl, {
      email,
      password,
    });
    if (post && post.data) return post.data;
    
  }
};

export default loginApi;
