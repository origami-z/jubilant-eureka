import { ReactElement } from "react";
import {
  Accordion,
  AccordionGroup,
  AccordionHeader,
  AccordionPanel,
  FlexLayout,
  FlowLayout,
  FormField,
  FormFieldLabel as FormLabel,
  Input,
  StackLayout,
  AccordionProps,
} from "@salt-ds/core";

const Group = (): ReactElement => (
  <FlexLayout style={{ width: "80%" }}>
    <AccordionGroup style={{ alignSelf: "self-start" }}>
      {Array.from({ length: 3 }, (_, i) => i + 1).map((i) => (
        <Accordion value={`accordion-${i}`} key={`accordion-${i}`}>
          <AccordionHeader>Internal form</AccordionHeader>
          <AccordionPanel>
            <FlowLayout>
              Please fill out the following details.
              <FormField labelPlacement="left">
                <FormLabel>Disclosure ID</FormLabel> <Input />
              </FormField>
              <FormField labelPlacement="left">
                <FormLabel>Email</FormLabel> <Input />
              </FormField>
              <FormField labelPlacement="left">
                <FormLabel>Justification</FormLabel> <Input />
              </FormField>
            </FlowLayout>
          </AccordionPanel>
        </Accordion>
      ))}
    </AccordionGroup>
  </FlexLayout>
);

const statuses: AccordionProps["status"][] = [
  undefined,
  "error",
  "warning",
  "success",
];

const Status = (): ReactElement => (
  <FlexLayout style={{ width: "80%" }}>
    <AccordionGroup style={{ alignSelf: "self-start" }}>
      {Array.from({ length: 3 }, (_, i) => i + 1).map((i) => (
        <Accordion
          value={`accordion-${i}`}
          key={`accordion-${i}`}
          status={statuses[i]}
        >
          <AccordionHeader>Internal form</AccordionHeader>
          <AccordionPanel>
            <FlowLayout>
              Please fill out the following details.
              <FormField labelPlacement="left">
                <FormLabel>Disclosure ID</FormLabel>
                <Input />
              </FormField>
              <FormField labelPlacement="left">
                <FormLabel>Email</FormLabel>
                <Input />
              </FormField>
              <FormField labelPlacement="left">
                <FormLabel>Justification</FormLabel>
                <Input />
              </FormField>
            </FlowLayout>
          </AccordionPanel>
        </Accordion>
      ))}
    </AccordionGroup>
  </FlexLayout>
);

export const AccordionExamples = () => {
  return (
    <StackLayout>
      <Group />
      <Status />
    </StackLayout>
  );
};
