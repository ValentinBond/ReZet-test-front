import React from 'react';
import Skeleton from 'react-loading-skeleton';

const SceletonCards = () => {
    return (<>{
        Array(6).fill(0).map((i, index) => (<div key={index} className="product_card">
                <div className="product_card__header" />
                <div><Skeleton height={262.5}/></div>
                <div style={{ marginBottom: 31 }}><Skeleton count={3}/></div>
                <div className="product_card_actions">
                    <Skeleton height={35} width={141}/>
                </div>
            </div>))
    }</>);
};

export default SceletonCards;