export interface ICourseProfession {
	id: number
	title: string
	stream_id: number[]
}

export interface ICourseStream {
	id: number
	title: string
}

export interface ICourseLesson {
	id: number
	stream_id: number
	title: string
	datetime: string
	link: string
}

export interface ICourseResponse {
	professions: ICourseProfession[]
	streams: ICourseStream[]
	lessons: ICourseLesson[]
}

import { LucideIcon } from 'lucide-react'

export interface IMenuItem {
	link: string
	name: string
	icon: LucideIcon
}
