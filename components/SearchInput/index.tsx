import { useState } from "react";
import { useAppContext } from "../../contexts/AppContext";
import styles from "./styles.module.css";
import SearchIcon from './Vector.svg'

type Props = {

  onSearch: (searchValue: string) => void;
};

export const SearchInput = ({ onSearch }: Props) => {
  const {tenant} = useAppContext();
  const [focused, setFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      onSearch(searchValue);
    }
  };

  return (
    <div
      className={styles.container}
      style={{ borderColor: focused ? tenant?.mainColor : "#FFFFFF" }}
    >
      <div
        className={styles.button}
        onClick={() => onSearch(searchValue)}
      >
        <SearchIcon color={tenant?.mainColor}></SearchIcon>
      </div>
      <input
        placeholder="Digite o nome produto..."
        type="text"
        className={styles.input}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onKeyUp={handleKeyUp}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
};
