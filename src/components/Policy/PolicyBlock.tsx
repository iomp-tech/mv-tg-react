import React from "react";

import {Policy} from "../../models/IPolicy";

interface PolicyBlockProps extends Policy {}

const PolicyBlock: React.FC<PolicyBlockProps> = ({text, images}) => {
    return (
        <div className="policy-block">
            <p
                className="policy-block__text"
                dangerouslySetInnerHTML={{__html: text}}
            ></p>

            {images.map((image, index) => (
				<img className="policy-block__image" src={image} key={`policy-block__image${index}`} />
            ))}
        </div>
    );
};

export default PolicyBlock;
