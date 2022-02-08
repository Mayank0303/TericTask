import { useSelector } from "react-redux";
import "./bmx.css";

export const Bmx = () => {
  const state = useSelector((store) => store.data);

  return (
    <div className="container1">
        
      {state.map((e,id) => {
        return (
          <div key={id}>
            <div className="boxs">
              <img className="box-img" src={e.image} alt="images" />
              <div className="box-foot">
                <div>
                <div className="days">Day {e.day} of BMX</div>
                <div className="btns">
                  <button>{e.ftype}</button>
                  <button>{e.stype}</button>
                </div>
                </div>
                <div>{e.time}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

 

