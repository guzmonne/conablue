import * as React from 'react';
import classnames from 'classnames';
import { Button, SelectMenu } from 'evergreen-ui';
import { OptionShapePropType } from 'evergreen-ui-extend';

export interface IBodyProps {
  onClick: (e: React.PointerEvent) => void;
  onSelect: (selected: OptionShapePropType) => void;
  output?: string;
  options: OptionShapePropType[];
  selected?: OptionShapePropType;
  loading?: boolean;
  error?: Error;
}

export var Body: React.SFC<IBodyProps> = ({
  onClick,
  onSelect,
  output,
  options,
  selected,
  loading,
  error
}) => (
  <div className="Body">
    <div className="Body__actions">
      <SelectMenu
        title={selected.label}
        options={options}
        selected={selected.value}
        onSelect={onSelect}
      >
        <Button appearance="ghostBlue">
          {selected.label || 'Select action'}
        </Button>
      </SelectMenu>
      <Button onClick={onClick} appearance="blue">
        Connect
      </Button>
    </div>
    <label>Output:</label>
    <pre
      className={classnames({
        error: error
      })}
    >
      {loading ? 'Loading...' : error ? error.message : output}
    </pre>
  </div>
);

Body.displayName = 'Body';
