import React from 'react';
import {Header} from 'react-native-elements';
import {CustomHeaderProps} from './types';
import {styles} from './styles';

const CustomHeader: React.FC<CustomHeaderProps> = ({title}) => {
  return (
    <Header
      style={styles.container}
      centerComponent={{text: title, style: {color: '#fff', fontSize: 22}}}
    />
  );
};

export default CustomHeader;
