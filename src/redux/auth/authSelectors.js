const isLogin = state => state.auth.token;
const getLoginEmail = state => state.auth.user.email;

export default { isLogin, getLoginEmail };
