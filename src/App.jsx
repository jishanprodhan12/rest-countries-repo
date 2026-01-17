import { useState } from 'react'
import './App.css'
import Countries from './Countries/Countries';

function App() {
  const [count, setCount] = useState(0);

  const handleAddButton = () => setCount(count + 1);

  return (
    <>

      <h1>Counter</h1>
      <div className='counter'>
        <div>
          <p>Count : {count}</p>
        </div>
        <div className='counter' style={{ flexDirection: "row", border: 0 }}>
          <button onClick={handleAddButton}> + </button>
        {/* //  using anonimus function  */}
          <button onClick={() => setCount(count - 1)}> - </button>
        </div>
      </div>
      
    <Countries></Countries>

    </>
  )
}

export default App
