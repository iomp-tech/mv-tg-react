import React from "react";

interface ThankProps {
    thankPageTitle: string;
    thankPageDescription: string;
}

const Thank: React.FC<ThankProps> = ({
    thankPageTitle,
    thankPageDescription,
}) => {
    return (
        <section className="thank">
            <div className="container">
                <div className="thank-wrapper">
                    <h2 className="thank__title">{thankPageTitle}</h2>
                    <p
                        className="thank__description"
                        dangerouslySetInnerHTML={{__html: thankPageDescription}}
                    ></p>
                </div>
            </div>
        </section>
    );
};

export default Thank;
