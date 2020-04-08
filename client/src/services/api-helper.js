const axios = require('axios');
const api = axios.create({
  baseURL: 'http://localhost:3000'
})



// ==================================
// ================Auth==============
// ==================================

export const loginUser = async (loginData) => {
  const response = await api.post('/auth/login', { auth: loginData })
  localStorage.setItem('authToken', response.data.token)
  api.defaults.headers.common.authorization = `Bearer ${response.data.token}`
  return response.data.user;
}

export const registerUser = async (registerData) => {
  console.log('regdata', registerData)
  const response = await api.post('/users/', { user: registerData })
  localStorage.setItem('authToken', response.data.token);
  api.defaults.headers.common.authorization = `Bearer ${response.data.token}`
  return response.data.user
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const response = await api.get('/auth/verify');
    return response.data
  }
  return false
}

export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
}

// ==================================
// ================Users=============
// ==================================
export const readAllUsers = async () => {
  const response = await api.get('/users');
  return response.data;
}

export const addClub = async (user_id, club_id) => {
  const response = await api.get(`/clubs/${club_id}/users/${user_id}`);
  return response.data;
}

// ==================================
// ================Clubs=============
// ==================================

export const readUserClubs = async (user_id) => {
  console.log('running the reader function?')
  const response = await api.get(`/users/${user_id}/clubs`);
  console.log('clubsresponse', response)
  return response.data;
}

export const readOneClub = async (club_id) => {
  const response = await api.get(`/clubs`);
  return response.data.filter(club => club.id == club_id);
}


export const createClub = async (clubData, user_id) => {
  console.log('why is createClub running', clubData)
  const response = await api.post(`/users/${user_id}/clubs`, { club: clubData });
  console.log('is this even running');

  return response.data
}

export const updateClub = async (clubData, club_id) => {
  const response = await api.put(`/clubs/${club_id}`, { club: clubData });
  return response.data;
}


export const destroyClub = async (club_id) => {
  const response = await api.delete(`/clubs/${club_id}`);
  return response.data;
}

export const addUser = async (user_id, club_id) => {
  const response = await api.get(`/users/${user_id}/clubs/${club_id}`);
  return response.data;
}
