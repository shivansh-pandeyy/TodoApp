import { ComponentMeta, ComponentStory } from "@storybook/react";
import Input from "../components/Input";

export default {
  title: 'Input',
  component: Input,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const SmallInput = Template.bind({});
SmallInput.args = {
  label: 'Name',
  id: 'name',
}