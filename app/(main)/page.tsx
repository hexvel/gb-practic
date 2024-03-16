import About from './_components/about'
import Footer from './_components/footer'
import Heading from './_components/heading'
import Navbar from './_components/navbar'
import Tips from './_components/tips'

export default function HomePage() {
	return (
		<div className='h-full'>
			<Navbar />
			<Heading />
			<About />
			<Tips />
			<Footer />
		</div>
	)
}
