import React from 'react'

const GapContext = React.createContext(0)

const GapProvider = GapContext.Provider;
const GapConsumer = GapContext.Consumer;

export { GapProvider, GapConsumer , GapContext}