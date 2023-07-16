
import { AbBotao } from '../src';
import { ComponentMeta, ComponentStory } from '@storybook/react';


export default {
  tilte: 'Componentes/AbBotao',
  component: AbBotao,
} as ComponentMeta<typeof AbBotao>;

const Template: ComponentStory<typeof AbBotao> = () => <AbBotao />;

export const Primario = Template.bind({});
