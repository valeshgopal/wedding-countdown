import './App.css';
import Timer from './Timer/Timer';

function App() {
  return (
    <div className='container'>
      <div className='content'>
        <h2 className='heading'>Sandhya & Valesh</h2>
        <p className='subheading'>
          Wedding Date: Feb 11<sup>th</sup>, 2023 - 9:13PM
        </p>
        <Timer />
      </div>
    </div>
  );
}

export default App;
