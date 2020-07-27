import * as React from "react";
import Card from "../../styleguide/Card";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

import Entry from "../../../models/Entry";

import entries from "../../../data/entries.json";

const entriesObject: { [key: string]: Entry } = entries;
const entriesKeys: Array<string> = Object.keys(entriesObject);

const getRandomEntry: (seenIds: Array<number>) => Entry = (seenIds) => {
  const filteredEntriesKeys = entriesKeys.filter(
    (entryKey) => !seenIds.includes(+entryKey)
  );
  const index = Math.floor(Math.random() * filteredEntriesKeys.length + 1);
  return entriesObject[index];
};

interface Props {
  openWaitingList: () => void;
}

const CardSection = ({ openWaitingList }: Props) => {
  const [seenEntries, setSeenEntries] = React.useState<Array<number>>([]);
  const [entry, setEntry] = React.useState(getRandomEntry(seenEntries));
  return (
    <Card
      center
      entry={entry}
      entriesCount={entriesKeys.length}
      actions={[
        <ButtonGroup
          color="primary"
          aria-label="outlined primary button group"
          size="small"
        >
          <Button
            onClick={() => {
              const entries = seenEntries.concat([entry.id]);
              if (entries.length === entriesKeys.length) {
                openWaitingList();
              } else {
                setSeenEntries(entries);
                setEntry(getRandomEntry(entries));
              }
            }}
          >
            Mot suivant
          </Button>
        </ButtonGroup>,
      ]}
    />
  );
};

export default CardSection;
