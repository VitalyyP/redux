
import './App.css';

import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispath = useDispatch();
  const cash = useSelector(state => state.cash);
  
  const addCash = cash => {
  dispatch({type:"ADD_CASH", payload: cash});
}

const getCash = cash => {
  dispatch({type:"GET_CASH", payload: cash});
}

  

  return (
    <div className={'app'}>
      <div style={{fontSize:"3rem"}}>{cash}</div>
      <div style={{display:"flax"}}>
        <button onClick={()=>addCash(Nubmer(prompt()))}>Пополнить счет</button>
        <button onClick={()=>getCash(Number(prompt()))}>Снять со счета</button>        
      </div>
    </div>
  );
}

export default App;
