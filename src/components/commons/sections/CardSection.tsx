import * as React from "react";
import Card from "../../styleguide/Card";
import ActionButton from "../../styleguide/ActionButton";

import Entry from "../../../models/Entry";

import entries from "../../../data/entries.json";

const entriesArray: { [key: string]: Entry } = entries;
const entriesKeys: Array<string> = Object.keys(entriesArray);
const getRandomEntry: () => Entry = () =>
  entriesArray[entriesKeys[Math.floor(Math.random() * entriesKeys.length)]];

interface Props {
  openRegister: () => void;
}
const CardSection = ({ openRegister }: Props) => {
  const [entry, setEntry] = React.useState(getRandomEntry());
  return (
    <Card
      center
      entry={entry}
      entriesCount={20}
      actions={[
        <ActionButton
          onClick={() => {
            setEntry(getRandomEntry());
          }}
          key="random"
          icon="random"
        >
          Aleatoire
        </ActionButton>,
        <ActionButton
          onClick={() => {
            openRegister();
          }}
          key="heart"
          icon="heart"
        >
          Sauvegarder
        </ActionButton>,
      ]}
    />
  );
};

export default CardSection;
