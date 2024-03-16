'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Logo from './logo'

const Footer = () => {
	return (
		<div className='bg-[#f5f5f5] dark:bg-[#131313] h-[80px] flex items-center justify-around'>
			<Logo />
			<div className='text-muted-foreground'>
				<p>
					Разработчик:{' '}
					<Link
						href='https://t.me/hexvel'
						target='_blank'
						className='text-[#6E07F3]'
					>
						Дилмурод
					</Link>
				</p>
				<p>
					Проект поддержал:{' '}
					<Link
						href='https://t.me/AlexDon89'
						target='_blank'
						className='text-[#6E07F3]'
					>
						Алексей
					</Link>
				</p>
			</div>
			<Link href='https://t.me/+FjULwdkboKk5OTRi' target='_blank'>
				<Button>Чат в телеграмме</Button>
			</Link>
		</div>
	)
}

export default Footer
