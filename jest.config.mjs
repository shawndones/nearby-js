export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.vue$': '@vue/vue3-jest',
        '^.+\\.ts$': 'ts-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    transformIgnorePatterns: ['<rootdir>/node_modules/(?!@arcgis\/core|@esri\/calcite-components)/'],
    extensionsToTreatAsEsm: ['.ts', '.vue'],
    globals: {
        '@vue/vue3-jest': {
            compilerOptions: {
                isCustomElement: (tag) => tag.includes('calcite-'),
            }
        }
    }
}