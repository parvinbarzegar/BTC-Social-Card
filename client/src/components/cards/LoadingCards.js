import React from "react";
import {Card , Skeleton} from "antd";


const LoadingCards = ({count}) =>{

    const cards = () => {
        let totalCards = [];

        for (let i = 0; i < count; i++) {
            totalCards.push(
                <Card className = "col-md-10 pt-3" key = {i}>
                    <Skeleton active avatar paragraph={{ rows: 4 }}></Skeleton>
                </Card>
            );
        };
        return totalCards;
    }
    return( <div className = " row pb-5">{cards()}</div>);
};



export default LoadingCards;