module.exports = {
	bail: false,
	collectCoverage: true,
	coverageDirectory: 'coverage',
	coverageReporters: ['text', 'lcov'],
	coverageThreshold: {
		global: {
			branches: 50,
			functions: 50,
			lines: 50,
			statements: 50
		}
	},
	moduleFileExtensions: ['js', 'svelte', 'ts'],
	preset: 'ts-jest',
	reporters: [
		'default',
		['jest-junit', { outputDirectory: 'test-reports', usePathForSuiteName: 'true' }]
	],
	restoreMocks: true,
	testEnvironment: 'node',
	testMatch: ['**/?(*.)+(spec|test).ts'],
	transform: {
		'^.+\\.svelte$': [
			'svelte-jester',
			{
				'preprocess': true
			}
		],
		'^.+\\.ts$': 'ts-jest'
	}
};
