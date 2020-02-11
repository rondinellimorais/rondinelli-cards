declare module '@midway/template' {
  /**
   * Micro front da home
   */

  import * as React from 'react';

  /**
   * Props da home
   */
  interface HomeProps {
    name?: string,
    age?: number,
    lastName: string
  }

  /**
   * Home do app
   */
  export class Home extends React.Component<HomeProps> { }
}
