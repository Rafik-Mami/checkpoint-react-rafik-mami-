import React   from 'react'



function movieCard({card,setCard}) {
  function clearCard(){
        setCard([])
    }
    const removeFromCard=(movieToRemove)=>{
        setCard(card.filter((movie)=> movie!=movieToRemove))
    }
    return (
        <>
     {card.length > 0 &&(
           <button onClick={clearCard}>clear card</button>
       )} 
    <div className="movielist">
    <h1>Card of Movies</h1>

    <div className="movies">
      {card.map((movie, index) => (
        <div className="mov" key={index}>
          <h3>title is :{movie.title}</h3>
          <p>bio is : {movie.bio}</p>
          <p>url :{movie.url}</p>
          <p>rate:{movie.rate}</p>
          <button onClick={()=>removeFromCard(movie)}>remove from card</button>
        </div>
      ))}
    </div>
  </div>
  </>
    )
      }

export default movieCard

