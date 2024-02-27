import { useState, useEffect } from 'react';
import star from './assets/bg-stars.svg'
import facebook from './assets/icon-facebook.svg'
import pinterest from './assets/icon-pinterest.svg'
import instagram from './assets/icon-instagram.svg'



import './App.css';

function App() {
  //текущее время
  const [currentTime, setCurrentTime] = useState(new Date());

  //секундный интервал текущего времени
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  //вычитание времени текущего от заданного
  const getRemainingTime = () => {
    const targetDate = new Date(2024, 2, 10, 12, 0, 0);
    //@ts-ignore
    const difference = targetDate - currentTime;
    // console.log(difference)
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = getRemainingTime();

  return (
    <>
      <img className='starts' src={star}/>
      <div className="container">
        <h2 className='text'>WE'RE LAUNCHING SOON</h2>
        <div className="countdown-timer">
          <div className="time-block">
            <span className="value">{days}</span>
            <span className="label">DAYS</span>
          </div>
          <div className="time-block">
            <span className="value">{hours}</span>
            <span className="label">HOURS</span>
          </div>
          <div className="time-block">
            <span className="value">{minutes}</span>
            <span className="label">MINUTES</span>
          </div>
          <div className="time-block">
            <span className="value">{seconds}</span>
            <span className="label">SECONDS</span>
          </div>
        </div>
      </div>
      <img className='images' src="https://i.ibb.co/fNWh1BK/pattern-hills.png" />
      <div className='parentIc'>
        <img className='ic' src={facebook} />
        <img className='ic' src={pinterest} />
        <img className='ic' src={instagram} />
      </div>
    </>
  );
}

export default App;
