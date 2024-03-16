import { ICourseResponse } from '@/interfaces/course.interface'
import axios from 'axios'

class CourseService {
	async getCourses() {
		const response = await axios.get<ICourseResponse>(
			'http://185.221.162.92:4200/api/schedule'
		)
		return response.data
	}
}

export const courseService = new CourseService()
