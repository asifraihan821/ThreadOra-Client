import { useEffect, useState } from "react";

const Timer = () => {
  const targetDate = new Date().getTime() + 1000 * 60 * 60 * 24 * 25;  // 25 diner countdown

  const getTimeRemaining = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;
    return {
      days : Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / (1000)) % 60),
    }
  }

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);  //cleanup
  }, []);


  return (
    <div className="flex justify-center mt-6 mb-19 md:mb-40 space-x-8 text-3xl font-semibold text-gray-900">
          <div>
            <span className="text-pink-500">{timeLeft.days}</span>
            <br />
            Days
          </div>
          <div>
            <span className="text-pink-500">{timeLeft.hours}</span>
            <br />
            Hrs
          </div>
          <div>
            <span className="text-pink-500">{timeLeft.minutes}</span>
            <br />
            Min
          </div>
          <div>
            <span className="text-pink-500">{timeLeft.seconds}</span>
            <br />
            Sec
          </div>
        </div>
  );
};

export default Timer;
