
function Card(){

    return (
        <div className="card-class">
            <img className="card-img" src="https://www.w3schools.com/w3images/team2.jpg" alt="Avatar" style={{width: "100%"}} />
            <div className="container">
                <h4><b>John Doe</b></h4>
                <p>Architect & Engineer</p>
            </div><p>
            <button>Follow</button>
            <button>Message</button>
        </p>
        </div>
        
    )
}

export default Card;