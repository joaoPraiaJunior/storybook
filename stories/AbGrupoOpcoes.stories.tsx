import { AbGrupoOpcoes, AbGrupoOpcoesProps } from '../src';
import { ComponentMeta, ComponentStory } from '@storybook/react';


export default {
  title: 'Componentes/AbGrupoOpcoes',
  component: AbGrupoOpcoes,
} as ComponentMeta<typeof AbGrupoOpcoes>;

const Template: ComponentStory<typeof AbGrupoOpcoes> = (args) => <AbGrupoOpcoes {...args} />;

export const Padrao = Template.bind({});

Padrao.args = {
  opcoes: [
    {
      id: 1,
      titulo: 'ebook',
      corpo: 'R$ 00,00',
      rodape: '.pdf, .epub, .mobi'
    },

    {
      id: 2,
      titulo: 'ebook',
      corpo: 'R$ 00,00',
      rodape: '.pdf, .epub, .mobi'
    },

    {
      id: 3,
      titulo: 'ebook',
      corpo: 'R$ 00,00',
      rodape: '.pdf, .epub, .mobi'
    }
  ]
} as AbGrupoOpcoesProps

