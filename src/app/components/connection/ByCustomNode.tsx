import React, { useState } from "react";
import Connection from "../../containers/Connection";
import {Button, Input} from "@mui/material";

const ByCustomNode = () => {
  const { provider, connectCustom, setProvider } = Connection.useContainer();
  const [nodeUrl, setNodeUrl] = useState("");
  return (
    <>
      {provider ? (
        <Button
          fullWidth
          style={{ marginTop: "12px" }}
          onClick={() => {
            setProvider(null);
            setNodeUrl("");
          }}
          variant="contained"
        >
          Reset Custom Provider
        </Button>
      ) : (
        <>
          <p style={{ marginTop: "12px" }}>Node URL:</p>
          <Input
            value={nodeUrl}
            onChange={(e) => setNodeUrl(e.target.value)}
            placeholder="https://mainnet.infura.io/v3/API_KEY"
            className="custom-node-url-input"
          />
          <Button
            fullWidth
            onClick={() => connectCustom(nodeUrl)}
            disabled={nodeUrl.trim() === ""}
            style={{ marginTop: "12px" }}
            className="custom-node-connect"
          >
            Connect
          </Button>
        </>
      )}
    </>
  );
};

export default ByCustomNode;
