import { PROMPT } from '../../constants';
import './CommandInput.css';

const CommandInput = ({ inputRef, onCommandSubmit }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const command = e.target.value.trim();
      onCommandSubmit(command);
      e.target.value = '';
    }
  };

  return (
    <div className="input-line">
      <span className="prompt">{PROMPT}</span>
      <input
        ref={inputRef}
        type="text"
        className="command-input"
        onKeyDown={handleKeyDown}
        spellCheck="false"
        autoComplete="off"
      />
    </div>
  );
};

export default CommandInput;

