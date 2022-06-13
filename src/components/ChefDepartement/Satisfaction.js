import ChartLine from "components/ChartLine";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import axios from "axios";

export default function Satisfaction() {
  const { id } = useParams();
  const [stat, setStat] = useState([]);
  useEffect(() => {
    const getData = async () => {
      await axios.get("http://localhost:3002/stat_departement").then((res) => {
        setStat(res.data);
      });
    };
    getData();
  }, []);
  console.log(stat);
  const { info } = stat;
  console.log(info);
  return <ChartLine param={info} />;
}
