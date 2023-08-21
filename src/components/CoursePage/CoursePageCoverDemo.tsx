import React from "react";

import {Course} from "../../models/ICourse";

interface CoursePageCoverDemoProps extends Course {}

const CoursePageCoverDemo: React.FC<CoursePageCoverDemoProps> = ({
    imageDemo,
    categoryDemo,
    titleDemo,
    descriptionDemo,
    masterDemo,
    priceDemo,
}) => {
    return (
        <div className="course-page-cover">
            <div
                className="course-page-cover-image"
                style={{
                    backgroundImage: `url('${imageDemo}')`,
                }}
            ></div>
            <div className="course-page-cover-text">
                <p className="course-page-cover-text__subtitle">
                    {categoryDemo}
                </p>

                <h2 className="course-page-cover-text__title">{titleDemo}</h2>

                <p
                    className="course-page-cover-text__description"
                    dangerouslySetInnerHTML={{__html: descriptionDemo}}
                ></p>

                <p className="course-page-cover-text__auth">{masterDemo}</p>

                {priceDemo !== "" ? (
                    <h3 className="course-page-cover-text__price">
                        {priceDemo}
                    </h3>
                ) : null}
            </div>
        </div>
    );
};

export default CoursePageCoverDemo;
