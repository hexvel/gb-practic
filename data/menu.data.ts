import { KanbanSquare, LayoutDashboard } from 'lucide-react'

import { DASHBOARD_PAGES } from '@/config/pages-url.config'

import { IMenuItem } from '@/interfaces/dashboard.interface'

export const MENU: IMenuItem[] = [
	{
		icon: LayoutDashboard,
		link: DASHBOARD_PAGES.COURSES,
		name: 'Курсы',
	},
	{
		icon: KanbanSquare,
		link: DASHBOARD_PAGES.SETTINGS,
		name: 'Настройки',
	},
]
