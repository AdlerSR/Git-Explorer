import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';

import { SwitcherContainer } from './styles';

interface Props {
  toggleTheme(): void;
}

// eslint-disable-next-line react/prop-types
const ThemeSwitcher: React.FC<Props> = ({ toggleTheme }) => {
  const { color, title } = useContext(ThemeContext);
  return (
    <SwitcherContainer>
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={15}
        width={40}
        handleDiameter={20}
        offColor={color.text}
        onColor={color.secundary}
      />
    </SwitcherContainer>
  );
};

export default ThemeSwitcher;
