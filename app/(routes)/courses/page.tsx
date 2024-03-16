import type { Metadata } from 'next'

import { Heading } from '@/components/heading'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'
import Courses from './_components/list-items'

export const metadata: Metadata = {
	title: 'Courses',
	...NO_INDEX_PAGE,
}

const CoursesPage = () => {
	return (
		<div className='p-big-layout overflow-x-hidden max-h-screen relative'>
			<Heading title='Курсы' />
			<Courses />
		</div>
	)
}

export default CoursesPage
