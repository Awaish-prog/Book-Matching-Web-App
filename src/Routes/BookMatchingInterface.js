import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { getBookMatchingData } from "../ApiCalls/ApiCalls";
import NavMenu from "../Components/NavMenu";
import { useLocation, useNavigate } from "react-router-dom";
import Logout from "../Components/Logout";
import "../CSS/UserInputData.css"
import CircularProgress from '@mui/material/CircularProgress';

export default function BookMatchingInterface(){
    const navigate = useNavigate()
    const location = useLocation()
    const [data, setData] = useState({})
    const [displayData, setDisplayData] = useState(false)

    async function setBookMatchingData(){
        const bookMatchingData = await getBookMatchingData(location.state.userName, localStorage.getItem(location.state.userName))
        setData({
            options: {
              chart: {
                id: "basic-bar",
              },
              xaxis: {
                categories: bookMatchingData.allGenresAndBooks
              },
              grid: {
                borderColor: "#24305E"
              }
            },
            series: bookMatchingData.bookMatchingData
          })
    }

    useEffect(() => {
        if(!localStorage.getItem(location.state.userName)){
            navigate("/")
        }
        setBookMatchingData()
    }, [])
      
    useEffect(() => {
        if("options" in data){
            setDisplayData(true)
        }
    }, [data])

    return (
        <>
            <NavMenu userName={location.state.userName}/>
            <Logout userName={location.state.userName}/>
            <div className="chart">
            {displayData ? <Chart
                options={data.options}
                series={data.series}
                type="line"
                width="100%"
                height="500px"
            /> : <div className="loader"><CircularProgress /></div>}
            </div>
        </>
    )
}