import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import WasteInfo from "../../public/wasteInfo.json";

interface WasteInfo {
    region: string[];
    name: string[];
}

const regionData = Array.from(new Set(WasteInfo.map((data) => data.region)));
const nameData = Array.from(new Set(WasteInfo.map((data) => data.name)));

export default function Search({handleSetMapData}) {
    const [region, setRegion] = useState<String | null>(null);
    const [name, setName] = useState<String | null>(null);
    const [inputRegion, setInputRegion] = useState('');
    const [inputName, setInputName] = useState('');

    useEffect(() => {
        if (name) {
            handleSetMapData(WasteInfo.filter((data) => data.region === region && data.name === name))
        } else {
            handleSetMapData(WasteInfo.filter((data) => data.region === region))
        }
        
    },[region, name])
    
    return (
        <Wrapper>
            <Autocomplete
                value={region}
                onChange={(event: any, newValue: string | null) => {
                    setRegion(newValue);
                }}
                inputValue={inputRegion}
                onInputChange={(event, newInputValue) => {
                    setInputRegion(newInputValue);
                }}
                id="controllable-states-demo"
                options={regionData}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="시/도" />}
            />
            <Autocomplete
                value={name}
                onChange={(event: any, newValue: string | null) => {
                    setName(newValue);
                }}
                inputValue={inputName}
                onInputChange={(event, newInputValue) => {
                    setInputName(newInputValue);
                }}
                id="controllable-states-demo"
                options={nameData}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="시/군/구" />}
            />
        </Wrapper>
    );
}


const Wrapper = styled.div`
    width: 650px;
    display: flex;
    justify-content: space-between;
`;
