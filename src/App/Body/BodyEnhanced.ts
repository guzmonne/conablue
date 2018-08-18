import { OptionShapePropType } from 'evergreen-ui-extend';
import compose from 'recompose/compose';
import withStateHandlers from 'recompose/withStateHandlers';
import withHandlers from 'recompose/withHandlers';
import withProps from 'recompose/withProps';
import { Bluetooth } from '../../modules/bluetooth';
import { Body } from './Body';

interface IBodyEnhancedState {
  output: string;
  setOutput: (output: string) => void;
  setLoading: (loading: boolean) => void;
  setState: (state: Partial<IBodyEnhancedState>) => Partial<IBodyEnhancedState>;
  bluetooth: Bluetooth;
  selected: OptionShapePropType;
  loading: boolean;
  error: Error;
}

var OPTIONS = [
  {
    label: 'Default Info',
    value: 'default_info'
  },
  {
    label: 'Battery Level',
    value: 'battery_level'
  },
  {
    label: 'Device Information',
    value: 'device_information'
  }
];

export var BodyEnhanced = compose(
  withProps({
    options: OPTIONS,
    bluetooth: new Bluetooth()
  }),
  withStateHandlers(
    (): Partial<IBodyEnhancedState> => ({
      output: undefined,
      selected: OPTIONS[0],
      loading: false,
      error: undefined
    }),
    {
      setOutput: () => (output: string): Partial<IBodyEnhancedState> => ({
        output
      }),
      setSelected: () => (
        selected: OptionShapePropType
      ): Partial<IBodyEnhancedState> => ({
        selected
      }),
      setLoading: () => (loading: boolean) => ({ loading }),
      setState: () => (state: Partial<IBodyEnhancedState>) => state
    }
  ),
  withHandlers({
    onSelect: ({ setSelected }) => (selected: OptionalEffectTiming) =>
      setSelected(selected),
    onClick: ({
      setState,
      selected,
      bluetooth
    }: Partial<IBodyEnhancedState>) => async () => {
      var output: string;
      var error: Error;

      setState({
        loading: true,
        error: undefined
      });

      try {
        switch (selected.value) {
          case 'default_info':
            output = await bluetooth.defaultInfo();
            break;
          case 'battery_level':
            output = await bluetooth.batteryLevel();
            break;
          case 'device_information':
            output = await bluetooth.deviceInformation();
            break;
          default:
            output = 'Selected action has no method attached';
        }
      } catch (err) {
        error = err;
        console.error(err);
      }

      setState({
        output,
        error,
        loading: false
      });
    }
  })
)(Body);

async function connect(): Promise<string> {
  return 'string';
}

BodyEnhanced.displayName = 'enhanced(Body)';
