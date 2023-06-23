import React, { useContext } from 'react';
import { AuthContext } from '../Context/Context';


export const useAuth = () => useContext(AuthContext)

