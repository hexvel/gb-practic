import { PropsWithChildren } from 'react'

import Sidebar from './sidebar'

const DashboardLayout = ({ children }: PropsWithChildren) => {
	return (
		<div className='grid min-h-screen 2xl:grid-cold-[1.1fr_6fr] grid-cols-[1.2fr_6fr]'>
			<Sidebar />
			<main className='p-big-layout overflow-x-hidden max-h-screen relative'>
				{children}
			</main>
		</div>
	)
}

export default DashboardLayout
