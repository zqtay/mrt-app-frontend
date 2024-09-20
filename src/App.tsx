import { FC, useEffect, useState } from 'react';
import './App.css';

import StationService from "./services/station";
import { StationArrival, StationData, StationInfo } from "./types/station";
import { AutoComplete } from "./components/ui/autocomplete";
import { StationBadge } from "./components/mrt/station-badge";

const App: FC = () => {
  const [stations, setStations] = useState<StationData[]>([]);
  const [info, setInfo] = useState<StationInfo>();
  const [arrivals, setArrivals] = useState<StationArrival[]>();

  useEffect(() => {
    StationService.getAllStations().then(data => setStations(data.results));
  }, []);

  const handleSelect = (e: any) => {
    StationService.getStationInfo(e.value).then(data => setInfo(data.results[0]));
    StationService.getStationArrivals(e.value).then(data => setArrivals(data.results));
  };

  return (<div className="container mx-auto">
    <AutoComplete
      options={stations.map(station => ({ label: `${station.code} ${station.name}`, value: station.name }))}
      emptyMessage={"Type station name or code"}
      onValueChange={handleSelect}
      itemTemplate={(item) => {
        let [codes, ...name] = item.label.split(" ");
        return <div className="flex items-center">
          {
            codes.split(",").map((code, i) => <StationBadge key={i} code={code} className="mr-1" />)
          }
          <span className="ml-1">{name.join(" ")}</span>
        </div>;
      }}
    />
    <div>
      <h1>{info?.code} {info?.name}</h1>
      {
        arrivals?.map((e, i) => <ArrivalCard key={i} arrival={e} />)
      }
    </div>
  </div>);
};

const ArrivalCard = ({ arrival }: { arrival: StationArrival; }) => {
  return (<div className="card">
    <div>Towards {arrival.next_train_destination}</div>
    <div>{arrival.platform_ID}</div>
    <div>{arrival.next_train_arr} mins</div>
    {arrival.code}
  </div>);
};

export default App;
