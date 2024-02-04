import { create } from 'zustand';

export type NavigationItems =
	| 'Services'
	| 'Average'
	| 'Comparison'
	| 'Calendar'
	| 'Response';

export type UseNavigationValues = {
	defaultSelect: NavigationItems;
	navigator: (selector: NavigationItems) => void;
};

export const useNavigation = create<UseNavigationValues>((set) => ({
	defaultSelect: 'Services',
	navigator: (selector) => set(() => ({ defaultSelect: selector })),
}));
