'use client'

import { Button } from '@/components/ui/button'
import { useCrouses } from '@/hooks/use-courses'
import Link from 'next/link'

const Courses = () => {
	const { data, isLoading } = useCrouses()

	return isLoading ? (
		<p>Loading...</p>
	) : (
		<div className='grid grid-cols-2 gap-12 mt-7 px-10'>
			{data?.lessons.length ? (
				data.lessons.map(item => (
					<div
						className='bg-border/5 rounded-2xl bg-[#f1f1f1] dark:bg-slate-900 p-layout h-[200px] flex flex-col justify-around items-center hover:scale-105 hover:-translate-y-5 duration-700 transition-all hover:shadow-2xl'
						key={item.id}
					>
						<div className='text-xl'>{item.title}</div>
						<Link
							className='w-2/3'
							href={`https://gb.ru${item.link}`}
							target='_blank'
						>
							<Button className='w-full' variant='outline'>
								Перейти
							</Button>
						</Link>
					</div>
				))
			) : (
				<div>Курсы не загружены!</div>
			)}
		</div>
	)
}

export default Courses
