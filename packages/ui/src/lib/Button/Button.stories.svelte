<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    import { action } from '@storybook/addon-actions'
    import Button from './Button.svelte'
    import { Placeholder } from '@layars/icons'
</script>

<Meta 
    title='@layars/components/Button'
    component={Button}
    argTypes={{
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            defaultValue: 'md',
            description: 'The size of the button.'
        },
        variant: {
            control: 'select',
            options: ['basic', 'primary', 'secondary', 'danger'],
            defaultValue: 'primary',
            description: 'The button variant type'
        },
        disabled: {
            control: 'boolean',
            defaultValue: false,
            description: 'Is the button disabled'
        },
        depressed: {
            control: 'boolean',
            defaultValue: false,
            description: 'Is the button in a depressed state.'
        }
    }}
/>

<Template id='default' let:args>
    <Button
        on:click={action('on:click')}
        on:focus={action('on:focus')}
        {...args}
    >
        Button
    </Button>
</Template>

<Template id='icon-before' let:args>
    <Button
        on:click={action('on:click')}
        on:focus={action('on:focus')}
        {...args}
    >
        <Placeholder slot='icon-before' />
        Button
    </Button>
</Template>

<Template id='icon-after' let:args>
    <Button
        on:click={action('on:click')}
        on:focus={action('on:focus')}
        {...args}
    >
        Button
        <Placeholder slot='icon-after' />
    </Button>
</Template>

<Story 
    name='default'
    template='default'
    args={{
        variant: 'primary',
        size: 'md',
        disabled: false,
        depressed: false
    }}
/>

<Story 
    name='icon before'
    template='icon-before'
    args={{
        variant: 'primary',
        size: 'md',
        disabled: false,
        depressed: false
    }}
/>

<Story 
    name='icon after'
    template='icon-after'
    args={{
        variant: 'primary',
        size: 'md',
        disabled: false,
        depressed: false
    }}
/>