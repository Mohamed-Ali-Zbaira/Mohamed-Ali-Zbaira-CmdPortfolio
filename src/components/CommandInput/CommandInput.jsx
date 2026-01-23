import { PROMPT } from '../../constants';
import './CommandInput.css';

const CommandInput = ({ inputRef, onCommandSubmit, currentPath }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const command = e.target.value.trim();
      onCommandSubmit(command);
      e.target.value = '';
    }
  };

  // Extract just the project name from the path for display (use shorter format)
  let displayPath = PROMPT;
  if (currentPath !== '/' && currentPath.startsWith('/projects/')) {
    const projectSlug = currentPath.replace('/projects/', '');
    // Use a shorter display: take first part before first dash or limit to 20 chars
    const shortName = projectSlug.split('-')[0] || projectSlug.substring(0, 20);
    displayPath = `${PROMPT}${shortName}`;
  } else if (currentPath === '/') {
    displayPath = PROMPT;
  } else {
    displayPath = `${PROMPT}${currentPath}`;
  }

  return (
    <div className="input-line">
      <span className="prompt">{displayPath}</span>
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

