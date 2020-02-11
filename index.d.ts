declare module '@rondinelli/cards' {
  import * as React from 'react';

  /**
   * Props marota
   */
  interface RondProps {
    age?: number,
    name: string,
    method?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  }

  /**
   * Screen principal do componente
   */
  class Cards extends React.Component<RondProps> { }
}