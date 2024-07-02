//Inicio, donde se verán todos los cambios cuando importemos
import Banner from "components/Banner";
import Titulo from "components/Titulo";
import Card from "components/Card";
import styles from "./index.module.css";
import { useEffect, useState } from "react";


function Inicio() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch("https://my-json-server.typicode.com/gianequispe/alura-cinema-api/videos")
        .then((response) => response.json())
        .then((data) => {
            setVideos(data);
        });
    },[]);


    return(
        <>
             
             <Banner img="home" color="#154580"/>
             <Titulo>
                <h1>Un lugar para guardar sus videos favoritos</h1>
             </Titulo>
             {/* <Card id="1" titulo="Gato" capa="https://i.pinimg.com/236x/8c/37/65/8c3765a5ac7001cf5fff2b9d6f352fd3.jpg"/> */}
             <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id}/>
                })}
             </section>
             

        </>
       
       
    )
}

export default Inicio;