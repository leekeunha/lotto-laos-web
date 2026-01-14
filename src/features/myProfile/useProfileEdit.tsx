import { useMutation, useQueryClient } from '@tanstack/react-query';
import UserClient from '../../httpClient/UserClient';
import { UserService } from '../../services/UserService';

export default function useEditProfile() {
    const userClient = new UserClient();
    const userService = new UserService(userClient);
    const queryClient = useQueryClient();

    const { mutate: editProfile, isPending } = useMutation({
        mutationFn: (requestData: FormData) => {
            return userService.editProfile(requestData);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['user'],
            });
        },
    });

    return { editProfile, isPending };
}
