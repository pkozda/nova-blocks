import {{pascalName}} from './{{pascalName}}.vue'

export default {
    title: 'Components/{{pascalName}}',
    component: {{pascalName}}
}

export const Default = () => ({
    components: { {{pascalName}} },
    template: `
        <{{pascalName}}>
            Content
        </{{pascalName}}>
    `
})
