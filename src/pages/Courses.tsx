import React from "react";
import {useDispatch} from "react-redux";

import {useTypedSelector} from "../hooks/useTypedSelector";

import {Header, Loader, CoursesBlock} from "../components/";

import {fetchCourse} from "../redux/actions/course";

const Courses: React.FC = () => {
    const dispatch = useDispatch();

    const {items, isLoaded} = useTypedSelector(({course}) => course);

    React.useEffect(() => {
        dispatch(fetchCourse() as any);
	}, []);
	
    return (
        <>
            <Header />

            <section className="courses">
                <div className="container">
                    <div className="courses-wrapper">
                        {isLoaded ? (
                            <>
                                {items.map((item, index) => (
                                    <CoursesBlock
                                        {...item}
                                        key={`courses-block-${index}`}
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

export default Courses;
