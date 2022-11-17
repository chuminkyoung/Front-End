import "./App.css";
import { PieChart } from "react-minimal-pie-chart";

function Piechart(props) {
  console.log(props);
  const list = props.data.list;
  console.log(list);

  const Chart = () => {

    return(
      <PieChart
        data={[
          {
            value: 20,
            // value: list[3].main.temp,
            color: "#0077cc",
            name: "name1",
          }
        ]}
        reveal={20} // 퍼센트
        lineWidth={18}
        background = "#f3f3f3"
        lengthAngle={360}
        rounded
        animate 
        label={({ dataEntry }) => dataEntry.value + "%"}
      />
    );
  };
  
}