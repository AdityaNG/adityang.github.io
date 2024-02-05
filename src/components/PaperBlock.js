import React, { useState } from 'react';

import Button from '@mui/material/Button';

import './PaperBlock.css';

function PaperBlock({ title, image, conference, bibtext_plain, bibtext, tldr, links, project_page /* assuming links is an array of {key, value} objects */ }) {
  const [showBibtex, setShowBibtex] = useState(false);

  return (
    <div className="paper-block">
      <div className="header">
        <h2>{title}</h2>
        <p>{conference}</p>
      </div>
      <div className="content">
        <div className="left">
        <a href={project_page}>
            <img src={image} alt={title} style={{maxWidth: '50vh', padding: '20px'}}/>
        </a>
          <div className="links">
            {links.map(link => (
              <Button key={link.key} href={link.value}>{link.key}</Button>
            ))}
          </div>
        </div>
        <div className="right" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <p className="tldr">{tldr}</p>
          <div className="citation">
            <h3>Citation</h3>
            <p style={{fontSize: 'small'}}>{bibtext_plain}</p>
            <Button onClick={() => setShowBibtex(!showBibtex)}>Bibtex</Button>
            {showBibtex ? <pre className="bibtext">{bibtext}</pre> : <pre className="bibtext hidden">{bibtext}</pre>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaperBlock;