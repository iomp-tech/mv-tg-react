import React from "react";
import {useDispatch} from "react-redux";

import {useTypedSelector} from "../hooks/useTypedSelector";

import {fetchPolicy} from "../redux/actions/policy";

import {Loader, PolicyBlock} from "../components/";

const Policy: React.FC = () => {
    const dispatch = useDispatch();

    const {items, isLoaded} = useTypedSelector(({policy}) => policy);

    React.useEffect(() => {
        dispatch(fetchPolicy() as any);
    }, []);

    return (
        <section className="policy">
            <div className="container">
                <div className="policy-back">
                    <span
                        className="policy-back__back"
                        onClick={() => window.history.back()}
                    >
                        ← Назад
                    </span>
                </div>

                <div className="policy-wrapper">
                    <h2 className="policy__title">
                        Сведения об образовательной организации
                    </h2>

                    {isLoaded ? (
                        items.map((item, index) => (
                            <PolicyBlock
                                {...item}
                                key={`policy-block-${index}`}
                            />
                        ))
                    ) : (
                        <Loader />
                    )}
                </div>
            </div>
        </section>
    );
};

export default Policy;
