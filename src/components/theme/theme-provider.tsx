import { ThemeProvider as Provider } from "next-themes";

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <Provider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </Provider>
  );
};

export { ThemeProvider };
