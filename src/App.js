import "./styles.css";
import { Box, Button, Input } from "@mui/material";

export default function App() {
  return (
    <div className="App">
      <Box>
        <Input
          style={{ fontStyle: "italic", color: "grey", fontSize: "20px" }}
          placeholder="Enter Something"
          color="grey"
        />
        <Button
          style={{
            border: "1px solid",
            fontStyle: "italic",
            color: "grey",
            fontSize: "20px"
          }}
        >
          {" "}
          Enter
        </Button>
      </Box>
    </div>
  );
}
