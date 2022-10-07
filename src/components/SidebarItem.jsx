import { RemoveCircle } from "@mui/icons-material";

function SidebarItem({
  activeNote,
  id,
  title,
  description,
  lastEdited,
  onDeleteNote,
}) {
  let className = "sidebar-item";
  if (activeNote && id === activeNote.id) {
    className = "sidebar-item active";
  }
  return (
    <div className={className}>
      <div className="sidebar-item-header">
        <h2>{title}</h2>
        <RemoveCircle
          style={{
            marginRight: "10px",
            marginLeft: "40px",
          }}
          color="error"
          fontSize="large"
          onClick={() => onDeleteNote(id)}
          className="sidebar-item-delete"
          titleAccess="Delete Note"
        />
      </div>
      <p>{description && description.substr(0, 70) + "..."}</p>
      <small className="note-date">
        Last Edited:{" "}
        {new Date(lastEdited).toLocaleDateString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        })}{" "}
      </small>
    </div>
  );
}

export default SidebarItem;
