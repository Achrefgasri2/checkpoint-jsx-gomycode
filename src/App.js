import pc from './img/pc.jpg';
import html from './video/html.mp4';
import './App.css';

function App() {
  return (
    <div>
        <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title">Achref Gasri </h1>
          <img src={pc} width={320} height={240}/>
          <img src="/img/iphone.png" width={320} height={240} />
        </div>
        <video width={320} height={240} controls>
        <source src={html} type="video/mp4" />
      </video>


      </div>
  );
}

export default App;
