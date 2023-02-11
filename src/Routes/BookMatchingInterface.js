import Chart from "react-apexcharts";
import NavMenu from "../Components/NavMenu";

export default function BookMatchingInterface(){

    const data = {
        options: {
          chart: {
            id: "basic-bar",
          },
          xaxis: {
            categories: ["Tragedy", "Novel", "Drama", "Biography", "Macbeth", "King Lear", "The Great Gatsby", "Catch-22", "The Kite Runner", "Hamlet", "Steve Jobs", "Wings of Fire"]
          },
        },
        series: [
          {
            name: "series-1",
            data: [10, 0, 30, 0, 0, 60, 70, 80, 0, 60, 70, 80],
          },
          {
            name: "series-2",
            data: [10, 20, 30, 0, 0, 60, 0, 80, 0, 60, 0, 80],
          },
          {
            name: "series-3",
            data: [0, 20, 0, 40, 50, 0, 0, 80],
          },
          {
            name: "series-4",
            data: [10, 20, 0, 0, 50, 0, 70, 0],
          }
        ],
        
      };
      
    return (
        <>
            <NavMenu />
            <Chart
                options={data.options}
                series={data.series}
                type="line"
                width="100%"
                height="500px"
            />
          
        </>
    )
}