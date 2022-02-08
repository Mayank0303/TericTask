import "./header.css";
import { useSelector } from "react-redux";

export const Header = () => {
  const state = useSelector((store) => store.imgesData);
  return (
    <div className="cirContainer">
      {state.map((e, id) => {
        return (
          <div className="cirbox" key={id}>
            <img className="cirimage" src={e.img} alt={e.id} />
          </div>
        );
      })}
    </div>
  );
};
