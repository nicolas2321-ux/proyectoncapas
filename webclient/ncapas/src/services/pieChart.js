import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

var options = {

  
};

var data = {
    labels: ['Tickets disponibles', 'Tickets vendidos'],
    datasets: [
        {
            label: 'Tickets',
            data: [100, 40],
            backgroundColor: [
                'rgba(252, 186, 3)',
                'rgba(255, 206, 86, 0.2)',
                
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 206, 86, 1)',
               
            ],
            borderWidth: 1,
        },
    ],
};

export default function Pies() {
    return <Pie data={data} options={options} />
}