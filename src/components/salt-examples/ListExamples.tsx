import { StackLayout } from "@salt-ds/core";
import { List } from "@salt-ds/lab";

const shortColorData = [
  "Baby blue",
  "Black",
  "Blue",
  "Brown",
  "Green",
  "Orange",
  "Pink",
  "Purple",
  "Red",
  "White",
  "Yellow",
];

export const ListExamples = () => {
  return (
    <StackLayout>
      <List
        source={shortColorData}
        defaultSelected={[shortColorData[3], shortColorData[5]]}
        selectionStrategy="multiple"
      />
    </StackLayout>
  );
};
