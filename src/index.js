import React,  { useRef }from 'react';

import ReactDOM from 'react-dom';
import './index.css';

// function App() {
//   const [data, setData] = useState([])

  // useEffect(() => {
  //   fetch("https://api.github.com/users")
  //   .then(response => response.json())
  //   .then(setData)
  // }, [])

  // if(data) {
  //   return (
  //     <div>
  //       <ul>
  //         {data.map((user) => (
  //           <li key={user.id}>{user.login}</li>
  //         ))}
  //       </ul>
  //       <button onClick={() => setData()}>Remove Data</button>
  //     </div>
  //   )
  // }
  
  // return (
  //   <p>No Users</p>
  // )
// }
function App(){
  const sound = useRef()
  const color = useRef()

  const submit = (e) => {
    e.preventDefault();
    const soundValue = sound.current.value
    const colorValue = color.current.value
    alert(`${soundValue} sounds like ${colorValue}`)
    sound.current.value = ""
    color.current.value = ""
  }

    return (
      <form onSubmit={submit}>
        <input ref={sound} type="text" placeholder="sound..."/>
        <input ref={color} type="color" />
        <button>ADD</button>
      </form>
    )
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

