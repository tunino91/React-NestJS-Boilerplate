import { useParams } from "react-router-dom";
import { useTheme, useThemeUpdate } from "../../../ThemeContext.tsx";

export function Book() {
  const { id } = useParams();
  const isDarkMode = useTheme();
  const updateTheme = useThemeUpdate();

  return (
    <>
      <h1>Single Book Page</h1>
      <h4>Book ID: {id}</h4>
      <button onClick={updateTheme}>isDarkMode: {`${isDarkMode}`}</button>
    </>
  );
}
