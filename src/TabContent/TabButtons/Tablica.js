import {useState, useEffect} from 'react';
import {URL} from "../../Utils/Constants";
import Buttons from "./Buttons/Buttons";
import './Style.css'
import Filter_api from "./Buttons/Filter_api";

function Tablica() {
    const [name, setName] = useState('users')
    const [data, setData] = useState([])
    const gettingData = async (api) => {
        try {
            const response = await fetch(`${URL}/${api}`)
            const result = await response.json()
            setData(result)
        } catch (error) {
            throw error
        }
    }
    useEffect(() => {
        gettingData(name);
    }, [name])
    const refreshChange = (text) => {
        setName(text);
        gettingData(text);
    }
    return (
        <>
            <Buttons
                data={data}
                name={name}
                refreshChange={refreshChange}/>
            <Filter_api
                data={data}
                name={name}/>

        </>
    )
}

export default Tablica;