/* eslint-disable no-unused-vars */

// import React from 'react';
import { Chart } from 'react-google-charts';
import { useLoaderData } from 'react-router-dom';
import { getStoredDonation, saveDonation } from '../../utility/localStorage';
import { stringify } from 'postcss';

const Statistics = () => {
    const dataLoadDonation = useLoaderData()
    const data = [
        ['Task', 'Hours per Day'],
        ['Total Donation', dataLoadDonation.length],
        ['Your Donation', getStoredDonation().length]
    ];

    const options = {
        title: 'Donation Data',
    };

    return (
        <div className="container mx-auto">
            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width="100%"
                height="550px"
            />
        </div>
    );
};

export default Statistics;
