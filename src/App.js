import Header from './components/Header';
import ContentContainer from './components/ContentContainer';
import './App.css';

function App() {

  return (
    <>
    <div className='background'>
      <div class="stars"></div>
      <div class="shooting-star"></div>
      <div class="shooting-star"></div>
      <div class="shooting-star"></div>
      <div class="shooting-star"></div>
      <div class="shooting-star"></div>
      <div class="shooting-star"></div>
      <div class="shooting-star"></div>
      <div class="shooting-star"></div>
    </div>
    <div className="App">
      <Header/>
      <ContentContainer/>
    </div>
    </>
    
  );
}

export default App;
