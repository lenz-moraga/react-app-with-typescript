import { useReducer } from "react";
import { Char } from '../components/types'

interface FormState {
  inputValues: Char
}

const INITIAL_STATE = {
  name: '',
  image: '',
  status: '',
  species: ''
};

type FormReducerAction = {
  type: 'change_value',
  payload: {
    inputName: string,
    inputValue: string
  }
} | {
  type: 'clear'
}

const formReducer = (state: FormState['inputValues'], action: FormReducerAction) => {
  switch (action.type) {
    case 'change_value':
      const { inputName, inputValue } = action.payload
      return {
        ...state,
        [inputName]: inputValue
      }
    case "clear":
      return INITIAL_STATE
    default:
      return state
  }
}

const useNewSubForm = () => {
  return useReducer(formReducer, INITIAL_STATE);
}

export default useNewSubForm
