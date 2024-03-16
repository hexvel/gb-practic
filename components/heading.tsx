import { ModeToggle } from './mode-toggle'

interface IHeading {
	title: string
}

export function Heading({ title }: IHeading) {
	return (
		<div className='border p-4 flex justify-between items-center'>
			<h1 className='text-3xl font-medium'>{title}</h1>
			<ModeToggle />
		</div>
	)
}
