const recast = require('recast')
const path = require('path')

//const astTypes = require('ast-types')
//const assert = require('assert')

const fse = require('fs-extra')
const blacklist = ['umd', 'es', 'test-utils']

const materialPath = path.join(__dirname, '..', 'node_modules', 'material-ui')
const wrappedPath = path.join(__dirname, '..', 'build')

// create the build directory
try {
    fse.ensureDirSync(wrappedPath)
} catch (e) {
    console.log('Target dir exists, skipping...', wrappedPath)
}

const components = fse
    .readdirSync(materialPath)
    .filter(i => blacklist.indexOf(i) === -1)
    .filter(i => fse.lstatSync(path.join(materialPath, i)).isDirectory())

console.log('Material UI components:', components, components.length)

components
    .map(generateComponentIndex)

reexport()

function reexport () {
    const code = fse.readFileSync('./node_modules/material-ui/index.es.js', {encoding: 'utf-8'})
    const ast = recast.parse(code)

    let modcode = recast.print(ast).code

    fse.writeFileSync(path.join(__dirname, '../build', 'index.js'), modcode)
}

function generateComponentIndex (component) {
    try {
        fse.ensureDirSync(path.join(wrappedPath, component))
    } catch (e) {
        console.log('Path exists, skip creation', e)
    }

    const subcomponents = fse
        .readdirSync(path.join(materialPath, component))
        .filter(e => e.endsWith('.js'))
        .filter(e => !e.startsWith('index'))
        .map(subcomp => {
            const sub = subcomp.split('.')[0]

            let code = [ `// wrapper for component: material-ui/${component}`
                       , `import ${sub} from 'material-ui/${component}/${sub}'`
                       , `export default ${sub}`
                       ].join('\n')

            const subAst = recast.parse(code)
            const subCode = recast.print(subAst).code

            fse.writeFileSync(path.join(wrappedPath, component, sub+'.js'), subCode)

            return sub
        })
        .map(subcmp => {
            let code
            if (subcmp === component) {
                code = [ `// reexpose`
                       , `export { default } from './${subcmp}'`
                       ].join('\n')
            } else {
                code = [ `// reexpose`
                       , `export { default as ${subcmp} } from './${subcmp}'`
                       ].join('\n')
            }
            return code
        })


    const ast = recast.parse(subcomponents.join('\n'))
    const code = recast.print(ast).code

    fse.writeFileSync(path.join(wrappedPath, component, 'index.js'), code)

    return component
}
