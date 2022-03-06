import logo from './logo.png'
import github from './github.png'
import Dictionary from './Dictionary'
import Result from './Result'
import './App.css'

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <header className="App-header">
            <img src={logo} className="logo" alt="logo" />
        </header>
        <Dictionary defaultKeyword="amazing" />
        <Result defaultKeyword="amazing" />
        <footer>
          coded by<em> Elham Akbari</em> , open source code on{' '}
          <a
            href="https://github.com/elhamiakbari/react-dictionary"
            target="_blank"
            rel="noopener noreferrer"
          >
             <strong>github</strong>
          </a>
        </footer>
      </div>
    </div>
  )
}