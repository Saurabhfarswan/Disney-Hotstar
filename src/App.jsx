

import Header from './Components/Header'
import Slider from './Components/Slider'
import ProductionHouse from './Components/Production'
import GenreMovieList from './Components/GenreMovieList'



function App() {
  

  return (
    <div className="bg-black">
        <Header/>
        
        <Slider/>

        <ProductionHouse/>

        <GenreMovieList/>
    </div>
  )
}

export default App