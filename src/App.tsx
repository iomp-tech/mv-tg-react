import React from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import { compose } from "redux";
import "moment/locale/ru";

import {Footer} from "./components";

import {Timetable, TimetablePage, Courses, CoursePage, CoursePageDemo, Policy} from "./pages/";

import {useTelegram} from "./hooks/useTelegram";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
        Telegram?: any;
    }
}

const App: React.FC = () => {
    const {pathname} = useLocation();
    const {tg} = useTelegram();

    React.useEffect(() => {
        tg.ready();

        let cords: any = ["scrollX", "scrollY"];

        // Перед закрытием записываем в локалсторадж window.scrollX и window.scrollY как scrollX и scrollY
        window.addEventListener("unload", (e) =>
            cords.forEach((cord: any) => (localStorage[cord] = window[cord]))
        );

        // Прокручиваем страницу к scrollX и scrollY из localStorage (либо 0,0 если там еще ничего нет)
        window.scroll(...cords.map((cord: any) => localStorage[cord]));
    }, []);

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="wrapper">
            <React.Suspense fallback={<></>}>
                <Routes>
                    <Route path="/" element={<Timetable />} />
                    <Route path="/timetable/:id" element={<TimetablePage />} />

                    <Route path="/course" element={<Courses />} />
                    <Route path="/course/:id" element={<CoursePage />} />
                    <Route path="/course/:id/demo" element={<CoursePageDemo />} />

                    <Route path="/policy" element={<Policy />} />

                    <Route path="*" element={<></>} />
                </Routes>
            </React.Suspense>

            <Footer />
        </div>
    );
};

export default App;
