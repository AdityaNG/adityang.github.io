import React from 'react';


function Footer({author_name, author_email, author_url}) {
    /**
     * Displays:
     * Author Name
     * Author Email
    */
  return (
    <div>
      <a href={`${author_url}`} style={{fontSize: '14px', textDecoration: 'none'}}>{author_name}</a>
      <br/>
      <a href={`mailto:${author_email}`} style={{fontSize: '11px', textDecoration: 'none'}}>{author_email}</a>
    </div>
  );
}

export default Footer;
