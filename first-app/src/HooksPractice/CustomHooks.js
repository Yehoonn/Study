import { useReducer } from "react";

const reducer = (state, action) => {
  return { ...state, [action.name]: action.value };
};

const CustomHooks = (initialForm) => {
  const [state, disPatch] = useReducer(reducer, initialForm);

  const onChange = (e) => {
    disPatch(e.target);
  };
  return [state, onChange];
};

export default CustomHooks;
