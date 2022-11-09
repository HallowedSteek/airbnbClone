import React from 'react';
import Nav from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
// import RandomIm from "./images/image 25.png"
// import RandomIm2 from "./images/image 26.png"
// import RandomIm3 from "./images/image 27.png"
// import RandomIm4 from "./images/person.png"

import data from "./data"

function App() {
  

  const card = data.map( (content) => {
    return <Card 
          // img={content.coverImg}
          // rating={content.stats.rating}
          // opinions={content.stats.reviewCount}
          // location={content.location}
          // description={content.description}
          // price={content.price}
          // openSpots={content.openSpots}
          key={content.id}
          // content={content}
          {...content} //folosim sprea operator pentru a insira toate elementele din content (data.js)
    />
  })

  return (
    <div className="App">
        <Nav/>
        <Hero/>
        <section className='card-box'>
        {card}
        </section>

    </div>
  );
}

export default App;
