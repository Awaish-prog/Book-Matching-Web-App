import { useContext, useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { getBookMatchingData } from "../ApiCalls/ApiCalls";
import NavMenu from "../Components/NavMenu";
import { CurrentUserContext } from "../App";
import { useNavigate } from "react-router-dom";
import Logout from "../Components/Logout";

export default function BookMatchingInterface(){
    const navigate = useNavigate()
    const [data, setData] = useState({})
    const [displayData, setDisplayData] = useState(false)
    const [currentUser, setCurrentUser] = useContext(CurrentUserContext)

    async function setBookMatchingData(){
        const bookMatchingData = await getBookMatchingData(currentUser, localStorage.getItem(currentUser))
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
        if(!currentUser){
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
            <NavMenu />
            <Logout />
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