import { useState, useRef, useEffect } from 'react';
import { COMMANDS_DATA } from '../data/commands';
import { projects } from '../data/portfolioData';

export const useTerminal = () => {
  const [commandHistory, setCommandHistory] = useState([]);
  const [currentOutput, setCurrentOutput] = useState('');
  const [currentPath, setCurrentPath] = useState('/');
  const [currentProject, setCurrentProject] = useState(null);
  const inputRef = useRef(null);

  // Helper function to normalize project names for matching
  const normalizeProjectName = (name) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
  };

  // Helper function to find project by name
  const findProjectByName = (projectName) => {
    const normalized = normalizeProjectName(projectName);
    return projects.find((project) => {
      const projectNormalized = normalizeProjectName(project.title);
      return projectNormalized === normalized || 
             projectNormalized.includes(normalized) ||
             normalized.includes(projectNormalized);
    });
  };

  const executeCommand = (command) => {
    const trimmedCommand = command.trim();
    const commandLower = trimmedCommand.toLowerCase();

    if (trimmedCommand === '') {
      setCurrentOutput('// No command entered');
      return;
    }

    // Add command to history
    setCommandHistory((prev) => [...prev, trimmedCommand]);

    if (commandLower === 'clear') {
      setCommandHistory([]);
      setCurrentOutput('// Terminal cleared');
      setCurrentPath('/');
      setCurrentProject(null);
      return;
    }

    // Handle cd command
    if (commandLower.startsWith('cd ')) {
      const projectName = trimmedCommand.substring(3).trim();
      
      if (projectName === '..' || projectName === '/') {
        setCurrentPath('/');
        setCurrentProject(null);
        setCurrentOutput(COMMANDS_DATA.projects);
        return;
      }

      const project = findProjectByName(projectName);
      if (project) {
        setCurrentProject(project);
        setCurrentPath(`/projects/${normalizeProjectName(project.title)}`);
        setCurrentOutput(COMMANDS_DATA.getProjectDetails(project));
      } else {
        setCurrentOutput(
          `<span class="error">Error:</span> Project "${projectName}" not found. Use "projects" to see available projects.`
        );
      }
      return;
    }

    // Handle projects command
    if (commandLower === 'projects') {
      setCurrentPath('/');
      setCurrentProject(null);
      setCurrentOutput(COMMANDS_DATA.projects);
      return;
    }

    // Handle other commands
    if (COMMANDS_DATA[commandLower]) {
      setCurrentOutput(COMMANDS_DATA[commandLower]);
      return;
    }

    // If we're in the projects list and command is not a system command, try to find a project
    if (currentPath === '/' && currentProject === null) {
      const project = findProjectByName(trimmedCommand);
      if (project) {
        setCurrentProject(project);
        setCurrentPath(`/projects/${normalizeProjectName(project.title)}`);
        setCurrentOutput(COMMANDS_DATA.getProjectDetails(project));
        return;
      }
    }

    // Command not found
    setCurrentOutput(
      `<span class="error">System error:</span> command "${commandLower}" not found. Use "help" for a list of valid modules.`
    );
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
    currentPath,
    currentProject,
  };
};

