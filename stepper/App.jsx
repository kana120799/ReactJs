import Stepper from "./Components/Stepper";
import "./styles.css";

export default function App() {
  const steps = [
    {
      label: "Personal Info",
      content: <div>Personal Information </div>,
    },
    {
      label: "Account Info",
      content: <div>Account Info </div>,
    },
    {
      label: "Payment",
      content: <div>Payment </div>,
    },
    {
      label: "Confirmation",
      content: <div>Confirmation </div>,
    },
    {
      label: "Review",
      content: <div>Review </div>,
    },
  ];

  return <Stepper steps={steps} />;
}
