import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

import { useTelegram } from "../hooks/useTelegram";
import { useTypedSelector } from "../hooks/useTypedSelector";

import {
	CoursePageCover,
	CoursePageProgramm,
	CoursePageForm,
	Loader,
	Thank,
} from "../components/";

import { fetchCourseById } from "../redux/actions/course";

const CoursePage: React.FC = () => {
	const dispatch = useDispatch();
	const { id } = useParams();

	const { user } = useTelegram();

	const [isSend, setIsSend] = React.useState<boolean>(false);

	const { itemById, isLoadedById } = useTypedSelector(({ course }) => course);

	React.useEffect(() => {
		dispatch(fetchCourseById(id ? id : "") as any);
	}, []);

	const onSubmit = (data: any) => {
		const { name, email, phone } = data;

		axios.post(`${process.env.REACT_APP_API_AWO_DOMEN}/goods/buy`, {
			name,
			email,
			phone,
			idAwo: itemById.idAwo,
			message: "Заявка из ТГ бота",
			telegram_user: user.username,
		});

		setIsSend(true);
	};

	return (
		<>
			{isLoadedById ? (
				<section className="course-page">
					<div className="container">
						<div className="course-page-back">
							<span
								onClick={() => window.history.back()}
								className="course-page-back__back"
							>
								← Назад
							</span>
						</div>

						{isSend ? (
							<Thank {...itemById} />
						) : (
							<div className="course-page-wrapper">
								<CoursePageCover {...itemById} />

								<CoursePageProgramm {...itemById.programm} />

								<CoursePageForm
									onSubmit={onSubmit}
									{...itemById}
								/>
							</div>
						)}
					</div>
				</section>
			) : (
				<Loader />
			)}
		</>
	);
};

export default CoursePage;
