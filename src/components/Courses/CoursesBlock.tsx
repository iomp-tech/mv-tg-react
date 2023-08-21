import React from "react";
import {Link} from "react-router-dom";

import {Course} from "../../models/ICourse";

interface CoursesBlockProps extends Course {}

const CoursesBlock: React.FC<CoursesBlockProps> = ({
    _id,
    image,
    category,
    title,
    description,
    master,
	price,
	btnText
}) => {
    return (
        <Link to={`/course/${_id}`} className="courses-block">
            <div
                className="courses-block-image"
                style={{
                    backgroundImage: `url('${image}')`,
                }}
            ></div>

            <div className="courses-block-text">
                <p className="courses-block-text__subtitle">{category}</p>

                <h2 className="courses-block-text__title">{title}</h2>

                <p
                    className="courses-block-text__description"
                    dangerouslySetInnerHTML={{__html: description}}
                ></p>

                <p className="courses-block-text__auth">{master}</p>

                {price !== "" ? (
                    <h3 className="courses-block-text__price">{price}</h3>
                ) : null}

                <button className="btn courses-block-text__btn">
                    {btnText}
                </button>
            </div>
        </Link>
    );
};

export default CoursesBlock;
