declare module 'evergreen-ui';

declare module 'evergreen-ui-extend' {
  interface OptionShapePropType {
    label: string;
    value: string | number;
    labelInList?: string;
  }
}

interface DataView {
  getString: (offset: number, length: number) => string;
}
