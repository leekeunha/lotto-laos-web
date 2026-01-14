import { useFormContext } from 'react-hook-form';
import { useMoveBack } from '../../hooks/useMoveBack';
import { Button } from '@material-tailwind/react';

//TODO: 이것도 범용적으로 쓰일 수 있게 수정하기. 파일명도 바꾸기
export default function SubmitBackButtons({
    submitButtonText = 'submit',
}: {
    submitButtonText?: string;
}) {
    const {
        formState: { isValid },
    } = useFormContext();
    const moveBack = useMoveBack();

    return (
        <div className="flex !gap-4 my-6 justify-end">
            <Button variant="text" color="red" onClick={moveBack}>
                BACK
            </Button>
            <Button color="red" type="submit" disabled={!isValid}>
                {submitButtonText}
            </Button>
        </div>
    );
}
