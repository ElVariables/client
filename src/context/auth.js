import { createContext } from 'react';

const InstanceContext = createContext({
    user: null,
    setUser: () => {},
});

export default InstanceContext;
