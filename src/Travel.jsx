function Travel(){
    const firstTravel = "Dubai";
    const secondTravel = "Seychelles";
    const thirdTravel = "Georgia";
    const fourthTravel = "Azerbaijan";
    const fifthTravel = "Spain";
    const sixthTravel = "Netherlands";
    const seventhTravel = "France";
    const eighthTravel = "Germany";

    return(
        <div>
        <h1 className="myList">My Travel list</h1>
        <ul>
            <li>{firstTravel}</li>
            <li>{secondTravel} </li>
            <li>{thirdTravel} </li>
            <li>{fourthTravel} </li>
            <li>{fifthTravel}</li>
            <li>{sixthTravel} </li>
            <li>{seventhTravel}</li>
            <li>{eighthTravel}</li>
            <br />
            <br />
            <br />
            <hr />
           
        </ul>
        </div>
       
    )


}
export default Travel