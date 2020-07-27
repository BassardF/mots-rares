import * as React from "react";

import LPTitle from "../commons/LPTitle";
import Flex from "../styleguide/Flex";
import Spacer from "../styleguide/Spacer";
import Header from "../styleguide/Header";
import Entry from "../../models/Entry";
import { GREY, PURPLE } from "../../constants/colors";

import entries from "../../data/entries.json";

const dictionaryEntries = Object.values(entries).reduce(
  (acc: { [key: string]: Array<Entry> }, entry: Entry) => {
    const firstLetter = entry.word[0];
    if (acc[firstLetter]) acc[firstLetter].push(entry);
    else acc[firstLetter] = [entry];
    return acc;
  },
  {}
);

const Dictionnaire = () => {
  const [selectedKey, setSelectedKey] = React.useState<string | undefined>();
  return (
    <>
      <LPTitle
        side="left"
        title="Tournez les pages de notre dictionnaire"
        description={
          <>
            <div>Voici l'ensemble de notre collection</div>
          </>
        }
      />
      <Spacer spacing={10} />
      <Flex justifyContent="center">
        {Object.keys(dictionaryEntries).map((key: string) => (
          <Header
            key={key}
            color={selectedKey === key ? PURPLE : GREY}
            size="l"
            bold={selectedKey === key}
            onClick={() => setSelectedKey(key)}
          >
            {key}
          </Header>
        ))}
      </Flex>
    </>
  );
};

export default Dictionnaire;
