import React,  { useState } from 'react';

import ReactDOM from 'react-dom';
import './index.css';
import { useInput} from "./useInput"

// useEffect
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

// useRef
// function App(){
//   const sound = useRef()
//   const color = useRef()

//   const submit = (e) => {
//     e.preventDefault();
//     const soundValue = sound.current.value
//     const colorValue = color.current.value
//     alert(`${soundValue} sounds like ${colorValue}`)
//     sound.current.value = ""
//     color.current.value = ""
//   }

//     return (
//       <form onSubmit={submit}>
//         <input ref={sound} type="text" placeholder="sound..."/>
//         <input ref={color} type="color" />
//         <button>ADD</button>
//       </form>
//     )
// }

// handle useRef with uesState
// function App(){
//   const [sound, setSound] = useState("")
//   const [color, setColor] = useState("#000000")

//   const submit = (e) => {
//     e.preventDefault();
//     alert(`${sound} sounds like ${color}`)
//     setSound("")
//     setColor("#000000")
//   }

//     return (
//       <form onSubmit={submit}>
//         <input value={sound} type="text" placeholder="sound..." onChange={(e) => setSound(e.target.value)}/>
//         <input value={color} type="color" onChange={(e) => setColor(e.target.value)}/>
//         <button>ADD</button>
//       </form>
//     )
// }

// custon hook useInput
function App(){
  const [titleProps, resetTitle] = useInput("")
  const [colorProps, resetColor] = useInput("#000000")

  const submit = (e) => {
    e.preventDefault();
    alert(`${titleProps.value} sounds like ${colorProps.value}`)
    resetTitle()
    resetColor()
  }

    return (
      <form onSubmit={submit}>
        <input {...titleProps} type="text"  />
        <input {...colorProps} type="color" />
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

