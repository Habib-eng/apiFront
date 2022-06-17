import React from "react";
import AdminSidebar from "./AdminSidebar";
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
import StatusCard from "./StatusCard";
import { Progress } from "@material-tailwind/react";
import ChartBar from "./ChartBar";
import axios from "axios";
class AdminReclamations extends React.Component {

  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      stats: [],
      diagramme: [],
      DataisLoaded: false
    };
  }
  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch(
      "http://localhost:8000/api/reclamations")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
        });
      });
    fetch(
      "http://localhost:8000/api/satisfaction")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          stats: json,
        });
      });
    fetch(
      "http://localhost:8000/api/statistiques")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          diagramme: json,
        });
      });
  }
  render() {
    const { items, stats, diagramme } = this.state;
    return (
      <div className="md:m-10">
        <AdminSidebar />
        <div className="grid grid-cols-1 m-10 lg:grid-cols-2 xl:grid-cols-5">
          <StatusCard
            color="pink"
            icon="work"
            title="Département R&D"
            percentage="30"
            percentageIcon="arrow_upward"
            percentageColor="green"
            date="Réclamations"
          />
          <StatusCard
            color="pink"
            icon="work"
            title="Département RH"
            percentage="30"
            percentageIcon="arrow_upward"
            percentageColor="green"
            date="Réclamations"
          />
          <StatusCard
            color="orange"
            icon="poll"
            title="Departement Déploiment"
            percentage="10"
            percentageIcon="arrow_upward"
            percentageColor="red"
            date="Réclamations"
          />
          <StatusCard
            color="purple"
            icon="paid"
            title="Département Achats"
            percentage="30"
            percentageIcon="arrow_upward"
            percentageColor="orange"
            date="Réclamations"
          />
          <StatusCard
            color="blue"
            icon="groups"
            title="Departement DAF"
            percentage="12"
            percentageIcon="arrow_upward"
            percentageColor="green"
            date="Récalamtions"
          />
        </div>
        <div className="px-3 md:px-8 h-auto">
          <div className="container mx-auto max-w-full">
            <div className="grid grid-cols-1 xl:grid-cols-5">
              <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
                <ChartBar
                  data={diagramme}
                />
              </div>
              <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14">
                <Card>
                  <CardHeader color="purple" contentPosition="none">
                    <div className="w-full flex items-center justify-between">
                      <h2 className="text-white text-2xl">Taux de satisfaction des employers</h2>
                      <Button
                        color="transparent"
                        buttonType="link"
                        size="lg"
                        style={{ padding: 0 }}
                      >
                        See More
                      </Button>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <div className="overflow-x-auto">
                      <table className="items-center w-full bg-transparent border-collapse">
                        <thead className="thead-light">
                          <tr>
                            <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                              Département
                            </th>
                            <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left w-56"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            stats.map((stat) => (
                              <tr>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                  {stat.departement}
                                </th>
                                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                  <Progress color="blue" value={stat.satisfaction} />
                                </td>
                              </tr>
                            ))
                          }
                        </tbody>
                      </table>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <Card>
          <CardHeader color="purple" contentPosition="none">
            <div className="w-full flex items-center justify-between">
              <h2 className="text-white text-2xl">Liste des réclamations </h2>
              <Button
                color="transparent"
                buttonType="link"
                size="lg"
                style={{ padding: 0 }}
              >
                See More
              </Button>
            </div>
          </CardHeader>
          <CardBody>
            <div className="overflow-x-auto">
              <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr>
                    <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                      Numéro
                    </th>
                    <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                      Propriètaire
                    </th>
                    <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                      Statut
                    </th>
                    <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    items.map((item) => (
                      <tr>
                        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                          {item.titre}
                        </th>
                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                          {item.email}
                        </td>
                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                          {item.departement}
                        </td>
                        <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                          {item.month}
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default AdminReclamations;
