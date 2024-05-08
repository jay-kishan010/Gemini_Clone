import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput]=useState("");
  const [recentPrompt, setRecentPrompt]=useState("")
  const [prevPrompt, setPrevPrompt]=useState([]);
  const [showResult,setShowResult]=useState(false);
  const [loading, setLoading]=useState(false)
  const [resultData, setResultData]=useState("")

  const onSent = async (input) => {
    await runChat(input);
  };

  const contextValue = {
    prevPrompt,
    setPrevPrompt,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    input,
    setInput,
    resultData,
    setShowResult,
    setLoading,
    setResultData
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
