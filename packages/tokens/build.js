const StyleDictionary = require('style-dictionary');

console.log('Build started...');
console.log('\n==============================================');


// REGISTER THE CUSTOM TRANFORMS

StyleDictionary.registerTransform({
    name: 'sizes/rem', // notice: the name is an override of an existing predefined method (yes, you can do it)
    type: 'value',
    matcher: function (token) {
        // this is an example of a possible filter (based on the "cti" values) to show how a "matcher" works
        return token.attributes.category === 'sizes'
    },
    transformer: function (token) {
        return `${token.value}rem`;
    }
})

StyleDictionary.registerTransformGroup({
    name: 'custom/css',
    // notice: here the "size/px" transform is not the pre-defined one, but the custom one we have declared above
    transforms: ['attribute/cti', 'name/cti/kebab', 'size/rem', 'color/css', 'time/seconds', 'sizes/rem']
})

const StyleDictionaryExtendedLight = StyleDictionary.extend(__dirname + '/config-light.json')
StyleDictionaryExtendedLight.buildAllPlatforms()

const StyleDictionaryExtendedDark = StyleDictionary.extend(__dirname + '/config-dark.json')
StyleDictionaryExtendedDark.buildAllPlatforms()

console.log('\n==============================================')
console.log('\nBuild completed!')