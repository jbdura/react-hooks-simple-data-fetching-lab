// create your App component here
import React, {useEffect, useState} from "react"

function App(){
    const [image, setImage] = useState("")
    const [isLoaded, setIsLoaded] = useState(false)
    
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(r=>r.json())
        .then(data=>{
            setIsLoaded(!isLoaded)
            setImage(data.message)
        })
    },[])

    if(!isLoaded){
        return <p>Loading...</p>
    }

    return <img src={image} alt="A Random Dog"></img>
}

export default App