import React from "react";
import { Button } from "@mui/material";
import Connection from "../../containers/Connection";

const ByMetaMask = () => {
  const { provider, connectLocalhost } = Connection.useContainer();

  return (
    <>
      {!provider && (
        <>
          <Button
            style={{ marginTop: "12px" }}
            fullWidth
            onClick={connectLocalhost}
            variant="contained"
          >
            Connect
          </Button>
        </>
      )}
    </>
  );
};

export default ByMetaMask;
