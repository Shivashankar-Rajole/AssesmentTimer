import { IconButton } from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import * as utils from "../utils";

export default function TimeButtons(props) {
  const { pause, resume, restart, isRunning, clockValues, input } = props;
  return (
    <div className="buttons">
      <IconButton
        // style={{ color: "white" }}
        onClick={() => {
          if (!isRunning()) {
            if (!clockValues().every((e) => Boolean(e))) {
              let time = utils.parseTime(input());
              if (!time) return;
              restart(time);
            } else {
              resume();
            }
          } else {
            pause();
          }
        }}
      >
        
        {!isRunning() ? <PlayArrowIcon /> : <PauseIcon />}
      </IconButton>
      <IconButton
        onClick={() => {
         utils.parseTime(input());
          pause();
        }}
      >
      </IconButton>
    </div>
  );
}
