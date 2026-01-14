import { useNavigate } from 'react-router-dom';
import BorderCard from '../../ui/BorderCard';
import Hr from '../../ui/Hr';
import SvgIcon from '../../ui/SvgIcon';
import User from '../../models/User';
import useStates from './useStates';
import useAddresses from './useAddresses';

export default function PersonalInfoView({ user }: { user: User }) {
    const { data: states } = useStates();
    const { data: statesDistricts } = useAddresses();
    console.log(statesDistricts);
    const navigate = useNavigate();

    const handleEditClick = () => {
        navigate('personal-info-edit', { state: { states, statesDistricts, user } });
    };
    return (
        <BorderCard className="flex flex-col">
            <div className="flex justify-between">
                <p className="font-bold">Personal Information</p>
                <button onClick={handleEditClick}>
                    <SvgIcon fileName="pencil"></SvgIcon>
                </button>
            </div>

            {user.imageUrl ? (
                <div className="flex justify-center my-4">
                    <img src={user.imageUrl} alt="Profile" className="rounded-full w-16 h-16" />
                </div>
            ) : (
                <SvgIcon fileName="user-circle" className="h-28"></SvgIcon>
            )}

            <p>Name</p>
            <p className="text-gray-400">{user?.fullName ? user.fullName : 'Enter name'}</p>
            <Hr className="my-2"></Hr>

            <p>Email</p>
            <p className="text-gray-400">{user?.email ? user.email : 'Enter email'}</p>
            <Hr className="my-2"></Hr>

            <p className="">Gender</p>
            <p className="text-gray-400">{user?.gender ? user.gender : 'Select your gender'}</p>
            <Hr className="my-2"></Hr>

            <p className="">Address</p>
            <div className="flex flex-col">
                <p className="text-gray-400 mb-1">{user.state?.label}</p>
                <p className="text-gray-400 mb-1">{user.district?.label}</p>
                <p className="text-gray-400 mb-1">{user?.addressDetail}</p>
            </div>
        </BorderCard>
    );
}
