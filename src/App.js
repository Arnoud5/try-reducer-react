import logo from "./logo.svg";
import "./App.css";
import { useContext, useEffect } from "react";
import { ColorThemeCtx } from "./context/context";

function App() {
    const { state, dispatch } = useContext(ColorThemeCtx);
    useEffect(() => {
        console.log(state);
    });

    const handleSetColor = () => {
        dispatch({
            type: "SET_COLOR_THEME",
            payload: "#0000ff",
        });
    };

    const handleSetName = () => {
      dispatch({
        type : "SET_NAME",
        payload : "Blue"
      })
    }

    return (
        <>
            <div>
              {state?.colorTheme ? <p>{state.colorTheme}</p> : null} 
              {state?.name ? <p>{state.name}</p> : null}
            </div>
            <button onClick={handleSetColor}>Set Color BRO</button>
            <button onClick={handleSetName}>Set name Color BRO</button>
        </>
    );
}

export default App;
