import { PointerEvent } from 'react';
import compose from 'recompose/compose';
import withStateHandlers from 'recompose/withStateHandlers';
import { Body } from './Body';

interface IBodyEnhancedState {
  output: string;
}

export var BodyEnhanced = compose(
  withStateHandlers(
    (): IBodyEnhancedState => ({
      output: undefined
    }),
    {
      onClick: () => (e: PointerEvent): Partial<IBodyEnhancedState> => {
        return { output: 'Something' };
      }
    }
  )
)(Body);

BodyEnhanced.displayName = 'enhanced(Body)';
