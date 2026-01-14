import { Spinner } from "@material-tailwind/react";

export function CustomSpinner() { 

    return (
        <div className="flex justify-center items-center h-screen">
                    <Spinner className='' color="red"></Spinner>
                </div>
    );
}
