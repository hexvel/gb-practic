import type { PropsWithChildren } from 'react'

import DashboardLayout from './_components/items-layout'

export default function UserLayout({ children }: PropsWithChildren) {
	return <DashboardLayout>{children}</DashboardLayout>
}
