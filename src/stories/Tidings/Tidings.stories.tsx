import React from "react";

//Component
import { IconButton } from "@mui/material";
import { useTidingsHook, TidingsProvider, Button } from "../../Component";

//Icon
import { Delete } from "@mui/icons-material";

//Constants
import { tidingsList } from "./constants";

export default {
  title: "Tidings",
  component: TidingsProvider,
};

export const Tidings = () => {
  return (
    <TidingsProvider>
      <React.Fragment>
        {tidingsList.map((value) => (
          <ButtonComponent key={value} buttonText={value} />
        ))}
      </React.Fragment>
    </TidingsProvider>
  );
};

const ButtonComponent = ({ buttonText }: { buttonText: string }) => {
  const {
    infoTidings,
    warningTidings,
    successTidings,
    errorTidings,
    defaultTidings,
    closeTidings,
  } = useTidingsHook();
  return (
    <Button
      onClick={() => {
        switch (buttonText) {
          case "Success":
            successTidings("success");
            break;
          case "Error":
            errorTidings("error");
            break;
          case "Info":
            infoTidings("info");
            break;
          case "Warning":
            warningTidings("warning");
            break;
          case "Default":
            defaultTidings("default");
            break;
          case "Close":
            closeTidings();
            break;
          case "Action":
            successTidings("success", {
              action: (id) => {
                return (
                  <IconButton onClick={() => closeTidings(id)}>
                    <Delete />
                  </IconButton>
                );
              },
            });
            break;
          default:
            defaultTidings("Not Allowed");
            break;
        }
      }}
      sx={{ margin: 5 }}
    >
      {buttonText}
    </Button>
  );
};
