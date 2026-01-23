import { Bio, skills, experiences, education, projects } from './portfolioData';

// Helper function to normalize project names
const normalizeProjectName = (name) => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
};

// Generate projects list HTML
const generateProjectsList = () => {
  let html = '<div class="terminal-header">REPO_INDEX</div>';
  html += '<div style="color: #aaa; margin-bottom: 15px;">Available projects. Use <span class="hl">cd &lt;project-name&gt;</span> to view details.</div><br/>';
  
  projects.forEach((project, index) => {
    const projectSlug = normalizeProjectName(project.title);
    html += `<div style="margin-bottom: 12px; padding: 10px; background: rgba(79, 195, 247, 0.05); border-left: 3px solid #4fc3f7; border-radius: 4px;">`;
    html += `<div style="color: #4fc3f7; font-weight: bold; margin-bottom: 5px;">[${index + 1}] <span class="hl">${project.title}</span></div>`;
    html += `<div style="color: #aaa; font-size: 0.9em; margin-bottom: 5px;">${project.description}</div>`;
    html += `<div style="color: #888; font-size: 0.85em; margin-bottom: 8px;">📅 ${project.date}</div>`;
    html += `<div style="display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 5px;">`;
    project.tags.forEach(tag => {
      html += `<span style="background: rgba(255, 255, 255, 0.1); color: #ccc; padding: 3px 8px; border-radius: 3px; font-size: 0.8em;">${tag}</span>`;
    });
    html += `</div>`;
    html += `<div style="color: #4fc3f7; font-size: 0.85em; margin-top: 5px;">💡 Type: <span class="hl">cd ${projectSlug}</span> to view details</div>`;
    html += `</div>`;
  });
  
  return html;
};

// Generate project details HTML
const generateProjectDetails = (project) => {
  let html = '<div class="terminal-header">PROJECT_DETAILS</div>';
  html += `<div style="margin-bottom: 20px;">`;
  html += `<div style="color: #4fc3f7; font-size: 1.3em; font-weight: bold; margin-bottom: 10px;">${project.title}</div>`;
  html += `<div style="color: #aaa; margin-bottom: 15px;">📅 ${project.date}</div>`;
  html += `</div>`;
  
  html += `<div style="margin-bottom: 20px; padding: 15px; background: rgba(79, 195, 247, 0.05); border-left: 3px solid #4fc3f7; border-radius: 4px;">`;
  html += `<div style="color: #fff; font-weight: bold; margin-bottom: 10px;">Description:</div>`;
  html += `<div style="color: #ccc; line-height: 1.6; margin-bottom: 15px;">${project.description}</div>`;
  
  if (project.fullDescription) {
    html += `<div style="color: #fff; font-weight: bold; margin-bottom: 10px; margin-top: 15px;">Full Description:</div>`;
    html += `<div style="color: #aaa; line-height: 1.6; white-space: pre-wrap; font-family: monospace; font-size: 0.9em; background: rgba(0, 0, 0, 0.3); padding: 15px; border-radius: 4px;">${project.fullDescription}</div>`;
  }
  html += `</div>`;
  
  html += `<div style="margin-bottom: 20px;">`;
  html += `<div style="color: #fff; font-weight: bold; margin-bottom: 10px;">Technologies:</div>`;
  html += `<div style="display: flex; flex-wrap: wrap; gap: 8px;">`;
  project.tags.forEach(tag => {
    html += `<span style="background: rgba(79, 195, 247, 0.2); color: #4fc3f7; padding: 6px 12px; border-radius: 4px; font-size: 0.9em; border: 1px solid rgba(79, 195, 247, 0.3);">${tag}</span>`;
  });
  html += `</div>`;
  html += `</div>`;
  
  html += `<div style="margin-bottom: 20px;">`;
  html += `<div style="color: #fff; font-weight: bold; margin-bottom: 10px;">Links:</div>`;
  html += `<div style="display: flex; flex-direction: column; gap: 8px;">`;
  if (project.github) {
    html += `<div>🔗 <a href="${project.github}" target="_blank" style="color: #4fc3f7; text-decoration: none;">GitHub Repository</a></div>`;
  }
  if (project.webapp) {
    html += `<div>🌐 <a href="${project.webapp}" target="_blank" style="color: #4fc3f7; text-decoration: none;">Live Demo</a></div>`;
  }
  html += `</div>`;
  html += `</div>`;
  
  html += `<div style="color: #888; font-size: 0.85em; margin-top: 20px; padding-top: 15px; border-top: 1px solid #333;">`;
  html += `💡 Type <span class="hl">cd ..</span> to return to projects list`;
  html += `</div>`;
  
  return html;
};

