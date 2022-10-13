import { ComponentMeta, ComponentStory } from "@storybook/react";
import UserCard from "../components/UserCard";
import PlaceHolder from '../assets/images/user-placeholder.png';
import Add from '../assets/images/add1.png';

export default {
  title: 'UserCard',
  component: UserCard,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof UserCard>;

const Template: ComponentStory<typeof UserCard> = (args) => <UserCard {...args} />;

export const User = Template.bind({});
User.args = {
  image: PlaceHolder,
  name: 'Shivansh',
  showMenu: true
}
 
export const Action = Template.bind({});
Action.args = {
  image: Add,
  showMenu: false
}
