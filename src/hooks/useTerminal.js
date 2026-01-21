import { useState, useRef, useEffect } from 'react';
import { COMMANDS_DATA } from '../data/commands';

export const useTerminal = () => {
  const [commandHistory, setCommandHistory] = useState([]);
  const [currentOutput, setCurrentOutput] = useState('');
  const inputRef = useRef(null);

  const executeCommand = (command) => {
    const trimmedCommand = command.trim().toLowerCase();

    if (trimmedCommand === '') {
      setCurrentOutput('// No command entered');
      return;
    }

    // Add command to history
    setCommandHistory((prev) => [...prev, command]);

    if (trimmedCommand === 'clear') {
      setCommandHistory([]);
      setCurrentOutput('// Terminal cleared');
      return;
    }

    if (COMMANDS_DATA[trimmedCommand]) {
      setCurrentOutput(COMMANDS_DATA[trimmedCommand]);
    } else {
      setCurrentOutput(
        `<span class="error">System error:</span> command "${trimmedCommand}" not found. Use "help" for a list of valid modules.`
      );
    }
  };

  useEffect(() => {
    // Focus input on mount and when clicking anywhere
    const handleClick = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    document.addEventListener('click', handleClick);
    if (inputRef.current) {
      inputRef.current.focus();
    }

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return {
    commandHistory,
    currentOutput,
    executeCommand,
    inputRef,
  };
};

