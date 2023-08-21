import React from "react";
import {Field, reduxForm, InjectedFormProps} from "redux-form";
import {createTextMask} from "redux-form-input-masks";

import {RenderInput} from "../";

import {validate} from "./validate";

const CoursePageForm: React.FC<any> = ({handleSubmit, formTitle}) => {
    return (
        <form className="course-page-form" onSubmit={handleSubmit}>
            <h3 className="course-page-form__title">{formTitle}</h3>

            <div className="course-page-form-input">
                <Field
                    component={RenderInput}
                    label={"Ваше имя"}
                    type="text"
                    name="name"
                />
            </div>

            <div className="course-page-form-input">
                <Field
                    component={RenderInput}
                    label={"Ваша почта"}
                    type="text"
                    name="email"
                />
            </div>

            <div className="course-page-form-input">
                <Field
                    component={RenderInput}
                    label={"Ваш телефон"}
                    type="text"
                    name="phone"
                    {...createTextMask({
                        pattern: "+7 999 999 99-99",
                        guide: false,
                        stripMask: false,
                    })}
                />
            </div>

            <button className="btn course-page-form__btn">
                Оставить заявку
            </button>
        </form>
    );
};

export default reduxForm<{}>({
    form: "course-page-form",
    validate,
})(CoursePageForm);
