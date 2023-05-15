import React from "react";
import memesData from "../data/memeData";

export default function Meme(){
    let url = null;
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState([])
    // const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")
    React.useEffect(()=>{
      fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemeImages(data.data.memes))  
    }, [])

    function loadImg(){
        var memesArray = allMemeImages;
        var id = Math.floor(Math.random()*memesArray.length);
        console.log(" clicked " + memesArray[id].url);
        var url = memesData["data"]["memes"][id].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }));
    }

    function handleChange(event){
        const {name, value} = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <input type="text" 
                className="form--input"
                placeholder="Top text"
                name="topText"
                onChange={handleChange}
                />
                <input type="text"
                className="form--input" 
                placeholder="Button text"
                name="bottomText"
                onChange={handleChange}
                />
                <button className="form--button"
                onClick={loadImg}>
                Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
            <img src={meme.randomImage} 
            className="meme--image"
            ></img>
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>

        </main>
    )
}