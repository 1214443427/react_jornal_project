import './App.css'
import Card from './components/Card'
import Banner from './components/Banner'
import data from './data'

function App() {

  const CardComponents = data.map( 
    x => { return (
      <Card 
      key = {x.key} 
      item = {x}
      />
      )
  }
    )
  console.log(CardComponents)
  return (
      <>
        <Banner/>
        {CardComponents}
      </>
    )
}

export default App
