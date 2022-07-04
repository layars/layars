import { Meta, Story } from '@storybook/web-components'
import { html } from 'lit-html'
import LrsButton from './lrs-button'
import './lrs-button'

interface Args extends LrsButton {
    slot: string
}

export default {
    title: 'Atoms/Button',
    argTypes: { onclick: { action: 'click' } },
} as Meta

const Template: Story<LrsButton> = ({ slot, variant, onclick }: Args) => html`
    <lrs-button @click=${onclick} variant="${variant}">${slot}</lrs-button>
`

export const Default = Template.bind({})
Default.args = {
    slot: 'Button'
}