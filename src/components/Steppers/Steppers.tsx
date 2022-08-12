import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import "./Steppers.scss";

export interface StepperProps {
  activeStep: any;
  steps: any[];
}

const Steppers = (props: StepperProps) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={props.activeStep} alternativeLabel>
        {props.steps.map(
          (step: { label: any; handleClick: () => void }, index: any) => {
            const stepProps = {};
            return (
              <Step
                key={step.label}
                {...stepProps}
                onClick={() => {
                  step?.handleClick();
                }}
                className="cursor-pointer"
              >
                <StepLabel>{step.label}</StepLabel>
              </Step>
            );
          }
        )}
      </Stepper>
    </Box>
  );
};

export default Steppers;
