'use client'

import useScrollTop from '@/hooks/use-scroll-top'
import Logo from './logo'

import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const Navbar = () => {
	const scrolled = useScrollTop()

	return (
		<div
			className={cn(
				'z-50 bg-[#f5f5f5] dark:bg-[#131313] fixed top-0 flex items-center w-full p-3 transition-opacity',
				scrolled && 'opacity-75'
			)}
		>
			<Logo />
			<div className='md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2'>
				<Link href='/courses'>
					<Button variant='outline'>Курсы</Button>
				</Link>
				<ModeToggle />
			</div>
		</div>
	)
}

export default Navbar
