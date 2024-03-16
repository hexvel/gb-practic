import { Poppins } from 'next/font/google'
import Image from 'next/image'

import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'

const font = Poppins({
	subsets: ['latin'],
	weight: ['400', '600'],
})

const Logo = () => {
	const router = useRouter()

	return (
		<div
			className='hidden md:flex items-center gap-x-2 cursor-pointer'
			onClick={() => router.push('/')}
		>
			<Image src='/logo.png' height='40' width='40' alt='Logo' />
			<p className={cn('font-semibold text-2xl', font.className)}>HexBrains</p>
		</div>
	)
}

export default Logo
