import React, { Component } from 'react';
import { HEREMap, Marker } from 'here-maps-react';

export default class HereMap extends Component {
  render() {
    return (
      <div id="map" style={{width:"100vw", height: "100vh"}}>
          <HEREMap
              apikey="PVTVHYZJ2loucbm8Bwo4Kdalq7VpLWDToQmBb3GgrA4"
              appId="9LG13iRj87r7ElXjniCW"
              appCode="-pNFqjZpb191n9D580r35A"
              interactive= {true}
              center={{ lat: -23.5475, lng: -46.63611 }}
              zoom={5}
          >
              <Marker
                  lat={-23.5475}
                  lng={-46.63611}
                  draggable
              />
          </HEREMap>
      </div>
    )
  }
}