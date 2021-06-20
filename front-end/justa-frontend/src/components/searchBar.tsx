import React from 'react';

interface Props {
  changeSearchTerm: (arg0: string) => void;
}

const SearchBar: React.FC<Props> = ({ changeSearchTerm }: Props) => {
  const handleInputChange = (evento: React.ChangeEvent<HTMLInputElement>) => {
    changeSearchTerm(evento.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Digite aqui"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
