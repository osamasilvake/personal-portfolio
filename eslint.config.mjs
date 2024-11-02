import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const compat = new FlatCompat({
	baseDirectory: dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all
});

export default [
	{
		ignores: ['**/.next', '**/node_modules', '**/.github']
	},
	...compat.extends(
		'next',
		'next/core-web-vitals',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier'
	),
	{
		plugins: {
			prettier,
			'@typescript-eslint': typescriptEslint,
			'simple-import-sort': simpleImportSort,
			'unused-imports': unusedImports
		},

		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
				...globals.jest
			},

			parser: tsParser,
			ecmaVersion: 'latest',
			sourceType: 'commonjs',

			parserOptions: {
				ecmaFeatures: {
					jsx: true
				}
			}
		},

		rules: {
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-require-imports': 'off',
			'simple-import-sort/imports': 'error',
			'simple-import-sort/exports': 'error',
			'@typescript-eslint/explicit-function-return-type': 'off',
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'@typescript-eslint/no-var-requires': 'off',
			'@typescript-eslint/no-shadow': 'error',
			'@typescript-eslint/no-unused-vars': 'error',

			'@typescript-eslint/naming-convention': [
				'error',
				{
					selector: 'variable',
					format: ['camelCase', 'PascalCase', 'UPPER_CASE', 'snake_case']
				},
				{
					selector: 'function',
					format: ['camelCase', 'UPPER_CASE']
				},
				{
					selector: 'parameter',
					format: ['camelCase'],
					leadingUnderscore: 'allow'
				},
				{
					selector: 'memberLike',
					modifiers: ['private'],
					format: ['camelCase'],
					leadingUnderscore: 'require'
				},
				{
					selector: 'typeLike',
					format: ['PascalCase']
				}
			],

			'react/self-closing-comp': [
				'error',
				{
					component: true,
					html: true
				}
			],

			'no-unused-vars': 'warn',
			'require-await': 'error',
			'no-nested-ternary': 'warn',
			'unused-imports/no-unused-imports': 'error',
			'no-duplicate-imports': 'error',
			'import/no-anonymous-default-export': [
				'error',
				{
					allowArray: true,
					allowArrowFunction: false,
					allowAnonymousClass: false,
					allowAnonymousFunction: false,
					allowCallExpression: true, // The true value here is for backward compatibility
					allowNew: false,
					allowLiteral: false,
					allowObject: false
				}
			],

			'no-console': [
				'warn',
				{
					allow: ['info', 'warn', 'error']
				}
			],

			'prettier/prettier': [
				'error',
				{
					endOfLine: 'auto'
				}
			]
		}
	}
];
