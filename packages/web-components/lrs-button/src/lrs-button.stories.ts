import { Meta, Story } from '@storybook/web-components'
import { html } from 'lit-html'
import { LrsButton } from './lrs-button'
import './lrs-button'

interface Args {
    slot: string
}

export default {
    title: 'Atoms/Button'
} as Meta

const Template: Story<LrsButton> = ({ slot }: Args) => html`
    <lrs-button>
        Button
    </lrs-button>
`

export const Default = Template.bind({})
Default.args = {
    slot: 'Button'
}