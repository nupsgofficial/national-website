import {AiOutlineSearch} from "react-icons/ai"

import {BiChevronDown} from "react-icons/bi"

import { useState } from "react";

const Select = ({data}) => {

    let [inputValue,setInputValue]=useState('');
    let [selected,setSelected]=useState('');
    let [open,setOpen]=useState(false);



    return ( 
        <div className="">
             {/* select */}

             <div className="w-60 bg-gray-200 font-medium  shadow">

<div className="bg-gray-200 w-full p-2 flex items-center justify-between rounded" onClick={()=>setOpen(!open)}>
    {selected ? selected :'select school'}
    <BiChevronDown size={24}/>
</div>
<ul className={`bg-white mt-1 ${open ?'max-h-52': 'max-h-0'} overflow-y-auto`}>
    {/* search */}
    <div className="flex items-center px-2 justify-between sticky top-0 bg-white">
        <AiOutlineSearch size={18} className="text-gray-700"/>

        <input type="text" 
        value={inputValue}
        onChange={(e)=>setInputValue(e.target.value.toLowerCase())}
        name="search" placeholder="--Enter school name" className="placeholder: text-gray-700 p-2 outline-none w-[90%]" />
    </div>
    

{data?.filter((school)=>{
    return inputValue.toLowerCase()===''? school : school.name.toLowerCase().includes(inputValue)
}).map((school)=>(
    <li key={school?.id}
    className={`p-2 text-sm hover:bg-primary hover:text-white`}
    onClick={()=>{
        if(school?.name?.toLowerCase() !== selected.toLowerCase()){
            setSelected(school?.name);
            setOpen(!open)
        }
    }}
    >
        {school.name}

    </li>
))}
</ul>
</div>
        </div>
     );
}
 
export default Select;