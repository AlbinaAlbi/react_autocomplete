import React from 'react';
import { Person } from '../../types/Person';

type DropdownItemProps = {
  people: Person;
  handleSelectPerson: (people: Person) => void;
  index: number;
};

export const DropdownItem: React.FC<DropdownItemProps> = ({
  people,
  handleSelectPerson,
  index,
}) => {
  return (
    <div
      key={index}
      className="dropdown-item"
      data-cy="suggestion-item"
      onClick={() => handleSelectPerson(people)}
    >
      <p className="has-text-link">{people.name}</p>
    </div>
  );
};
