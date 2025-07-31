import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";


// CSS
import '../styles/index.css';

function SimpleCounter(props) {
  return (
    <div className='bigCounter'>
      <div className='calendar'>
     <i className="fas fa-clock"></i>
      </div>
      <div className='four'>{props.digitFour}</div>
      <div className='three'>{props.digitThree}</div>
      <div className='two'>{props.digitTwo}</div>
      <div className='one'>{props.digitOne}</div>
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));

let counter = 0;

setInterval(() => {
  const four = Math.floor(counter / 1000) % 10;
  const three = Math.floor(counter / 100) % 10;
  const two = Math.floor(counter / 10) % 10;
  const one = counter % 10;

  root.render(
    <React.StrictMode>
      <SimpleCounter
        digitOne={one}
        digitTwo={two}
        digitThree={three}
        digitFour={four}
      />
    </React.StrictMode>
  );

  counter++;
}, 1000);

