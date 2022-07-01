import * as StyleDictionary from 'style-dictionary'
import reduce  from 'lodash.reduce'
import setWith from 'lodash.setwith'

let StyleDictionaryExtended

StyleDictionary.registerFormat({
    name: 'typescript',
    formatter: ({ dictionary }) => {
        const tokens = JSON.stringify(
            reduce(
                dictionary.allProperties,
                (properties, property) =>
                    setWith(
                        properties,
                        property.path,
                        typeof property.value === 'string' &&
                            property.original.value.match(/^{.*}$/)
                            ? property.value
                            : property.value,
                        Object,
                    ),
                {},
            ),
            null,
            4
        )
        return 'const theme = ' + tokens + '\n\n' + 'export { theme } \n' + 'export default theme'
    },
})

StyleDictionaryExtended = StyleDictionary.extend(__dirname + '/config.light.json')
StyleDictionaryExtended.buildAllPlatforms()

StyleDictionaryExtended = StyleDictionary.extend(__dirname + '/config.dark.json')
StyleDictionaryExtended.buildAllPlatforms()