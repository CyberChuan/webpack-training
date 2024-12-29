import Header from './header';
import './style/reset.css'
import './style/main.css'

const App = (): JSX.Element => {
  return (
      <div className="grid">
          <Header/>
          <h1>Hello, world!</h1>
      </div>
  )
}

export default App;