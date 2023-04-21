import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

export default function TitleBar(props) {
  const { id, removeTimer } = props;
  return (
    <div className="title-bar">
      <IconButton
        aria-label="delete"
        onClick={() => {
          localStorage.removeItem(`input ${id}`);
          removeTimer();
        }}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );
}
