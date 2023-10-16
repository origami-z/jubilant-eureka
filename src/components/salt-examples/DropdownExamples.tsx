import { StackLayout } from "@salt-ds/core";
import { DropdownNext } from "@salt-ds/lab";
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
export const DropdownExamples = () => {
  return (
    <StackLayout>
      <DropdownNext source={shortColorData} defaultSelected="Blue" />
    </StackLayout>
  );
};
