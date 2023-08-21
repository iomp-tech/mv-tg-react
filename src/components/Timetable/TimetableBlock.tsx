import React from "react";
import {Link} from "react-router-dom";
import moment from "moment";

import {Timetable} from "../../models/ITimetable";

interface TimetableBlockProps extends Timetable {}

const TimetableBlock: React.FC<TimetableBlockProps> = ({
    _id,
    image,
    category,
    title,
    description,
	date,
	btnText
}) => {
    return (
        <Link to={`/timetable/${_id}`} className="timetable-block">
            <div
                className="timetable-block-image"
                style={{
                    backgroundImage: `url('${image}')`,
                }}
            ></div>

            <div className="timetable-block-text">
                <p className="timetable-block-text__subtitle">{category}</p>

                <h2 className="timetable-block-text__title">{title}</h2>

                <p
                    className="timetable-block-text__description"
                    dangerouslySetInnerHTML={{__html: description}}
                >
                </p>

                <h3 className="timetable-block-text__date">
                    {moment(date).format("DD MMMM, HH:mm")}
                </h3>

                <button className="btn timetable-block-text__btn">
                    {btnText}
                </button>
            </div>
        </Link>
    );
};

export default TimetableBlock;
