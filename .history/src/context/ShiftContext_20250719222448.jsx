import { createContext, useContext, useState } from 'react';

export const ShiftContext = createContext();

export function ShiftProvider({ children }) {
  const [shift, setShift] = useState({
    isOpen: false,
    startAmount: 0,
  });

  const openShift = (amount) => setShift({ isOpen: true, startAmount: amount });
  const closeShift = () => setShift({ isOpen: false, startAmount: 0 });

  return (
    <ShiftContext.Provider value={{ shift, openShift, closeShift }}>
      {children}
    </ShiftContext.Provider>
  );
}

export function useShift() {
  return useContext(ShiftContext);
}
