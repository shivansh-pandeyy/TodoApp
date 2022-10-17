import { ComponentMeta, ComponentStory } from '@storybook/react';
import CardComponent from '../components/CardComponent/CardComponent';
import PlaceHolder from '../assets/images/user-placeholder.png';
import Add from '../assets/images/add1.png';

export default {
  title: 'CardComponent',
  component: CardComponent,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof CardComponent>;

const Template: ComponentStory<typeof CardComponent> = (args) => (
  <CardComponent {...args} />
);

export const User = Template.bind({});
User.args = {
  image: PlaceHolder,
  name: 'Shivansh',
  showMenu: true,
};

export const Action = Template.bind({});
Action.args = {
  image: Add,
  showMenu: false,
};
