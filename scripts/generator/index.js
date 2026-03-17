const fs = require('fs')
const path = require('path')

const name = process.argv[2]

if (!name) {
    console.error('❌ Please provide component name')
    process.exit(1)
}

const pascalName = name.charAt(0).toUpperCase() + name.slice(1)
const kebabName = name.toLowerCase()

const componentDir = path.resolve(__dirname, '../../src/components', pascalName)

if (fs.existsSync(componentDir)) {
    console.error('❌ Component already exists')
    process.exit(1)
}

fs.mkdirSync(componentDir, { recursive: true })

const templatesDir = path.resolve(__dirname, './templates')

const files = [
    { tpl: 'component.vue.tpl', out: `${pascalName}.vue` },
    { tpl: 'component.scss.tpl', out: `${pascalName}.scss` },
    { tpl: 'component.test.ts.tpl', out: `${pascalName}.test.ts` },
    { tpl: 'component.stories.ts.tpl', out: `${pascalName}.stories.ts` },
    { tpl: 'index.ts.tpl', out: `index.ts` }
]

files.forEach(({ tpl, out }) => {
    const template = fs.readFileSync(path.join(templatesDir, tpl), 'utf-8')

    const content = template
        .replace(/{{name}}/g, kebabName)
        .replace(/{{pascalName}}/g, pascalName)

    fs.writeFileSync(path.join(componentDir, out), content)
})

const indexPath = path.resolve(__dirname, '../../src/index.ts')

const exportLine = `export * from './components/${pascalName}'\n`

fs.appendFileSync(indexPath, exportLine)

console.log(`✅ Component ${pascalName} generated`)
