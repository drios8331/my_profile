// import '../style.css';
import "antd/dist/antd.css";
import { Timeline } from "antd";
// const image = require.context("../assets/imagOthers", true);

function Card() {
  return (
    <div className="card shadow">
      <div className="card-body p-5">
        <div className="row text-center">
          <div className="col">
            <Timeline mode="alternate">
              <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
              <Timeline.Item color="Red">
                Solve initial network problems 2015-09-01
              </Timeline.Item>
              <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
              <Timeline.Item>
                Network problems being solved 2015-09-01
              </Timeline.Item>
            </Timeline>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
