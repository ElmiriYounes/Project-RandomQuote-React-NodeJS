import React from "react";
import GlobalStyle from "./globalStyles";
import QuoteRandom from "./components/quoteRandom/QuoteRandom";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <QuoteRandom/>
    </>
  );
};

export default App;
