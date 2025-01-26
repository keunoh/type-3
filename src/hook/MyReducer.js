import { useReducer } from "react";


function reducer(state, action) {
  switch (action.type) {

    case 'incremented_age': {
      console.log("increment!");
      return {
        name: state.name,
        // 🚩 Don't mutate an object in state like this:
        // ✅ Instead, return a new object
        age: state.age + 1
      };
    }
    case 'changed_name': {
      console.log("change!");
      return {
        name: action.nextName,
        age: state.age
      }
    }
  }
  throw Error('Unknwon action:' + action.type);
}

const initialState = { name: 'Taylor', age: 42 };

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleButtonClick() {
    dispatch({ type: 'incremented_age' })
  }

  function handleInputChange(e) {
    dispatch({
      type: 'changed_name',
      nextName: e.target.value
    })
  }

  return (
    <>
      <input
        value={state.name}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>
        Increment age
      </button>
      <p>Hello!, {state.name}. You are {state.age}.</p>
    </>
  )
}