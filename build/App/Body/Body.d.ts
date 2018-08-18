import * as React from 'react';
import { OptionShapePropType } from 'evergreen-ui-extend';
export interface IBodyProps {
    onClick: (e: React.PointerEvent) => void;
    onSelect: (selected: OptionShapePropType) => void;
    output?: string;
    options: OptionShapePropType[];
    selected?: OptionShapePropType;
    loading?: boolean;
}
export declare var Body: React.SFC<IBodyProps>;
