'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Tips = () => {
	return (
		<div className='flex flex-col items-center justify-center h-[600px] bg-[url(/tips-bg.jpg)] bg-center bg-cover text-white'>
			<h2 className='text-3xl font-bold mt-8'>Полезные ссылки</h2>
			<div className='h-full w-full flex gap-x-12 flex-wrap items-center justify-center'>
				<div className='h-2/3 w-1/5 flex flex-col px-5 justify-evenly bg-slate-400/35 rounded-3xl hover:scale-110 hover:-translate-y-12 duration-700 transition-all hover:shadow-2xl'>
					<p className='text-xl font-bold'>Дима</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
						itaque amet repellendus odio eveniet similique necessitatibus sed,
						aspernatur, dolor doloribus eos soluta ipsum et architecto quos, a
						fugiat sapiente nobis quisquam quaerat voluptatum nulla sit aperiam
						explicabo.
					</p>
					<Link href='https://google.com' className='w-full'>
						<Button
							className='w-full text-black dark:text-white'
							variant='outline'
						>
							Перейти
						</Button>
					</Link>
				</div>
				<div className='h-2/3 w-1/5 flex flex-col px-5 justify-evenly bg-slate-400/35 rounded-3xl hover:scale-110 hover:-translate-y-12 duration-700 transition-all hover:shadow-2xl'>
					<p className='text-xl font-bold'>Алексей</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
						itaque amet repellendus odio eveniet similique necessitatibus sed,
						aspernatur, dolor doloribus eos soluta ipsum et architecto quos, a
						fugiat sapiente nobis quisquam quaerat voluptatum nulla sit aperiam
						explicabo.
					</p>
					<Link href='https://google.com' className='w-full'>
						<Button
							className='w-full text-black dark:text-white'
							variant='outline'
						>
							Перейти
						</Button>
					</Link>
				</div>
				<div className='h-2/3 w-1/5 flex flex-col px-5 justify-evenly bg-slate-400/35 rounded-3xl hover:scale-110 hover:-translate-y-12 duration-700 transition-all hover:shadow-2xl'>
					<p className='text-xl font-bold'>Good morning</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
						itaque amet repellendus odio eveniet similique necessitatibus sed,
						aspernatur, dolor doloribus eos soluta ipsum et architecto quos, a
						fugiat sapiente nobis quisquam quaerat voluptatum nulla sit aperiam
						explicabo.
					</p>
					<Link href='https://google.com' className='w-full'>
						<Button
							className='w-full text-black dark:text-white'
							variant='outline'
						>
							Перейти
						</Button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Tips
