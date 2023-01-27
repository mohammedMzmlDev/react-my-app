import { useEffect } from 'react';
import Select from 'react-select'
import axios from 'axios'
import UniversityTable from './UniversityTable';
import { useState } from 'react';

const UniversityLists = () => {
    const countries = [
        { label:"India", value:"India" },
        { label:"USA", value:"USA" },
        { label:"UK", value:"UK" },
        { label:"Germany", value:"Germany" }
    ];
    useEffect(() => {
        fetch('http://universities.hipolabs.com/search?country=India').then((res) => {
        }).catch((err) => {
            console.log('err',err);
        })
    })
    const getUniversities = async () => {
        let allData = await axios.get('http://universities.hipolabs.com/search?country=India');
        setUnis(allData)
    }
    getUniversities();
    const [unis,setUnis] = useState([])
    return (
        <div className="Main">
            <select>
                {
                    countries.map(({value,label},i) => 
                        <option key={value}>{value}</option>
                    )
                }
            </select>
            <Select options={countries} />
            <UniversityTable countries={unis}/>
        </div>
    )
}
export default UniversityLists;