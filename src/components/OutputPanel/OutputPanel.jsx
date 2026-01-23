import { useEffect, useRef } from 'react';
import './OutputPanel.css';

const OutputPanel = ({ output }) => {
  const outputRef = useRef(null);

  // Function to detect browser language and download appropriate CV
  const handleDownloadCV = () => {
    const browserLang = navigator.language || navigator.userLanguage;
    const cvPath = browserLang.startsWith('fr') 
      ? '/Cv/CV-Mohamed-Ali-Zbaira-Fr.pdf' 
      : '/Cv/CV-Mohamed-Ali-Zbaira-ANG.pdf';
    
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = browserLang.startsWith('fr') 
      ? 'CV-Mohamed-Ali-Zbaira-Fr.pdf' 
      : 'CV-Mohamed-Ali-Zbaira-ANG.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = 0;
    }
  }, [output]);

  // Expose function to global window for onclick handlers
  useEffect(() => {
    window.downloadCV = handleDownloadCV;
  }, []);

  const welcomeMessage =
  '<div style="text-align: center; margin-bottom: 20px;">' +
  '<span style="color: #fff; font-size: 1.3em; font-weight: 600; letter-spacing: 0.5px;">🚀 Welcome to My Interactive Portfolio</span>' +
  '</div>' +
  '<div style="max-width: 800px; margin: 0 auto; line-height: 1.6;">' +
  '<p style="color: #e0e0e0; margin-bottom: 15px;">' +
  'Explore my professional journey through this terminal interface. I\'ve designed this experience to showcase my skills and projects in an engaging way. I hope you find it insightful. Here, I\'ve compiled a comprehensive overview' +
  '</p>' +
  '<div style="color: #e0e0e0; margin: 20px 0; padding-left: 10px;">' +
  '• <span style="color: #4fc3f7; font-weight: 500;">Professional Experience</span><br/>' +
  '• <span style="color: #4fc3f7; font-weight: 500;">Technical Skills</span><br/>' +
  '• <span style="color: #4fc3f7; font-weight: 500;">Projects Portfolio</span><br/>' +
  '• <span style="color: #4fc3f7; font-weight: 500;">Educational Background</span><br/><br/>' +
  '</div>' +
  '<div style="background: rgba(255, 107, 107, 0.1); padding: 20px; border-radius: 12px; margin: 25px 0; border: 1px solid rgba(255, 107, 107, 0.3); text-align: center;">' +
  '<div style="display: flex; flex-direction: column; align-items: center; gap: 20px;">' +
  '<div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; align-items: center;">' +
  '<div onclick="window.downloadCV && window.downloadCV()" style="cursor: pointer; display: flex; align-items: center; gap: 12px; background: linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 100%); color: white; padding: 14px 28px; border-radius: 10px; font-weight: 600; transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);" ' +
  'onmouseover="this.style.transform=\'translateY(-3px)\'; this.style.boxShadow=\'0 8px 25px rgba(255, 107, 107, 0.4)\'" ' +
  'onmouseout="this.style.transform=\'translateY(0)\'; this.style.boxShadow=\'0 4px 15px rgba(255, 107, 107, 0.3)\'">' +
  '<span style="font-size: 1.2em;">📄</span>' +
  '<span>Download Resume</span>' +
  '</div>' +
  '<div style="color: #666; font-size: 0.9em; align-self: center;">or connect with me</div>' +
  '<div style="display: flex; gap: 15px; align-items: center;">' +
  '<a href="https://www.linkedin.com/in/mohamed-ali-zbaira/" target="_blank" rel="noopener noreferrer" style="text-decoration: none;">' +
  '<div style="display: flex; align-items: center; justify-content: center; width: 52px; height: 52px; background: rgba(10, 102, 194, 0.2); border-radius: 12px; transition: all 0.3s ease; border: 1px solid rgba(10, 102, 194, 0.3); position: relative;" ' +
  'onmouseover="this.style.background=\'rgba(10, 102, 194, 0.3)\'; this.style.transform=\'scale(1.1)\'" ' +
  'onmouseout="this.style.background=\'rgba(10, 102, 194, 0.2)\'; this.style.transform=\'scale(1)\'">' +
  '<svg width="26" height="26" viewBox="0 0 24 24" fill="#0a66c2">' +
  '<path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>' +
  '</svg>' +
  '<div style="position: absolute; bottom: -25px; font-size: 0.7em; color: #0a66c2; opacity: 0; transition: opacity 0.3s ease;">LinkedIn</div>' +
  '</div>' +
  '</a>' +
  '<a href="https://github.com/Mohamed-Ali-Zbaira" target="_blank" rel="noopener noreferrer" style="text-decoration: none;">' +
  '<div style="display: flex; align-items: center; justify-content: center; width: 52px; height: 52px; background: rgba(255, 255, 255, 0.1); border-radius: 12px; transition: all 0.3s ease; border: 1px solid rgba(255, 255, 255, 0.2); position: relative;" ' +
  'onmouseover="this.style.background=\'rgba(255, 255, 255, 0.2)\'; this.style.transform=\'scale(1.1)\'" ' +
  'onmouseout="this.style.background=\'rgba(255, 255, 255, 0.1)\'; this.style.transform=\'scale(1)\'">' +
  '<svg width="26" height="26" viewBox="0 0 24 24" fill="#fff">' +
  '<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>' +
  '</svg>' +
  '<div style="position: absolute; bottom: -25px; font-size: 0.7em; color: #fff; opacity: 0; transition: opacity 0.3s ease;">GitHub</div>' +
  '</div>' +
  '</a>' +
  '</div>' +
  '</div>' +
  '<div style="color: #aaa; font-size: 0.85em; margin-top: 10px; font-style: italic;">' +
  'Click on any button to explore further' +
  '</div>' +
  '</div>' +
  '</div>' +
  '</div>';

  return (
    <div className="output-panel">
      <div className="panel-title">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ color: '#4fc3f7' }}>▶</span>
          <span>COMMAND OUTPUT</span>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, #333, #4fc3f7, #333)', marginLeft: '15px' }}></div>
        </div>
      </div>
      <div className="command-output" ref={outputRef}>
        <div
          className="output"
          style={{ color: output ? '#ccc' : '#fff' }}
          dangerouslySetInnerHTML={{
            __html: output || welcomeMessage,
          }}
        />
      </div>
    </div>
  );
};

export default OutputPanel;