import React, { Component } from "react";
import GoogleMaps from "simple-react-google-maps";



export default class Maps extends Component {
  render() {
    return (
      <div className="container">
        <h1>MAPA DE MI CASA</h1>
        <GoogleMaps
          apiKey={"AIzaSyAtVF9jeydjoY6uO86BYqDhYZ-kXnQ45h4"}
          style={{ height: "35vmax"}}
          zoom={16}
          center={{
            lat: 24.034953,
            lng: -104.623407
             
          }}
          markers={[
            { lat: 24.034953, lng: -104.623407 },
          ]}
        />
      </div>
    );
  }
}
