import { useRef, useEffect } from 'react';
import AsciiArt from '../AsciiArt/AsciiArt';
import WelcomeMessage from '../WelcomeMessage/WelcomeMessage';
import CommandHistory from '../CommandHistory/CommandHistory';
import CommandInput from '../CommandInput/CommandInput';
import './TerminalPanel.css';

const TerminalPanel = ({ commandHistory, onCommandSubmit, inputRef }) => {
  const terminalRef = useRef(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commandHistory]);

  return (
    <div className="terminal-panel">
      <div className="panel-title">TERMINAL ACCESS</div>
      <div className="terminal" ref={terminalRef}>
        <AsciiArt />
        <WelcomeMessage />
        <CommandHistory commands={commandHistory} />
        <CommandInput inputRef={inputRef} onCommandSubmit={onCommandSubmit} />
      </div>
    </div>
  );
};

export default TerminalPanel;

