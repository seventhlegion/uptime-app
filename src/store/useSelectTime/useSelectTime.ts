import { ApiObject } from '@/constant';
import { create } from 'zustand';

export type UseSelectTimeValues = {
	selectedStartTime: Date | null;
	selectedEndTime: Date | null;
	selectedAPI: ApiObject | undefined;
	secondSelectedAPI: ApiObject | undefined;
	setSelectedStartTime: (date: Date | null) => void;
	setSelectedEndTime: (date: Date | null) => void;
	setSelectedAPI: (apis: ApiObject | undefined) => void;
	setSecondSelectedAPI: (apis: ApiObject | undefined) => void;
};

export const useSelectTime = create<UseSelectTimeValues>((set) => ({
	selectedStartTime: null,
	selectedEndTime: null,
	selectedAPI: undefined,
	secondSelectedAPI: undefined,
	setSelectedStartTime: (date) => set({ selectedStartTime: date }),
	setSelectedEndTime: (date) => set({ selectedEndTime: date }),
	setSelectedAPI: (api) => set({ selectedAPI: api }),
	setSecondSelectedAPI: (api) => set({ secondSelectedAPI: api }),
}));
