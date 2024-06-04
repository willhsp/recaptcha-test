import RecaptchaIFrame from './RecaptchaIFrame';
import './App.css';

const App = () => {
  const handleVerify = (response) => {
      console.log('reCAPTCHA response:', response);
      // Handle the reCAPTCHA response (e.g., send it to your server)
  };

  return (
      <div>
          <h1>Google reCAPTCHA in React</h1>
          <RecaptchaIFrame onVerify={handleVerify} />
      </div>
  );
};

export default App;
