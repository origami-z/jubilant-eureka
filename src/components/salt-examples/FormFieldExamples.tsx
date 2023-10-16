import {
  FormField,
  FlowLayout,
  FormFieldLabel,
  FormFieldHelperText,
  Input,
  FlexLayout,
} from "@salt-ds/core";

const Default = () => (
  <FlowLayout style={{ width: "256px" }}>
    <FormField>
      <FormFieldLabel>Form Field label</FormFieldLabel>
      <Input defaultValue="Value" />
      <FormFieldHelperText>Helper text</FormFieldHelperText>
    </FormField>
  </FlowLayout>
);

export const FormFieldExamples = () => {
  return (
    <FlexLayout>
      <Default />
    </FlexLayout>
  );
};
