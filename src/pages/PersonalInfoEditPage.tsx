import Hr from '../ui/Hr';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { EditProfileSchema, editProfileSchema } from '../schema/editProfileSchema';
import PageTitle from '../ui/PageTitle';
import PageContainer from '../ui/PageContainer';
import { genderListItems } from '../global/listItems';
import { useEffect, useState } from 'react';
import useEditProfile from '../features/myProfile/useProfileEdit';
import { useLocation, useNavigate } from 'react-router-dom';
import FileUpload from '../ui/FileUpload';
import { RHFSelect } from '../ui/RHFSelect';
import { useMoveBack } from '../hooks/useMoveBack';
import { Button } from '@material-tailwind/react';
import { State } from '../models/State';
import { District } from '../models/District';
import RHFInput from '../ui/RHFInput';

export default function PersonalInfoEditPage() {
    const { editProfile } = useEditProfile();
    const navigate = useNavigate();
    const location = useLocation();
    const { states, statesDistricts, user } = location.state;
    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const defaultValues: EditProfileSchema = {
        name: user.fullName,
        email: user.email,
        gender: user.gender,
        stateIdx: user.state.value,
        districtIdx: user.district.value,
        addressDetail: user.addressDetail,
    };

    const methods = useForm<EditProfileSchema>({
        mode: 'all',
        resolver: zodResolver(editProfileSchema),
        defaultValues,
    });

    const { watch } = methods;

    function getDistricts(): District[] {
        const stateIdx = watch('stateIdx');

        const selectedState = statesDistricts.find(
            (state: State) => state.value === stateIdx.toString(),
        );

        const districts = selectedState ? selectedState.districts : [];

        return districts;
    }

    useEffect(() => {
        const sub = watch((value) => {
            console.log(value);
        });

        return () => sub.unsubscribe();
    }, [watch]);

    const onSubmit = async (data: EditProfileSchema) => {
        const formData = new FormData();

        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('gender', data.gender);
        formData.append('stateIdx', data.stateIdx.toString());
        formData.append('districtIdx', data.districtIdx.toString());
        formData.append('addressDetail', data.addressDetail);

        if (file) {
            formData.append('profilePhoto', file);
        }

        editProfile(formData, {
            onSuccess: () => {
                navigate('/my-account/my-profile');
            },
        });
    };

    const moveBack = useMoveBack();

    return (
        <>
            <PageTitle
                title="Personal Information"
                showBackButton={false}
                showMoveHomeButton={true}
            />
            <PageContainer>
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                        <FileUpload
                            previewUrl={previewUrl}
                            setFile={setFile}
                            setPreviewUrl={setPreviewUrl}
                        />
                        <div className="flex flex-col gap-2">
                            <p>Name</p>
                            <RHFInput name="name" label="name" />
                            <Hr className="my-2" />
                            <p>Email</p>
                            <RHFInput name="email" label="email" />
                            <Hr className="my-2" />

                            <p>Gender</p>
                            <RHFSelect name="gender" label="gender" options={genderListItems} />
                            <Hr className="my-2" />
                            <p>Address</p>
                            <RHFSelect name="stateIdx" label="state" options={states} />
                            <RHFSelect
                                name="districtIdx"
                                label="district"
                                options={getDistricts()}
                            />
                            <RHFInput name="addressDetail" label="Detailed Address" />
                        </div>
                        <div className="flex !gap-4 my-6 justify-end">
                            <Button variant="text" color="red" onClick={moveBack}>
                                BACK
                            </Button>
                            <Button color="red" type="submit">
                                SAVE
                            </Button>
                        </div>
                    </form>
                </FormProvider>
            </PageContainer>
        </>
    );
}
