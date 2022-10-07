import { Edit } from "@mui/icons-material";
import { IconButton, Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

function Main({ activeNote, onUpdateNote }) {
  if (!activeNote) {
    return <div className="no-note">No Note Selected</div>;
  }

  return (
    <div className="main">
      <div className="main-header">
        <h2 contentEditable>{activeNote.title}</h2>
        <div className="main-header-items">
          <IconButton>
            <Edit titleAccess="Edit Note" color="secondary" fontSize="large" />
          </IconButton>
        </div>
      </div>
      <div className="main-body">
        <Box contentEditable color={"white"}>
          <p>{activeNote.description}</p>
        </Box>
      </div>
    </div>
  );
}

export default Main;
