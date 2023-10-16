import {
  Avatar,
  FlexLayout,
  FlowLayout,
  Label,
  StackLayout,
} from "@salt-ds/core";

const Initials = () => {
  return <Avatar name="Alex Brailescu" />;
};

const sizes = [1, 2, 4] as const;
const Sizes = () => {
  return (
    <FlowLayout gap={7} align="end">
      {sizes.map((size) => (
        <StackLayout key={size} align="center">
          <Avatar key={size} size={size} />
          <Label>Size: {size}x</Label>
        </StackLayout>
      ))}
    </FlowLayout>
  );
};

export const AvatarExamples = () => {
  return (
    <FlexLayout>
      <Sizes />
    </FlexLayout>
  );
};
