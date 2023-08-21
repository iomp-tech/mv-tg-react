import React from "react";

const RenderInput: React.FC<any> = ({label, input, meta: {touched, error}}) => {
    return (
        <div className={`input ${touched && error ? "error" : ""}`}>
            <input {...input} className="input__field" placeholder={label} />

            {touched && error && <span className="input__error">{error}</span>}
        </div>
    );
};

export default RenderInput;
