import * as React from 'react';

export var Footer: React.SFC = () => (
  <div className="Footer">
    <h4 className="copyright">
      <span>Copyright - CONATEL {new Date().getFullYear()}</span>
    </h4>
  </div>
);

Footer.displayName = 'Footer';
