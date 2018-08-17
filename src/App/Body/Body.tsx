import * as React from 'react';
import { Button } from 'evergreen-ui';

interface IBodyProps {
  onClick: (e: React.PointerEvent) => void;
  output?: string;
}

export var Body: React.SFC<IBodyProps> = ({ onClick, output }) => (
  <div className="Body">
    <Button onClick={onClick} appearance="blue">
      Connect
    </Button>
    <label>Output:</label>
    <pre>{output}</pre>
  </div>
);
