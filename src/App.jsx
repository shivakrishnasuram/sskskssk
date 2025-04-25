import React from 'react'
import Whatisthis from './Whatisthis'

function App() {
  return (
    <>
    <Whatisthis/>
    </>
  )
}

export default App


// import React, { useEffect, useState } from 'react'

// function App() {
//   const [harish, setHarish] = useState(1)
//   const [abhi,setAAbhi] =useState([])
//   function sulliga() {
//     setHarish(harish + 1)
//   }

//   useEffect(() => {
//     fetch(`https://fakestoreapi.com/products/${harish}`)
//       .then(res => res.json())
//       .then(data => setAAbhi(data))
//   }, [harish])
//   console.log(abhi)
//   return (
//     <>
//       <h3>count :{abhi.title}</h3>
//       <img src={abhi.image} style={{width:"300px"}} alt="" />
//       <button onClick={sulliga}>kotti ikada</button>
//     </>
//   )
// }

// export default App