import produce from 'immer';
import Button from '../components/Button';
import Panel from '../components/Panel';
import { useReducer } from 'react';

const INCREMENT_COUNT = 'increment-count';
const DECREMENT_COUNT = 'decrement-count';
const SET_VALUE_TO_ADD = 'set-value-to-add';
const ADD_VALUE_TO_COUNT = 'add-value-to-count';

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT: {
      state.count = state.count + 1;
      return;
      //return { ...state, count: state.count + 1 };
    }
    case DECREMENT_COUNT: {
      state.count = state.count - 1;
      return;

      //return { ...state, count: state.count - 1 };
    }
    case SET_VALUE_TO_ADD: {
      state.valueToAdd = action.payload;
      return;

      //return { ...state, valueToAdd: action.payload };
    }
    case ADD_VALUE_TO_COUNT: {
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      return;
      //return { ...state, count: state.count + state.valueToAdd, valueToAdd: 0 };
    }
    default:
      return;
    //return state;
  }
};

function CounterPage({ initialCount }) {
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    dispatch({ type: INCREMENT_COUNT });
  };
  const decrement = () => {
    dispatch({ type: DECREMENT_COUNT });
  };

  const handleChange = event => {
    const value = parseInt(event.target.value) || 0;
    dispatch({ type: SET_VALUE_TO_ADD, payload: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch({ type: ADD_VALUE_TO_COUNT });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is : {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a Lot!</label>
        <input
          className="p-1 m-3 bg-gray-50 border border-gray-300"
          type="number"
          value={state.valueToAdd || ''}
          onChange={handleChange}
        ></input>
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
