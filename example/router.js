import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import {Cards, ProfileNew} from '@rondinellimorais/cards';

const switchNavigator = createSwitchNavigator({
  Cards,
  ProfileNew,
});

export default createAppContainer(switchNavigator);
