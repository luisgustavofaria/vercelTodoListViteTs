import {
  StyledHeader,
  ContainerHeader,
  ContainerHeaderDiv01,
  ContainerHeaderDiv02,
  StyledLabel,
} from './styles';
import coreNotesDesktop from '../../assets/core-notes-desktop.svg';
import deleted from '../../assets/deleted.svg';
import search from '../../assets/search.svg';
import { useState } from 'react';

interface HeaderProps {
  onSearchTodo: (searchValue: string) => void;
}
export function Header({ onSearchTodo }: HeaderProps) {
  const [searchValue, setSearchValue] = useState<string>('');

  function handleSearchValue(event: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value;
    setSearchValue(inputValue);
    onSearchTodo(inputValue);
  }

  function clearSearchValue() {
    setSearchValue('');
    onSearchTodo('');
  }

  return (
    <StyledHeader>
      <ContainerHeader>
        <ContainerHeaderDiv01>
          <img src={coreNotesDesktop} alt="core-notes-desktop" />
          <p>CoreNotes</p>
          <StyledLabel>
            <input
              type="text"
              placeholder="Pesquisar Notas"
              value={searchValue}
              onChange={handleSearchValue}
            />
            <img src={search} alt="" />
          </StyledLabel>
        </ContainerHeaderDiv01>
        <ContainerHeaderDiv02 onClick={clearSearchValue}>
          <img src={deleted} alt="" />
        </ContainerHeaderDiv02>
      </ContainerHeader>
    </StyledHeader>
  );
}
