import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

var beneficios = [0, 56, 20, 36, 80];
var meses = ["18:30", "18:45", "19:00", "19:15", "19:30"];

var midata = {
    labels: meses,
    datasets: [ // Cada una de las líneas del gráfico
        {
            label: 'Tickets',
            data: beneficios,
            tension: 0.5,
            fill : true,
            borderColor: 'rgb(0,0,0)',
            backgroundColor: 'rgba(252, 186, 3)',
            pointRadius: 5,
            pointBorderColor: 'rgba(0,0,0)',
            pointBackgroundColor: 'rgba(0,0,0)',
        },
        // {
        //     label: 'Otra línea',
        //     data: [20, 25, 60, 65, 45, 10, 0, 25, 35, 7, 20, 25]
        // },
    ],
};

var misoptions = {
    scales : {
        y : {
            min : 0
        },
        x: {
            ticks: { color: 'rgb(255, 99, 132)'}
        }
    }
};

export default function LinesChart() {
    return <Line data={midata} options={misoptions}/>
}