// Generate experience HTML
const generateExperienceHTML = () => {
  let html = '<div style="margin-bottom: 0;">';
  html += '<div style="color: #4fc3f7; font-size: 1.2em; font-weight: bold; border-bottom: 1px solid #333; padding-bottom: 5px; margin-bottom: 15px;">/ Experience</div>';
  html += '<div style="color: #aaa; margin-bottom: 20px; font-style: italic;">My professional journey in web development, from internships to freelance projects, showcasing continuous growth and expertise.</div>';
  
  // Sort experiences by id (descending) to show most recent first
  const sortedExperiences = [...experiences].sort((a, b) => b.id - a.id);
  
  sortedExperiences.forEach((exp) => {
    const isFreelance = exp.company === 'Freelance';
    const bgColor = isFreelance ? 'rgba(79, 195, 247, 0.05)' : 'rgba(79, 195, 247, 0.03)';
    const borderColor = isFreelance ? '#4fc3f7' : '#2ecc71';
    
    html += `<div style="margin-bottom: 20px; padding: 15px; background: ${bgColor}; border-left: 3px solid ${borderColor}; border-radius: 4px;">`;
    html += `<div style="display: flex; align-items: flex-start; gap: 15px; margin-bottom: 12px;">`;
    
    // Company badge
    const companyInitials = exp.company.substring(0, 2).toUpperCase();
    html += `<div style="width: 50px; height: 50px; background: ${isFreelance ? '#fff' : '#4fc3f7'}; color: ${isFreelance ? '#000' : '#fff'}; display: flex; align-items: center; justify-content: center; font-weight: bold; border-radius: 4px; flex-shrink: 0; font-size: ${companyInitials.length > 2 ? '0.8em' : '1em'};">${companyInitials}</div>`;
    
    html += `<div style="flex: 1;">`;
    html += `<div style="font-weight: bold; color: #fff; font-size: 1.1em; margin-bottom: 5px;">${exp.role}</div>`;
    html += `<div style="color: #ccc; margin-bottom: 5px;">${exp.company}</div>`;
    html += `<div style="color: #888; font-size: 0.9em;">${exp.date}</div>`;
    html += `</div>`;
    html += `</div>`;
    
    html += `<div style="margin-top: 15px;">`;
    html += `<div style="font-weight: bold; color: #fff; margin-bottom: 8px;">Description:</div>`;
    html += `<div style="color: #aaa; line-height: 1.6; margin-bottom: 10px;">${exp.desc}</div>`;
    html += `</div>`;
    
    if (exp.skills && exp.skills.length > 0) {
      html += `<div style="margin-top: 15px;">`;
      html += `<div style="font-weight: bold; color: #fff; margin-bottom: 8px;">Tools/Skills:</div>`;
      html += `<div style="display: flex; flex-wrap: wrap; gap: 8px;">`;
      exp.skills.forEach(skill => {
        html += `<span style="background: rgba(255, 255, 255, 0.1); color: #ccc; padding: 4px 10px; border-radius: 4px; font-size: 0.85em;">${skill}</span>`;
      });
      html += `</div>`;
      html += `</div>`;
    }
    
    html += `</div>`;
  });
  
  html += '</div>';
  return html;
};

// Generate education HTML
const generateEducationHTML = () => {
  let html = '<div style="margin-bottom: 0;">';
  html += '<div style="color: #4fc3f7; font-size: 1.2em; font-weight: bold; border-bottom: 1px solid #333; padding-bottom: 5px; margin-bottom: 15px;">ACADEMIC_RECORDS</div>';
  
  education.forEach((edu) => {
    const statusColor = edu.status === 'IN PROGRESS' ? '#ff6b6b' : '#2ecc71';
    const statusBg = edu.status === 'IN PROGRESS' ? 'rgba(255, 107, 107, 0.1)' : 'rgba(79, 195, 247, 0.03)';
    
    html += `<div style="margin-bottom: 20px; padding: 15px; background: ${statusBg}; border-left: 3px solid ${statusColor}; border-radius: 4px;">`;
    html += `<div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; margin-bottom: 10px;">`;
    html += `<div style="font-weight: bold; color: #fff; font-size: 1.1em;">${edu.school}</div>`;
    html += `<div style="color: #aaa; font-size: 0.9em;">`;
    html += `<strong>${edu.degree}</strong><br/>`;
    html += `${edu.date} <span style="background: ${statusColor}; color: #000; padding: 2px 8px; border-radius: 3px; font-size: 0.8em; margin-left: 8px;">${edu.status}</span>`;
    html += `</div>`;
    html += `</div>`;
    
    html += `<div style="color: #ccc; line-height: 1.5; margin-bottom: 12px;">${edu.desc}`;
    
    if (edu.details) {
      html += '<ul style="margin: 6px 0 6px 15px; color: #aaa; padding-left: 15px; list-style-type: none;">';
      edu.details.forEach(detail => {
        html += `<li style="margin-bottom: 4px; padding-left: 0;">• ${detail}</li>`;
      });
      html += '</ul>';
    }
    
    if (edu.sections) {
      edu.sections.forEach(section => {
        html += `<div style="margin-top: 15px; padding: 10px; background: rgba(0, 0, 0, 0.2); border-radius: 4px;">`;
        html += `<div style="color: #4fc3f7; font-weight: bold; margin-bottom: 8px;">${section.title}</div>`;
        html += '<ul style="margin: 6px 0 6px 15px; color: #aaa; padding-left: 15px; list-style-type: none;">';
        section.details.forEach(detail => {
          html += `<li style="margin-bottom: 4px; padding-left: 0;">• ${detail}</li>`;
        });
        html += '</ul>';
        html += `</div>`;
      });
    }
    
    html += `</div>`;
    
    if (edu.skills && edu.skills.length > 0) {
      html += `<div style="background: rgba(255, 255, 255, 0.05); padding: 10px; border-radius: 4px; border: 1px solid #333; font-size: 0.9em; line-height: 1.4;">`;
      html += `<strong style="color: #4fc3f7;">Key Skills:</strong>`;
      html += `<span style="color: #aaa; margin-left: 8px;">${edu.skills.join(' · ')}</span>`;
      html += `</div>`;
    }
    
    html += `</div>`;
  });
  
  html += '</div>';
  return html;
};

