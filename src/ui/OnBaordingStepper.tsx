import React from 'react';
import { Stepper, Step, Typography } from '@material-tailwind/react';

import { OnboardingStepperProps } from './types';
import { stepIconsInfo } from './listItems';

export const OnBaordingStepper: React.FC<OnboardingStepperProps> = ({
    activeStep,
    setActiveStep,
}) => {
    return (
        <div className="p-4">
            <Stepper
                activeStep={activeStep}
                className="my-6"
                lineClassName=""
                activeLineClassName="bg-red-500"
            >
                {stepIconsInfo.map((step, index) => (
                    <Step
                        key={index}
                        className="rounded-md bg-gray-300 text-white"
                        activeClassName="bg-red-500"
                        completedClassName="bg-red-500"
                        onClick={() => setActiveStep(index)}
                    >
                        {step.icon}
                        <div className="absolute -bottom-[2.5rem] w-max text-center">
                            <Typography variant="h6" color={activeStep >= index ? 'red' : 'gray'}>
                                {step.label}
                            </Typography>
                        </div>
                    </Step>
                ))}
            </Stepper>
        </div>
    );
};
