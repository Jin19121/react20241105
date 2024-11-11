import React from "react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";

function MyApp61(props) {
  return (
    <div>
      <Button
        onClick={() =>
          axios.post("/api/main1/sub8", [
            { name: "kim", team: "Hipochi", age: "28" },
            { name: "lee", team: "vocal", age: "29" },
            { name: "seo", team: "performance", age: "28" },
          ])
        }
      >
        btn4
      </Button>
      <Button
        onClick={() =>
          axios.post("/api/main1/sub7", ["coffee", "cocoa", "milk"])
        }
      >
        btn3
      </Button>
      <Button
        onClick={() => {
          axios.post("/api/main1/sub6", {
            name: "kim",
            married: true,
            kids: null,
            item: ["car", "house", "bitcoin"],
            team: {
              name: "svt",
              location: "yongsan",
            },
          });
        }}
      >
        btn2
      </Button>
      <hr />
      <Button
        onClick={() => {
          axios.post("/amp/main1/sub5", {
            name: "gyu",
            age: 30,
          });
        }}
      >
        btn1
      </Button>
    </div>
  );
}

export default MyApp61;
