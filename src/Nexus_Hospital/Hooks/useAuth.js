import { useContext } from 'react';
import { AuthProvider } from '../Context/AuthContext';

const useAuth = () => {
  // Context Api Convert To Hooks
  return  useContext(AuthProvider)
};

export default useAuth;