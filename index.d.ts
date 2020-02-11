declare module '@rondinellimorais/cards' {
  import * as React from 'react';

  /**
   * Props marota
   */
  export interface RondProps {
    age?: number,
    name: string,
    method?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  }

  /**
   * Screen principal do componente
   */
  export class Cards extends React.Component<RondProps> { }
}