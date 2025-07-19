import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { ShiftContext } from '../../context/ShiftContext';

const RequireShift = ({ children }) => {
  const { shift } = useContext(ShiftContext); // ✅ shift, not shiftOpen

  if (!shift.isOpen) {
    return <Navigate to="/shift" replace />;
  }

  return children;
};

export default RequireShift;
