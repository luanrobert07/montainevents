import './App.css';
import logo from './imagens/logo.png'
import img1 from './imagens/img1.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <div className='mountain'></div>

        <div className="logo">
          <img src={logo} alt='logo' ></img>
        </div>

        <div className='cabecalho'>
          <a href="/" className='link'>Home</a>
          <a href="/" className='link'>About us</a>
          <a href="/" className='link'>Activies</a>
          <a href="/" className='link'>Gift life Saturday</a>
          <a href="/" className='link'>Blog</a>
          <a href="/" className='link'>Contact us</a>
        </div>

        <h1 className='titulo'>Explore Mountains With Us</h1>
        <p className='texto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor placerat vel phasellus a eros, pharetra, sed sagittis. Lacus integer amet cras et iaculis est senectus ultricies. Velit vel id elementum urna morbi id fringilla proin. Interdum dolor, vulputate quis purus pellentesque magnis consectetur.</p>
        <button className='button'>Cout me</button>

        <div className='card'>
          <img className='img1' src={img1} alt='img1'></img>
          <p className='card_text' >Summer Hiking</p>
        </div>

      </header>
    </div>
  );
}

export default App;
