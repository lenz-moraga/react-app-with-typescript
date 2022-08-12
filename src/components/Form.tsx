import React from 'react'
import useNewSubForm from '../hooks/useNewSubForm'
import { Char } from './types'

interface FormProps {
  onNewSub: (newSub: Char) => void
}

const Form = ({ onNewSub }: FormProps) => {
  const [inputValuesStates, dispatch] = useNewSubForm();
  
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    
    const { name, value } = evt.target;
    dispatch({
      type: 'change_value',
      payload: {
        inputName: name,
        inputValue: value
      }
    })
  }

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    onNewSub(inputValuesStates);
    dispatch({ type: 'clear' })
  }

  const handleClear = () => {
    dispatch({type:'clear'})
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='nick' placeholder='Nickname' onChange={handleChange} value={inputValuesStates.name} />
      <input type='text' name='subMonths' placeholder='subMonths' onChange={handleChange} value={inputValuesStates.name} />
      <input type='text' name='avatar' placeholder='Avatar' onChange={handleChange} value={inputValuesStates.name} />
      <input type='text' name='description' placeholder='Description' onChange={handleChange} value={inputValuesStates.name} />

      <button type="button" onClick={handleClear} >Clear form!</button>
      <button type="submit">Save new Sub!</button>
    </form>
  )
}

export default Form