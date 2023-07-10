import React from 'react'
import Mapir from "mapir-react-component";
import styled from "styled-components";

const MapContainer = styled.div`
width:100%;
height:13rem;
overflow:hidden;
margin-top: 2rem;

`

const Map = Mapir.setToken({
    transformRequest: url => {
        return {
            url: url,
            headers: {
                "x-api-key": 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImFlNTRiMjQxZDgwMTcxY2Y1NGNlNDNhZTU4NjJjMzRjMzIyNjI0MTg1M2VlZmMxMDlhNWI1ZDVjN2Q4MjE5NDBlMDIyNTc1MDZhOWYwYWMwIn0.eyJhdWQiOiIxOTU5MCIsImp0aSI6ImFlNTRiMjQxZDgwMTcxY2Y1NGNlNDNhZTU4NjJjMzRjMzIyNjI0MTg1M2VlZmMxMDlhNWI1ZDVjN2Q4MjE5NDBlMDIyNTc1MDZhOWYwYWMwIiwiaWF0IjoxNjY0MzY1NTM2LCJuYmYiOjE2NjQzNjU1MzYsImV4cCI6MTY2Njg3MTEzNiwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.pkV-mcAS-3o4sZZ8cgZ11LKBVNZTEPJba_U2XgUlImyXqBbOdUcLj87qn8jv_E6MhOXmkCda9Zx2pzid3E6fBbJdW0AzUT9K2Hq5xHRi6x71RKpfuMezi02Bflo4uXpdbCJivIcWjK-7QDVc5ATOJi9oU5LqbKovBnMxtB7mqzWwWx5jZYZ_kPO-9k2CLQnzWx-CfMtk1-_rFLxAxl6KvKPiOCH2M9KJvlxrsX_Ve8UNbwbpZk8l4O2yZ3xFVGaaVvBIpUFWh6yfBahgtUjJ-KzhrXNAe-vIDAiR7foY2e_s4BBIz4gN-PeQvv94jcSzGs2ljMesgouyhS7gApuU5w', //Mapir api key
                "Mapir-SDK": "reactjs"
            }
        };
    }
});
const VenueMapLocation = () => {
    return (
        <MapContainer >
            <Mapir
                center={[51.64304282358489, 32.719]}
                Map={Map}
            >
                <Mapir.Layer type="symbol" layout={{ "icon-image": "empty-e71566" }}>
                    <Mapir.Feature coordinates={[51.64304282358489, 32.719]}></Mapir.Feature>
                </Mapir.Layer>
            </Mapir>
        </MapContainer>
    )
}

export default VenueMapLocation