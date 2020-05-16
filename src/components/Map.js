import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import Geocoder from 'react-native-geocoding';
import openMap from 'react-native-open-maps';
import { GOOGLE_API_KEY } from '../utils/apiKey';
import { Button } from '../components/common/index';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const MapContainer = (props) => {
  const [region, setRegion] = useState({
    latitude: 35.6803997,
    longitude: 139.7690174,
    latitudeDelta: 0.009,
    longitudeDelta: 0.009
  });
  const goToMap = () => {
    openMap({ latitude: region.latitude, longitude: region.longitude, query: props.location, zoom: 0  })
  }
  useEffect(() => {
    Geocoder.init(GOOGLE_API_KEY.geocoder); 
    Geocoder.from(props.location)
        .then(json => {
            const { lat, lng,} = json.results[0].geometry.location;
            setRegion(state => (
              {
                ...state,
                latitude:lat,
                longitude:lng,
              }
            ));
        })
        .catch(error => console.warn(error));
  },[]);
    return (
        <>
        <MapView
            region={region}
            onRegionChangeComplete={region => setRegion(region)}
            style={styles.mapStyle}
          >
          <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} />
          </MapView>
          <View style={styles.mapButtonContainer}>
            <Button onPress={() => {goToMap()}}>Get direction</Button>
          </View>
        </>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    height: 420,
  },
  mapButtonContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center', 
    position: 'absolute',
    bottom: 0,
    left: 10
  },
});

export default MapContainer;