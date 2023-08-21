import React from "react";
import {Field, reduxForm, InjectedFormProps} from "redux-form";
import {createTextMask} from "redux-form-input-masks";

import {RenderInput} from "../";

import {validate} from "./validate";

const TimetablePageForm: React.FC<any> = ({handleSubmit, formTitle}) => {
    console.log(formTitle);
    return (
        <form className="timetable-page-form" onSubmit={handleSubmit}>
            <h3 className="timetable-page-form__title">{formTitle}</h3>

            <div className="timetable-page-form-input">
                <Field
                    component={RenderInput}
                    label={"Ваша почта"}
                    type="text"
                    name="email"
                />
            </div>

            <div className="timetable-page-form-input">
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

            <button className="btn timetable-page-form__btn" type="submit">
                Оставить заявку
            </button>
        </form>
    );
};

export default reduxForm<{}>({
    form: "timetable-page-form",
    validate,
})(TimetablePageForm);
