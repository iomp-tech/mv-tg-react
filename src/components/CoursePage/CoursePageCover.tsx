import React from "react";
import {Link} from "react-router-dom";
import YouTube from "react-youtube";

import {Course} from "../../models/ICourse";

interface CoursePageCoverProps extends Course {}

const CoursePageCover: React.FC<CoursePageCoverProps> = ({
    _id,
    videoUrl,
    image,
    category,
    title,
    description,
    master,
    price,
    isDemo,
    btnTextDemo,
}) => {
    let videoId: any;

    if (videoUrl) {
        const video = new URL(videoUrl);
        const videoParams = new URLSearchParams(video.search);

        videoId = videoParams.get("v");
    }

    return (
        <div className="course-page-cover">
            {videoId ? (
                <div className="course-page-cover-video">
                    <YouTube videoId={videoId} />
                </div>
            ) : (
                <div
                    className="course-page-cover-image"
                    style={{
                        backgroundImage: `url('${image}')`,
                    }}
                ></div>
			)}
			
            <div className="course-page-cover-text">
                <p className="course-page-cover-text__subtitle">{category}</p>

                <h2 className="course-page-cover-text__title">{title}</h2>

                <p
                    className="course-page-cover-text__description"
                    dangerouslySetInnerHTML={{__html: description}}
                ></p>

                <p className="course-page-cover-text__auth">{master}</p>

                {price !== "" ? (
                    <h3 className="course-page-cover-text__price">{price}</h3>
                ) : null}

                {isDemo ? (
                    <Link
                        to={`/course/${_id}/demo`}
                        className="btn course-page-cover-text__btn"
                    >
                        {btnTextDemo}
                    </Link>
                ) : null}
            </div>
        </div>
    );
};

export default CoursePageCover;
