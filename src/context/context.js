import { createContext, useReducer } from "react";

export const ColorThemeCtx = createContext(null);

const ColorProvider = ({ children }) => {
    const initialState = {
        colorTheme: null,
        name: null,
    };
    // color reducer adalah fungsi untuk memanipulasi initialState
    const colorReducer = (state, action) => {
        switch(action.type){
            case "SET_COLOR_THEME": {
                return {
                    ...state,
                    colorTheme: action.payload
                }
            }
            case "SET_NAME" : {
                return {
                    ...state,
                    name : action.payload
                }
            }
            default : return state
        }
    };
    // use reducer memungkinkan kita untuk membuat reducer agar bisa mengubah initial state
    const [state, dispatch] = useReducer(colorReducer, initialState);

    return <ColorThemeCtx.Provider value={{state, dispatch}} >{children}</ColorThemeCtx.Provider>;
};

export default ColorProvider;