export const COMMANDS_DATA = {
  help:
    '<div class="terminal-header">SYSTEM_CORE_COMMANDS</div>' +
    '- <span class="hl">about</span>      : Display kernel maintainer profile<br/>' +
    '- <span class="hl">skills</span>     : List verified technical modules<br/>' +
    '- <span class="hl">experience</span> : Print deployment history logs<br/>' +
    '- <span class="hl">projects</span>   : View selected repository indexes<br/>' +
    '- <span class="hl">education</span>  : Access academic certification records<br/>' +
    '- <span class="hl">contact</span>    : Initialize secure connection packet<br/>' +
    '- <span class="hl">clear</span>      : Reset terminal display buffer<br/>' +
    '- <span class="hl">help</span>       : Show this manual page',

  about:
    '<div class="terminal-header">MAINTAINER_PROFILE</div>' +
    `<strong>Name:</strong> <span class="hl">${Bio.name}</span><br/>` +
    '<strong>Role:</strong> <span class="hl">Software Engineer & DevOps Specialist</span><br/><br/>' +
    '<div class="about-roles">' +
    Bio.roles.map(role => `  <span class="role-tag">${role}</span>`).join('') +
    '</div><br/>' +
    '<strong>Mission:</strong><br/>' +
    Bio.description + '<br/><br/>' +
    '<strong>Expertise:</strong><br/>' +
    'My expertise is centered on driving digital innovation as a Full Stack Engineer. ' +
    'I specialize in crafting robust front-end user experiences with modern frameworks ' +
    'like Angular and React and securing powerful, data-driven back-end systems using ' +
    'NestJS and Laravel. What truly sets my approach apart is my strong grounding in ' +
    'DevOps principles: leveraging Docker for seamless application containerization and ' +
    'implementing automated CI/CD pipelines (e.g., GitHub Actions) to ensure rapid, ' +
    'high-quality deployments. My mission is simple: transform ambitious concepts into ' +
    'elegant, scalable, and future-proof digital products by mastering the full ' +
    'development lifecycle, from initial architecture to final cloud deployment.',

  skills:
    '<div class="terminal-header">TECHNICAL_MODULES</div>' +
    '[FRONTEND] : React, Next.js, Angular, TypeScript, bootstrap ,Tailwind<br/>' +
    '[BACKEND]  : Node.js, Express, Laravel, Nest js<br/>' +
    '[DATABASE] : PostgreSQL, MongoDB, Redis, MySQL<br/>' +
    '[DEVOPS]   : Docker, Kubernetes , ansible , CI/CD, AWS, Terraform',

  experience: generateExperienceHTML(),

  projects: generateProjectsList(),
  getProjectDetails: generateProjectDetails,

  education: generateEducationHTML(),

  contact:
    '<div class="terminal-header">CONNECTION_PROTOCOL</div>' +
    `# EMAIL    : <span class="hl"><a href="mailto:dev.mohamedalizbaira@gmail.com" style="color: #4fc3f7; text-decoration: none; cursor: pointer;">dev.mohamedalizbaira@gmail.com</a></span><br/>` +
    `# LINKEDIN : <span class="hl"><a href="${Bio.linkedin}" target="_blank" rel="noopener noreferrer" style="color: #4fc3f7; text-decoration: none; cursor: pointer;">LinkedIn Profile</a></span><br/>` +
    `# GITHUB   : <span class="hl"><a href="${Bio.github}" target="_blank" rel="noopener noreferrer" style="color: #4fc3f7; text-decoration: none; cursor: pointer;">GitHub Profile</a></span><br/>` +
    `# INSTAGRAM: <span class="hl"><a href="${Bio.insta}" target="_blank" rel="noopener noreferrer" style="color: #4fc3f7; text-decoration: none; cursor: pointer;">Instagram Profile</a></span><br/>` ,
    
};

export const TERMINAL_INFO = {
  version: 'v2.0.4-stable',
  system: 'Linux 5.15.0-generic x86_64',
  user: 'guest@mohamedalizbaira',
  status: 'Connection Secure',
};

export const ASCII_ART = `cat << "EOF"

  ◢◤ LINUX TERMINAL ◢◤
  ──────────────────────────────────────────────────────────────
  ● STATUS   :  ACTIVE
  ● LOAD     :  $(uptime | awk -F'average:' '{ print $2 }')
  ● TASKS    :  $(ps ax | wc -l | tr -d ' ') running
  ──────────────────────────────────────────────────────────────

EOF`;

