import { ThemeDirection, ThemePalette } from '@/themes/types';

type LocaleAppConfig = {
	defaultLocale: string;
	locales: string[];
};

type ThemeAppConfig = {
	defaultTheme: ThemePalette;
	defaultDirection: ThemeDirection;
};

export type AppConfig = {
	locale: LocaleAppConfig;
	theme: ThemeAppConfig;
	title: string;
	description: string;
	name: string;
};

export const appConfig: AppConfig = {
	name: `Uptime`,
	locale: {
		defaultLocale: `en`,
		locales: [`en`, `fa`],
	},
	theme: {
		defaultDirection: `ltr`,
		defaultTheme: `dark`,
	},
	title: `Uptime`,
	description: `Uptime app`,
};
