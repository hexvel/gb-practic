'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
	return (
		<div className='h-[500px] flex items-center justify-around'>
			<p className='text-5xl font-bold w-1/4'>Что находится на этом сайте</p>
			<div className='h-full flex flex-col items-start justify-center'>
				<p className='text-2xl font-medium'>
					В основном, курсы, но коллекция будет пополняться
				</p>{' '}
				<p className='text-xl text-muted-foreground'>
					Список всех возмжоностей на данный момент:
				</p>
				<ul className='mt-12'>
					<li className='flex items-center gap-x-2'>
						<Image src='/agree.png' alt='Agree icon' width={30} height={30} />
						<p className='text-lg text-muted-foreground'>Просмотр курсов</p>
					</li>
					<li className='flex items-center gap-x-2'>
						<Image src='/agree.png' alt='Agree icon' width={30} height={30} />
						<p className='text-lg text-muted-foreground'>
							Просмотр времени до начала курса
						</p>
					</li>
					<li className='flex items-center gap-x-2'>
						<Image src='/agree.png' alt='Agree icon' width={30} height={30} />
						<p className='text-lg text-muted-foreground'>
							Просмотр подробностей о курсе
						</p>
					</li>
				</ul>
				<Link href='/courses'>
					<Button className='mt-10' variant='outline'>
						Перейти к курсам
					</Button>
				</Link>
			</div>
		</div>
	)
}

export default About
