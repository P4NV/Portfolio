import './App.css';

import Head from './components/head.jsx';
import ExpandableCard from './components/Cardbuttons.jsx';

function App() {


  return (
    <>
      <div className='background'>  
        <div className="stars"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
      </div>
      <div className='content-container'>
        <Head />
      <div className='button-wrapper'>
        <div className='button-container '>
          <ExpandableCard title="About Me" preview="My role & mindset">
            <p>🚀 Project One</p>
            <p>🚀 Project Two</p>
          </ExpandableCard>
          <ExpandableCard title="Projects" preview="Selected work">
            <p>🚀 Project One</p>
            <p>🚀 Project Two</p>
          </ExpandableCard>
          <ExpandableCard title="Experience" preview="Development path">
            <p>🚀 Project One</p>
            <p>🚀 Project Two</p>
          </ExpandableCard>
          <ExpandableCard title="Beyond Code" preview={`Thinking in systems,\nbuilding hands-on`}>
            <p>🚀 Project One</p>
            <p>🚀 Project Two</p>
          </ExpandableCard>
        </div>
      </div>
      </div>
    </>
  )}

export default App
