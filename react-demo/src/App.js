import './App.css';
import NAMES from './components/data.json'

function App() {
  return (
    <div className='App'>
     {NAMES.map((item)=>(
         <p key={item.id}>
          {item.first_name}
          {item.last_name}
         </p>


     ))}
     </div>
  )
}

export default App

