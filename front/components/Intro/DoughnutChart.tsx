import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import styled from "styled-components";
import { bottomNavigationActionClasses } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['재활용', '폐기처리'],
  datasets: [
    {
      label: '# of Votes',
      data: [40, 60],
      backgroundColor: [
        '#B8D8D8',
        '#D3D3D3',
      ],
      borderColor: [
        '#8aadb8',
        '#C0C0C0',
      ],
      borderWidth: 1,
      cutout: "70%",
    },
  ],
}

const options = {
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: true,
            text: "실질 재활용률"
        }
        
    }
}

export default function DoughnutChart() {
    return (
        <Wrapper>
            <Doughnut 
                data={data}
                options={options}
            />
        </Wrapper>
    ) 
}

const Wrapper = styled.div`
    position: relative;
    width: 200px;
    height: 200px;
    margin-bottom: 50px;
`;