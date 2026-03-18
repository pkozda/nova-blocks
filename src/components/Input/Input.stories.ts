import Input from './Input.vue'

export default {
    title: 'Components/Input',
    component: Input
}

export const Default = () => ({
    components: { Input },
    data() {
        return { value: '' }
    },
    template: `
        <Input v-model="value" placeholder="Enter text" />
    `
})

export const Error = () => ({
    components: { Input },
    data() {
        return { value: '' }
    },
    template: `
        <Input v-model="value" error placeholder="Error state" />
    `
})

export const Disabled = () => ({
    components: { Input },
    data() {
        return { value: 'Disabled' }
    },
    template: `
        <Input v-model="value" disabled />
    `
})

export const Types = () => ({
    components: { Input },
    data() {
        return { value: '' }
    },
    template: `
        <Input v-model="value" type="email" placeholder="Email" />
    `
})
