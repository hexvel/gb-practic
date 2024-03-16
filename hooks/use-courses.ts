import { useQuery } from '@tanstack/react-query'

import { courseService } from '@/services/course.service'

export function useCrouses() {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['courses'],
		queryFn: () => courseService.getCourses(),
	})

	return { data, isLoading, isSuccess }
}
