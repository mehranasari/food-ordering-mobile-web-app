import React, { useState, useRef } from "react";
import NeshanMap from "react-neshan-map-leaflet";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
//components
import { Row } from "../../../Kit/Row.js";
import StyledButton from "../../../Shared/StyledButton";
import SearchAddressModal from "../../../Modals/SearchAddressModal";
//icon
import GpsIcon from "../../../Assets/icons/GpsIcon.jsx";
import LoadingIcon from "../../../Assets/icons/LoadingIcon.jsx";
import FillLocationPinIcon from "../../../Assets/icons/FillLocationPinIcon.jsx";
import SearchIcon from "../../../Assets/icons/SearchIcon.jsx";
//styles
import {
  AddUpdateLocaionContainer,
  MapContainer,
  SubmitLocationButton,
  LoadingWrapper,
  SearchAddressContainer,
} from "./styles.jsx";
//constants
let map = null;
let leafLet = null;
let circleLayer = null;

const SelectLocation = ({
  onSelectLocation,
  location,
  venueLocation,
  theme,
  onSearchAddress,
}) => {
  let newLocation = useRef(
    location && location?.length !== 0
      ? location
      : venueLocation && venueLocation?.length > 0
      ? venueLocation
      : [35.729054, 51.42047]
  );
  const selectedAddressRef = useRef(null);
  const [state, setState] = useState({ loading: false, selectedAddress: null });
  const history = useHistory();

  const handleUserLocation = () => {
    if (navigator.geolocation) {
      setState({ ...state, loading: true });
      if (circleLayer) {
        map.removeLayer(circleLayer);
      }
      navigator.geolocation.getCurrentPosition(
        function (position) {
          map.setView(
            [position?.coords?.latitude, position?.coords?.longitude],
            18,
            {
              animate: true,
              pan: {
                duration: 1,
              },
            }
          );
          circleLayer = leafLet
            .circle([position?.coords?.latitude, position?.coords?.longitude], {
              color: "#1274D7",
              fillColor: "#1274D7",
              fillOpacity: 0.2,
              radius: 5,
            })
            .addTo(map);
          setState({ ...state, loading: false });
        },
        () => {
          setState({ ...state, loading: false });
          toast.error(
            "متأسفانه موقعیت شما یافت نشد! لطفاً به صورت دستی موقعیت خود را روی نقشه مشخص کنید.",
            {
              autoClose: 3000,
            }
          );
        }
      );
    } else {
      setState({ ...state, loading: false });
      toast.error(
        "متأسفانه موقعیت شما یافت نشد! لطفاً به صورت دستی موقعیت خود را روی نقشه مشخص کنید.",
        {
          autoClose: 3000,
        }
      );
    }
  };
  const handleSearchAddress = () => {
    onSearchAddress();
    // setState({ ...state, selectedAddress: null });
    selectedAddressRef.current = null;
  };
  return (
    <>
      <AddUpdateLocaionContainer>
        <MapContainer>
          <NeshanMap
            options={{
              key: "web.a7afecb75671422dbc0886a1335ab1b6",
              center:
                location && location?.length !== 0
                  ? location
                  : venueLocation && venueLocation?.length > 0
                  ? venueLocation
                  : [35.729054, 51.42047],
              zoom: 12,
            }}
            onInit={(L, myMap) => {
              myMap.setMapType(theme.map_type);
              myMap.on("move", function (e) {
                const { lat, lng } = myMap.getCenter();
                newLocation.current = [lat, lng];
                if(selectedAddressRef.current && (selectedAddressRef.current?.location?.x!==lng || selectedAddressRef.current?.location?.y!==lat)){
                    setState({ ...state, selectedAddress: null });
                    selectedAddressRef.current = null;
                }
              
              });
              map = myMap;
              leafLet = L;

            }}
            
          />
          <div className="locationPin">
            <FillLocationPinIcon color={theme.primary} />
          </div>
          <Row className="userLocation" onClick={handleUserLocation}>
            <GpsIcon fill={theme.color_icon_primary} />
          </Row>
          <SearchAddressContainer
            className="search "
            onClick={handleSearchAddress}
          >
            <Row className="icon-wrapper">
              <SearchIcon stroke={theme.color_icon_primary} />
            </Row>
            <div className="fade">
              {state?.selectedAddress
                ? `${state?.selectedAddress?.title}: ${state?.selectedAddress?.region} ${state?.selectedAddress?.neighbourhood? state?.selectedAddress?.neighbourhood : ""} ${state?.selectedAddress?.address}`
                : "جستجو کنید"}
            </div>
          </SearchAddressContainer>
        </MapContainer>
        <SubmitLocationButton>
          <StyledButton
            submitForm={() => {
              onSelectLocation(newLocation.current);
            }}
          >
            انتخاب
          </StyledButton>
        </SubmitLocationButton>
        {state?.loading && (
          <LoadingWrapper>
            <LoadingIcon size={"lg"}  color={theme.color_icon_primary}/>
          </LoadingWrapper>
        )}
      </AddUpdateLocaionContainer>
      <SearchAddressModal
        center={newLocation.current}
        onSelectedAddress={(address) => {
          const newLocationـ = [address?.location?.y, address?.location?.x];
          setState({ ...state, selectedAddress: address });
          selectedAddressRef.current = address;
          history.goBack();
          map.setView(newLocationـ, 18, {
            // animate: true,
            pan: {
              duration: 1,
            },
          });
        }}
      />
    </>
  );
};

export default SelectLocation;
