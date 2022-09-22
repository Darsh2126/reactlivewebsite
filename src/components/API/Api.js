import { useState, useEffect } from "react";
import axios from "axios";
import "./Api.scss";

const Api = () => {

    const [myData, setData] = useState([]);

    const [myFilterData, setFilterData] = useState([]);

    const getGameData = async () => {
        const gameData = await axios.get("https://genshin-app-api.herokuapp.com/api/characters?infoDataSize=[all/minimal]");
        setData(gameData.data.payload.characters);
        setFilterData(gameData.data.payload.characters);
    }

    useEffect(() => {

        // Promises part
        // axios.get("https://genshin-app-api.herokuapp.com/api/characters?infoDataSize=[all/minimal]")
        //     .then(response => setData(response.data.payload.characters))
        //     .then(error => console.log(error))

        getGameData();
    }, [])

    const GenshinData = ({ name, element, cardImageURL, description }) => {
        return (
            <>
                <div className="genshin">

                    <h1>{name}<br /> {element}</h1>
                    <img src={cardImageURL} alt="character" className="card-image"></img>
                    <p>{description}</p>
                </div>
            </>
        )
    }

    const onHandleClick = (e) => {

        setFilterData(myData.filter((gameData) => {
            return gameData.name
                .toLowerCase()
                .includes(e.target.value.toLowerCase());
        }));
    }

    return (
        <>
            <div className="container">
                <div className="inputWrapper">
                    <input type="search" onChange={(e) => { onHandleClick(e) }} placeholder="Search" />
                </div>
                <div className="card">
                    {
                        myFilterData.map((payload, index) => {
                            const { name, element, cardImageURL, description } = payload;
                            return (
                                <GenshinData
                                    key={index}
                                    name={name}
                                    element={element}
                                    cardImageURL={cardImageURL}
                                    description={description} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Api;