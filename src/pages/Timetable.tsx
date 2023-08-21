import React from "react";
import {useDispatch} from "react-redux";

import {useTypedSelector} from "../hooks/useTypedSelector";

import {Header, Loader, TimetableBlock} from "../components/";

import {fetchTimetable} from "../redux/actions/timetable";

const Timetable: React.FC = () => {
    const dispatch = useDispatch();

    const {items, isLoaded} = useTypedSelector(({timetable}) => timetable);

    React.useEffect(() => {
        dispatch(fetchTimetable() as any);
    }, []);

    return (
        <>
            <Header />

            <section className="timetable">
                <div className="container">
                    <div className="timetable-wrapper">
                        {isLoaded ? (
                            <>
                                {items.map((item, index) => (
                                    <TimetableBlock
                                        {...item}
                                        key={`timetable-block-${index}`}
                                    />
                                ))}
                            </>
                        ) : (
                            <Loader />
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Timetable;
