import {createContext} from 'react';
const myContext = createContext();

export const myProvider = myContext.Provider;
export const myConsumer = myContext.Consumer;
export default myContext;
