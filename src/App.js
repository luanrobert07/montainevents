import './App.css';
import logo from './imagens/logo.png'
import fundo from './imagens/fundo.png'
import about_us from './imagens/about_us.png'
import icone1 from './imagens/icone1.png'
import icone2 from './imagens/icone2.png'
import icone3 from './imagens/icone3.png'
import icone4 from './imagens/icone4.png'
import Carousel from './componentes/Carousel';
import Video from './componentes/Video';

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
          <div>
            <Carousel />
          </div>
          <p className='card_text' >Summer Hiking</p>
        </div>
      </header>

      <div className='secao2'>
        <img className='fundo' src={fundo} alt='fundo'></img>

        <p className='secao2_about_us'>About us</p>
        <h1 className='titulo_secao2'>Who we are</h1>
        <div className='text_secao2'>
        
        
        <p >
          At Gift Life Adventures, we believe the most rewarding experiences are those that are both challenging and social. That’s why we bring people together to experience adventure weekends and outdoor activities that take people way beyond their comfort zones.
          
          To us, the great outdoors is our canvas — and the paint is adventure. Whether we’re on foot, on the water or on two wheels, we’re passionate about making adventure weekends and experience days accessible to all.

          Over the years, we’ve experienced some truly life-changing moments with our fellow adventurers. We’ve cycled through English forests, hiked across Spanish mountain ranges and rafted down Scottish rivers. Our outdoor experiences have taken us to the likes of Croatia, Belgium, Portugal, Italy and Israel. But wherever we’ve been, the adventure has always been enhanced by the camaraderie we share with our clients — our friends.
        </p>

        <img  className='about_us' src={about_us} alt='about_us'></img>
        </div>
      </div>

      <div className='secao3'>
        <p className='title1_secao3'> Our promo </p>
        <h1 className='title2_secao3'> The Welsh 3000s 24 hr Challenge </h1>
        <div className='video'>
          <Video />
        </div>

      </div>

      <div className='secao4'>
        <p className='title1_secao4'> Category</p>
        <h1 className='title2_secao4'> We Offer Best Services </h1>
        <div className='division'>
        <div >
          <img className='icone1' src={icone1} alt='icone1'></img>
          <h1 className='title3_secao4'>Mountaion Guide</h1>
          <p className='title4_secao4'>An experienced Mountain leader guide.</p>
        </div>
        <div >
          <img className='icone1' src={icone2} alt='icone2'></img>
          <h1 className='title3_secao4'>Best Offer</h1>
          <p className='title4_secao4'>Snacks and water at both RV points, Nant Peris and Ogwen Valley.</p>
        </div>
        <div >
          <img className='icone1' src={icone3} alt='icone3'></img>
          <h1 className='title3_secao4'>24h Guidance</h1>
          <p className='title4_secao4'>Our safety-first approach gives you peace of mind — and the freedom to make exploration your priority.</p>
        </div>
        <div >
          <img className='icone1' src={icone4} alt='icone4'></img>
          <h1 className='title3_secao4'>Safety First</h1>
          <p className='title4_secao4'>Our safety-first approach gives you peace of mind — and the freedom to make exploration your priority.</p>
        </div>
        </div>
        
      </div>

      <div className='secao5'>
      <p className='title1_secao5'> Our Pricing </p>
        <h1 className='title2_secao5'> Our Next Tours </h1>
      </div>

    </div>
  );
}

export default App;
