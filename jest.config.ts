import type { Config } from 'jest'

const config: Config = {
    testEnvironment: 'jsdom',
    preset: 'ts-jest',
    testRegex: '.*\\.test\\.(ts|tsx)$',
    watchPlugins: [
        'jest-watch-typeahead/filename',
        'jest-watch-typeahead/testname',
    ],
}

export default config
