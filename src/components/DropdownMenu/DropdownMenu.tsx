import React from 'react';
import { Person } from '../../types/Person';
import { DropdownItem } from '../DropdownItem/DropdownItem';

type DropdownMenuProps = {
  handleSelectPerson: (people: Person) => void;
  shouldShowContent: boolean;
  filteredPeople: Person[];
};

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  handleSelectPerson,
  shouldShowContent,
  filteredPeople,
}) => {
  return (
    <div className="dropdown-menu" role="menu" data-cy="suggestions-list">
      {shouldShowContent && (
        <div className="dropdown-content">
          {filteredPeople.map((people, index) => (
            <DropdownItem
              key={index}
              index={index}
              people={people}
              handleSelectPerson={handleSelectPerson}
            />
          ))}
        </div>
      )}
    </div>
  );
};
