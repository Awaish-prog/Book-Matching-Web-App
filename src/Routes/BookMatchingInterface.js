import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { getBookMatchingData } from "../ApiCalls/ApiCalls";
import NavMenu from "../Components/NavMenu";

export default function BookMatchingInterface(){

    const [data, setData] = useState({})
    const [displayData, setDisplayData] = useState(false)

      async function setBookMatchingData(){
        const bookMatchingData = await getBookMatchingData()
        setData({
            options: {
              chart: {
                id: "basic-bar",
              },
              xaxis: {
                categories: bookMatchingData.allGenresAndBooks
              },
            },
            series: bookMatchingData.bookMatchingData
          })
      }

      useEffect(() => {
        setBookMatchingData()
      }, [])
      
      useEffect(() => {
        if("options" in data){
            setDisplayData(true)
        }
      }, [data])

    return (
        <>
            <NavMenu />
            {displayData && <Chart
                options={data.options}
                series={data.series}
                type="line"
                width="100%"
                height="500px"
            />}
          
        </>
    )
}