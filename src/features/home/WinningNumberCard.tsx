import { useNavigate } from 'react-router-dom';
import { WinningNumber } from '../../models/WinningNumber';
import { Button, Card, CardBody, CardFooter, Typography } from '@material-tailwind/react';
import DateFormatter from '../../ui/DateFormatter';

export default function WinningNumberCard({
    winningNumberInfo,
}: {
    winningNumberInfo: WinningNumber;
}) {
    const navigate = useNavigate();

    const { drawIdx, winningNumber, winningDate } = winningNumberInfo;

    return (
        <Card className="min-w-64 md:w-full">
            <CardBody>
                <div className="grid grid-cols-5 grid-rows-2 flex-between mb-3">
                    <Typography variant="h5" color="blue-gray" className="col-span-2">
                        {`Draw ${drawIdx}`}
                    </Typography>
                    <Typography
                        className="grid-row col-start-3 col-span-3 text-end"
                        variant="h5"
                        color="blue-gray"
                    >
                        <DateFormatter date={winningDate} />
                    </Typography>
                    {winningNumber.map((num, index) => (
                        <Typography
                            className="flex justify-center items-center w-11 h-11 bg-red-600 text-white rounded-full m-auto"
                            key={index}
                        >
                            {num}
                            {index < winningNumber.length - 1 ? ' ' : ''}
                        </Typography>
                    ))}
                </div>
            </CardBody>
            <CardFooter className="pt-0">
                <Button
                    variant="gradient"
                    color="red"
                    fullWidth
                    onClick={() => {
                        navigate(`/winningNumber/${drawIdx}`, {
                            state: { winningNumber: winningNumber },
                        });
                    }}
                >
                    View Result
                </Button>
            </CardFooter>
        </Card>
    );
}
