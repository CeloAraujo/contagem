import Title from "../components/Title";
import Counter from "../components/Counter";
import useCountdown from "../hooks/useCounteDown";

import { CountDownContext } from "../context/CountDownContext";
import { useContext } from "react";

import { Navigate } from "react-router-dom";

const CountDown = () => {
  const { event } = useContext(CountDownContext);

  if (!event) return <Navigate to="/" />;

  const eventTitle = event.title;
  const eventColor = event.color;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [day, hour, minute, second] = useCountdown(event.date);
  return (
    <>
      <Title title={eventTitle} eventColor={eventColor} />
      <div className="countdown-container">
        <Counter title="Dias" number={day} eventColor={eventColor} />
        <Counter title="Horas" number={hour} eventColor={eventColor} />
        <Counter title="Minutos" number={minute} eventColor={eventColor} />
        <Counter title="Segundos" number={second} eventColor={eventColor} />
      </div>
    </>
  );
};

export default CountDown;
