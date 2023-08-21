export interface CourseProgrammItem {
	subtitle: string
	title: string
	description: string
}

export interface CourseProgramm {
	title: string
	description: string

	items: CourseProgrammItem[]
}

export interface Course {
	_id: string
	price: string
	videoUrl: string
	image: string
	category: string
	title: string
	description: string
	master: string
	btnText: string
	formTitle: string
	idAwo: number

	programm: CourseProgramm

	thankPageTitle: string
	thankPageDescription: string

	isDemo: boolean
	btnTextDemo: string
	priceDemo: string
	imageDemo: string
	categoryDemo: string
	titleDemo: string
	descriptionDemo: string
	masterDemo: string
	idAwoDemo: number

	thankPageTitleDemo: string
	thankPageDescriptionDemo: string
}