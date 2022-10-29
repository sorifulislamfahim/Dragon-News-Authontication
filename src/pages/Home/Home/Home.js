import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/UseTitle';
import NewsSummaryCard from '../../Share/NewsSummaryCard/NewsSummaryCard';

const Home = () => {
    const allNews = useLoaderData();
    useTitle("Home")
    return (
        <div>
            {
                allNews.map(news => <NewsSummaryCard
                    key={news._id}
                    news={news}
                ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Home;