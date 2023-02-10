import Chart, {ApexCharts} from "react-apexcharts";

export default function BookMatchingInterface(){

    const data = {
        options: {
          chart: {
            id: "basic-bar",
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
          },
        },
        series: [
          {
            name: "series-1",
            data: [30, 40, 45, 50, 59, 60, 70, 91],
            strokeWidth: 4
          },
          {
            name: "series-2",
            data: [30, 40, 45, 50, 49, 60, 70, 91],
            strokeWidth: 2
          }
        ],
        
      };
      
    return (
        <>
            <Chart
                options={data.options}
                series={data.series}
                type="line"
                width="1000"
            />
          
        </>
    )
}