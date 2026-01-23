import { useMantineColorScheme } from "@mantine/core";

const useManageTheme = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  const ThemeObj = [
    {
      textFooter: 'System',
      src: '/mode/systemTheme.svg',
      alt: 'System default theme preview',
      handleClick: () => setColorScheme('auto'),
      active: colorScheme === 'auto'
    },
    {
      textFooter: 'Light',
      src: '/mode/lightTheme.svg',
      alt: 'Light theme preview',
      handleClick: () => setColorScheme('light'),
      active: colorScheme === 'light'
    },
    {
      textFooter: 'Dark',
      src: '/mode/darkTheme.svg',
      alt: 'Dark theme preview',
      handleClick: () => setColorScheme('dark'),
      active: colorScheme === 'dark'
    },
  ];
  console.log('color scheme :', colorScheme);
  
  return {
    ThemeObj,
    colorScheme,
  }
}

export { useManageTheme }
