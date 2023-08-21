import React from "react";
import {Link, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import axios from "axios";

import {useTelegram} from "../hooks/useTelegram";
import {useTypedSelector} from "../hooks/useTypedSelector";

import {
    CoursePageCoverDemo,
    CoursePageForm,
    CoursePageFormDemo,
    Loader,
    Thank,
} from "../components/";

import {fetchCourseById} from "../redux/actions/course";

const CoursePage: React.FC = () => {
    const dispatch = useDispatch();
    const {id} = useParams();

    const {user} = useTelegram();

    const [isSend, setIsSend] = React.useState<boolean>(false);

    const {itemById, isLoadedById} = useTypedSelector(({course}) => course);

    React.useEffect(() => {
        dispatch(fetchCourseById(id ? id : "") as any);
    }, []);

    const onSubmit = (data: any) => {
        const {name, email, phone} = data;

        axios.post(`${process.env.REACT_APP_API_AWO_DOMEN}/goods/buy`, {
            name,
            email,
            phone,
            idAwo: itemById.idAwoDemo,
            message: "(Демо уроки) Заявка из ТГ бота",
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
                            <Link
                                to="/course"
                                className="course-page-back__back"
                            >
                                ← Назад
                            </Link>
                        </div>

                        {isSend ? (
                            <Thank
                                thankPageTitle={itemById.thankPageTitleDemo}
                                thankPageDescription={
                                    itemById.thankPageDescriptionDemo
                                }
                            />
                        ) : (
                            <div className="course-page-wrapper">
                                <CoursePageCoverDemo {...itemById} />

                                <CoursePageFormDemo onSubmit={onSubmit} />
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
