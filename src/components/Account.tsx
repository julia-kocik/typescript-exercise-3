import { useReducer } from 'react';

interface AccountProps {
    balance: number;
    remove: any,
  }
  
const initialState = {count: 0};

function reducer(state: any, action: any) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    default:
      throw new Error();
  }
}


export const Account = (props: AccountProps) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {balance, remove} = props;
    return (
        <div>
            <p>{balance}</p>
            <p>Counter: {state.count}</p>
            <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
            <button onClick={() => remove(balance)}>Delete</button>
        </div>
    )
}