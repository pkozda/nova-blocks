import Card from './Card.vue'

export default {
    title: 'Components/Card',
    component: Card
}

export const Default = () => ({
    components: { Card },
    template: `
        <Card>
            Card content
        </Card>
    `
})

export const WithHeaderAndFooter = () => ({
    components: { Card },
    template: `
        <Card>
            <template #header>Header</template>
            Content
            <template #footer>Footer</template>
        </Card>
    `
})
