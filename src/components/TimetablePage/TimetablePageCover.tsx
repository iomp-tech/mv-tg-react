import React from "react";
import moment from "moment";
import YouTube from "react-youtube";

import {Timetable} from "../../models/ITimetable";

interface TimetablePageCoverProps extends Timetable {}

const TimetablePageCover: React.FC<TimetablePageCoverProps> = ({
	image,
	videoUrl,
    category,
    title,
    description,
    date,
}) => {
    let videoId: any;

    if (videoUrl) {
        const video = new URL(videoUrl);
        const videoParams = new URLSearchParams(video.search);

        videoId = videoParams.get("v");
	}
	
    return (
        <div className="timetable-page-cover">
            {videoId ? (
                <div className="timetable-page-cover-video">
                    <YouTube videoId={videoId} />
                </div>
            ) : (
                <div
                    className="timetable-page-cover-image"
                    style={{
                        backgroundImage: `url('${image}')`,
                    }}
                ></div>
            )}

            <div className="timetable-page-cover-text">
                <p className="timetable-page-cover-text__subtitle">
                    {category}
                </p>

                <h2 className="timetable-page-cover-text__title">{title}</h2>

                <p
                    className="timetable-page-cover-text__description"
                    dangerouslySetInnerHTML={{__html: description}}
                ></p>

                <h3 className="timetable-page-cover-text__date">
                    {moment(date).format("DD MMMM, HH:mm")}
                </h3>
            </div>
        </div>
    );
};

export default TimetablePageCover;
