import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import * as classes from './character-collection.styles';
import { CharacterCard } from './components/character-card.component';
import { useNavigate } from 'react-router-dom';

interface Props {
  characterCollection: CharacterEntityVm[];
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection } = props;
  const navigate = useNavigate();

  return (
    <div className={classes.list}>
      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li
            onClick={() => navigate(`/characters/${character.id}`)}
            key={character.id}
          >
            <CharacterCard character={character} />
          </li>
        ))}
      </ul>
    </div>
  );
};
