import React from "react";

import { CoursePageProgrammItem } from "../../";

import { CourseProgramm } from "../../../models/ICourse"

const CoursePageProgramm: React.FC<CourseProgramm> = ({ title, description, items }) => {
	return (
		<section className={`course-page-programm`} id="course-page-programm">
			<div className="container">
				<div className="course-page-programm-wrapper">
					<h2 className="course-page-programm__title">{title}</h2>

					<p
						className="course-page-programm__description"
						dangerouslySetInnerHTML={{ __html: description }}
					>
					</p>

					<div className="course-page-programm-items-wrapper">
						{items.map((item, index) => (
							<CoursePageProgrammItem
								{...item}
								key={`course-page-programm-item-${index}`}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default CoursePageProgramm;
