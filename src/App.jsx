import { useTerminal } from './hooks/useTerminal';
import TerminalPanel from './components/TerminalPanel/TerminalPanel';
import OutputPanel from './components/OutputPanel/OutputPanel';
import './App.css';

function App() {
  const { commandHistory, currentOutput, executeCommand, inputRef, currentPath } =
    useTerminal();

  return (
    <div className="container">
      <TerminalPanel
        commandHistory={commandHistory}
        onCommandSubmit={executeCommand}
        inputRef={inputRef}
        currentPath={currentPath}
      />
      <OutputPanel output={currentOutput} />
    </div>
  );
}

export default App;
