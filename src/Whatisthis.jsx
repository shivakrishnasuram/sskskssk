import React, { useEffect, useState } from 'react'

function Whatisthis() {
    const [aaa, setAaa] = useState(1)
    const [uerdata, setUrldata] = useState([])



    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${aaa}`)
            .then(res => res.json())
            .then(data => setUrldata(data))
    },[aaa])
    function handleincre() {
        setAaa(aaa + 1)
    }
    function handlenithis() {
        setAaa(1)
    }
    function handledecre() {
        setAaa(aaa - 1)
    }
    return (
        <>
        <h1>this is my tile {uerdata.title}</h1>
        <img style={{width:"300px"}} src={uerdata.image} alt="" />
            <h3>counting {aaa}</h3>
            <button onClick={handleincre}>incre</button>
            <button onClick={handlenithis}>reset</button>
            <button onClick={handledecre}>decre</button>
        </>
    )
}

export default Whatisthis




// import React, { useEffect, useState } from 'react'

// function Whatisthis() {
//     const [count,setCount] =useState(0)
//     function handleincre(){
//         setCount(count+1)
//     }
//     useEffect(()=>{
        
//     },[])
//   return (
//     <div>
//         <h1>count{count}</h1>
//         <button onClick={handleincre}></button>
//     </div>
//   )
// }

// export default Whatisthis