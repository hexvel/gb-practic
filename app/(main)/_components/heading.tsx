'use client'

import { GlobeDemo } from '@/components/globe'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Heading = () => {
	return (
		<div className='h-full flex bg-[url(/bg.jpg)] bg-center bg-cover items-center justify-center text-white'>
			<div className='h-full flex items-center justify-around'>
				<div className='w-1/3 h-1/3 flex flex-col items-start justify-evenly'>
					<div>
						<p className='text-5xl font-bold'>
							Добро пожаловать в{' '}
							<span className='text-[#6E07F3]'>HexBrains</span>!
						</p>
						<p className='text-lg text-gray-400 mt-2'>
							Данный сайт создан в первую очередь ради практики знаний, а также
							для возможности получить нужную информацию не обращаясь к
							официальному сайту GeekBrains
						</p>
					</div>
					<Link href='/courses'>
						<Button>Перейти к курсам</Button>
					</Link>
				</div>
				<GlobeDemo />
			</div>
		</div>
	)
}

export default Heading
;``
