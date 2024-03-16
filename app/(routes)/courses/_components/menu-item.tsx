import Link from 'next/link'

import { IMenuItem } from '@/interfaces/course.interface'

const MenuItem = ({ item }: { item: IMenuItem }) => {
	return (
		<div>
			<Link
				href={item.link}
				className='flex gap-2.5 items-center py-1.5 mt-2 px-layout hover:bg-border rounded-lg hover:ml-2 transition-all'
			>
				<item.icon />
				<span>{item.name}</span>
			</Link>
		</div>
	)
}

export default MenuItem
