import bootstrap from '@/assets/svg/portfolio/expertise/bootstrap.svg';
import css from '@/assets/svg/portfolio/expertise/css3.svg';
import git from '@/assets/svg/portfolio/expertise/git.svg';
import html5 from '@/assets/svg/portfolio/expertise/html5.svg';
import javascript from '@/assets/svg/portfolio/expertise/javascript.svg';
import next from '@/assets/svg/portfolio/expertise/next-js (1).svg';
import node from '@/assets/svg/portfolio/expertise/node.svg';
import npm from '@/assets/svg/portfolio/expertise/npm.svg';
import react from '@/assets/svg/portfolio/expertise/react.svg';
import scss from '@/assets/svg/portfolio/expertise/sass.svg';
import tailwind from '@/assets/svg/portfolio/expertise/tailwind-css.svg';
import typescript from '@/assets/svg/portfolio/expertise/typescript.svg';
import vscode from '@/assets/svg/portfolio/expertise/vscode.svg';
import vue from '@/assets/svg/portfolio/expertise/vue.svg';
import yarn from '@/assets/svg/portfolio/expertise/yarn (1).svg';

import { ProfileSkills } from '../Skills.interface';

export const profileSkillsList: ProfileSkills[] = [
	{
		image: javascript,
		name: 'JavaScript'
	},
	{
		image: react,
		name: 'React'
	},
	{
		image: typescript,
		name: 'TypeScript'
	},
	{
		image: next,
		name: 'Next js'
	},
	{
		image: vue,
		name: 'Vue js'
	},
	{
		image: node,
		name: 'Node js'
	},
	{
		image: html5,
		name: 'Html5'
	},
	{
		image: css,
		name: 'Css'
	},
	{
		image: scss,
		name: 'Scss'
	},
	{
		image: tailwind,
		name: 'Tailwind css'
	},
	{
		image: bootstrap,
		name: 'Bootstrap'
	},
	{
		image: git,
		name: 'Git'
	},
	{
		image: vscode,
		name: 'VsCode'
	},
	{
		image: npm,
		name: 'Npm'
	},
	{
		image: yarn,
		name: 'Yarn'
	}
];
