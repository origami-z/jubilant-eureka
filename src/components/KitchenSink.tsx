import { H1, StackLayout } from "@salt-ds/core";
import { AccordionExamples } from "./salt-examples/AccordionExamples";
import { ButtonExamples } from "./salt-examples/ButtonExamples";

export const KitchenSink = () => {
  return (
    <StackLayout>
      <H1>Salt DS Components</H1>
      <AccordionExamples />
      <ButtonExamples />
    </StackLayout>
  );
};
