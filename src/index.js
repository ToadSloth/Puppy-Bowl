import React, {useEffect, useState} from "react";
import ReactDom from "react-dom";


const PuppyBowl = () => {
    const [puppyPlayers,stePuppyPlayers] = useState([]);

    useEffect(() => {

        async function fetchPuppyData(){
            try {
                const response = await fetch(
                    'https://fsa-puppy-bowl.herokuapp.com/api/2209-FTB-MT-WEB-FT/players'
                  );
                  const puppyData = await response.json();
                  console.log(puppyData);
                  stePuppyPlayers(puppyData.data.players)
                } catch (err) {
                  console.error(err);
            }
        }
        fetchPuppyData()
    }, [])
    console.log(puppyPlayers)
    return ( 
        <div>
            <h1>The Puppy Bowl!</h1> 

            <div>
                {
                    puppyPlayers && puppyPlayers.length ? puppyPlayers.map((puppy, idx) => {
                        return <div key={idx}>
                            <p class="name">Puppy: {puppy.name}</p>
                            <p class="breed">Puppy Breed: {puppy.breed}</p>
                            <img src={puppy.imageUrl}/>
                        </div>
                    }) : "No Puppies to display - they are no longer puppies they are dogs"
                }
            </div>
        </div> 
    ) 
};

ReactDom.render(<PuppyBowl/>, document.getElementById("app"))
export default Homepage;