import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { ShiftContext } from '../../context/ShiftContext';

const RequireShift = ({ children }) => {
  const { shiftOpen } = useContext(ShiftContext);

  if (!shiftOpen) {
    return <Navigate to="/shift" replace />;
  }

  return children;
};

export default RequireShift;
