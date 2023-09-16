import React from "react";
import {Link, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import axios from "axios";

import {useTelegram} from "../hooks/useTelegram";

import {useTypedSelector} from "../hooks/useTypedSelector";

import {
    Loader,
    Thank,
    TimetablePageCover,
    TimetablePageForm,
} from "../components/";

import {fetchTimetableById} from "../redux/actions/timetable";

const TimetablePage: React.FC = () => {
    const dispatch = useDispatch();
    const {id} = useParams();

    const {user} = useTelegram();

    const {itemById, isLoadedById} = useTypedSelector(
        ({timetable}) => timetable
    );

    React.useEffect(() => {
        dispatch(fetchTimetableById(id ? id : "") as any);
    }, []);

    const [isSend, setIsSend] = React.useState<boolean>(false);

    const onSubmit = (data: any) => {
        const {email, phone} = data;

        axios
            .post(`${process.env.REACT_APP_API_AWO_DOMEN}/goods/subs`, {
                email,
                phone,
				idAwo: itemById.idAwo ? itemById.idAwo : 0,
                message: "Заявка из ТГ бота",
                telegram_user: user.username,
            })
            .then(() => {
                if (itemById.isRedirect) {
                    window.location.href = itemById.redirectUrl;
                }
                setIsSend(true);
            })
            .catch(() => {
                if (itemById.isRedirect) {
                    window.location.href = itemById.redirectUrl;
                }
                setIsSend(true);
            });
    };

    return (
        <>
            {isLoadedById ? (
                <section className="timetable-page">
                    <div className="container">
                        <div className="timetable-page-back">
                            <span
                                onClick={() => window.history.back()}
                                className="timetable-page-back__back"
                            >
                                ← Назад
                            </span>
                        </div>

                        {isSend ? (
                            <Thank {...itemById} />
                        ) : (
                            <div className="timetable-page-wrapper">
                                <TimetablePageCover {...itemById} />

                                <TimetablePageForm
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

export default TimetablePage;
