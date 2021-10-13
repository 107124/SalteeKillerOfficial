import React from "react";
import axios from "axios";

import "./styles/videos.css";
import NavBar from "./navigation";

// var axios = require("axios").default;

var options = {
  method: "GET",
  url: "https://youtube-search-results.p.rapidapi.com/youtube-search/",
  params: { q: "salteekiller" },
  headers: {
    "x-rapidapi-host": "youtube-search-results.p.rapidapi.com",
    "x-rapidapi-key": "7603016162msh8263f88a5aa10dfp18e91ajsna3493aef8fcf"
  }
};

// let handleRequest = (event) => {
//   // event.preventDefault();
//   axios
//     .request(options)
//     .then(function (response) {
//       console.log(response.data);
//       let data = 'response.data["originalQuery"]';
//       // this.setState({
//       //   data: response.data["originalQuery"]
//       // });
//       return data;
//     })
//     .catch(function (error) {
//       console.error(error);
//     });
//   // .then({
//   //   this.setState(
//   //     data: "hi"

//   //   })
//   // )
// };

export default class Videos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      test: this.data
    };
  }

  render() {
    return (
      <div className="videos-page">
        <NavBar />
        videos
        <p>{this.state.data}</p>
        {/* <p>{handleRequest()}</p> */}
      </div>
    );
  }
}
