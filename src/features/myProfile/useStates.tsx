import { useQuery } from '@tanstack/react-query';
import { State } from '../../models/State';
import AddressClient from '../../httpClient/AddressClient';
import { AddressService } from '../../services/AddressService';

export default function useStates() {
    const addressClient = new AddressClient();
    const addressService = new AddressService(addressClient);

    return useQuery({
        queryKey: ['states'],
        queryFn: async (): Promise<State[]> => addressService.getStates(),
        initialData: [],
    });
}
