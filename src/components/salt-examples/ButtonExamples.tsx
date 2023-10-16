import { Button, FlexLayout, StackLayout } from "@salt-ds/core";

const ButtonVariants = () => {
  return (
    <FlexLayout>
      <Button variant="cta">CTA Button</Button>
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
    </FlexLayout>
  );
};

export const ButtonExamples = () => {
  return (
    <StackLayout>
      <ButtonVariants />
    </StackLayout>
  );
};
