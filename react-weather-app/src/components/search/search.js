import { useState } from "react";
import {AsyncPaginate} from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from '../../api';


const Search = ({onSearchChange}) => {

    const [search, setSearch] = useState(null);
    // Seoul, KR

    const loadOptions = (inputValue) => {
        return fetch(
            `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, 
            geoApiOptions
        )
        
        .then((response) => response.json())
        .then((response) => {
            return {
                options: response.data.map((city) => {
                    return {
                        value: `${city.latitude} ${city.longitude}`,
                        label: `${city.name}, ${city.countryCode}`,
                    }
                })
            }
        })
        .catch((err) => console.error(err));
    };

    const handleOnchange = (searchData) => {

        setSearch(searchData);
        onSearchChange(searchData);
    };
   const handleOnClick = (e) => {
         const el = e.currentTarget;
         const city = el.dataset.city;
         let searchData = {};
         switch (city) {
            case "인천" : 
               searchData = { label : "인천",  value : "37.463888888 126.648611111" };
               break;
            case "강원도" : 
               searchData = { label : "강원도", value : "37.8813153 127.7299707"};
               break;
            case "제주" : 
               searchData = { label : "제주", value : "33.1127 126.0843"};
               break;
            case "부산" : 
               searchData = { label : "부산", value : "35.1795543 129.0756416"};
               break;
            case "일산" : 
               searchData = { label : "일산", value : "37.6486290 126.7588420"};
               break;
            case "광주" : 
               searchData = { label : "광주", value : "35.1595454 126.8526012"};
               break;
            case "대구" : 
               searchData = { label : "대구", value : "35.8714354 128.601445"};
               break;
            case "대전" : 
               searchData = { label : "대전", value : "36.3504119 127.3845475"};
               break;
            case "울산" : 
               searchData = { label : "울산", value : "35.5936 129.352"};
               break;
            default : 
               searchData = { label : "서울",  value : "37.56 126.99"};
         }
         setSearch(searchData);
         onSearchChange(searchData);


        // 버튼 on 효과
        
   };


    return (
      <div class="button_box">
         <button type="button" className="on" data-city="
         " onClick={handleOnClick}>서울</button>
         <button type="button" data-city="인천" onClick={handleOnClick}>인천</button>
         <button type="button" data-city="일산" onClick={handleOnClick}>일산</button>
         <button type="button" data-city="광주" onClick={handleOnClick}>광주</button>
         <button type="button" data-city="부산" onClick={handleOnClick}>부산</button>
         <button type="button" data-city="대구" onClick={handleOnClick}>대구</button>
         <button type="button" data-city="대전" onClick={handleOnClick}>대전</button>
         <button type="button" data-city="울산" onClick={handleOnClick}>울산</button>
         <button type="button" data-city="강원도" onClick={handleOnClick}>강원도</button>
         <button type="button" data-city="제주" onClick={handleOnClick}>제주</button>
      </div>
    )
}

export default Search;