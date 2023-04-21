import { IconButton } from "@material-ui/core";

export default function AddTimerBtn(props) {
  const { createTimer } = props;
  return (
    <>
      <IconButton
        onClick={() => {
          createTimer();
        }}
      >
      </IconButton>
      Add New Timer
    </>
  );
}
