import { PROMPT } from '../../constants';
import './CommandHistory.css';

const CommandHistory = ({ commands }) => {
  return (
    <>
      {commands.map((command, index) => (
        <div key={index} className="command-history">
          <span className="prompt">{PROMPT}</span>{' '}
          <span className="command">{command}</span>
        </div>
      ))}
    </>
  );
};

export default CommandHistory;

