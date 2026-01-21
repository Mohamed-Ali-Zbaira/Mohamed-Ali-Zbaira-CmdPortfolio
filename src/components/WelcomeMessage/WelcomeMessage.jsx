import { TERMINAL_INFO } from '../../data/commands';
import './WelcomeMessage.css';

const WelcomeMessage = () => {
  return (
    <div className="welcome-message">
      M.A.ZBAIRA TERMINAL [{TERMINAL_INFO.version}]<br />
      System: {TERMINAL_INFO.system}<br />
      User: {TERMINAL_INFO.user}<br />
      Status: {TERMINAL_INFO.status}
      <br />
      <br />
      Welcome, Commander. Unauthorized access is monitored.
      <br />
      Type 'help' to see available system commands.
    </div>
  );
};

export default WelcomeMessage;

