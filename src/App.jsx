import { useTerminal } from './hooks/useTerminal';
import TerminalPanel from './components/TerminalPanel/TerminalPanel';
import OutputPanel from './components/OutputPanel/OutputPanel';
import './App.css';

function App() {
  const { commandHistory, currentOutput, executeCommand, inputRef } =
    useTerminal();

  return (
    <div className="container">
      <TerminalPanel
        commandHistory={commandHistory}
        onCommandSubmit={executeCommand}
        inputRef={inputRef}
      />
      <OutputPanel output={currentOutput} />
    </div>
  );
}

export default App;
