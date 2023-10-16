import { H1, StackLayout } from "@salt-ds/core";
import { AccordionExamples } from "./salt-examples/AccordionExamples";
import { ButtonExamples } from "./salt-examples/ButtonExamples";
import { FormFieldExamples } from "./salt-examples/FormFieldExamples";
import { ListExamples } from "./salt-examples/ListExamples";

export const KitchenSink = () => {
  /** Portal components won't work given they render additional salt provider inside the portal */

  return (
    <StackLayout style={{ width: 800 }}>
      <H1>Salt DS Components</H1>
      <AccordionExamples />
      <ButtonExamples />
      <FormFieldExamples />
      <ListExamples />
    </StackLayout>
  );
};
