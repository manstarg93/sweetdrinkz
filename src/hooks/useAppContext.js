import { useContext } from 'react';
import { AppContext } from '../store/AppContext';

export const useAppContext = () => useContext(AppContext);
