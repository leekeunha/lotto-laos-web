import { useQuery } from '@tanstack/react-query';
import AddressClient from '../../httpClient/AddressClient';
import { AddressService } from '../../services/AddressService';
import { StateDistrict } from '../../models/StateDistrict';

//TODO : 삭제 예정
export default function useAddresses() {
    const addressClient = new AddressClient();
    const addressService = new AddressService(addressClient);

    return useQuery({
        queryKey: ['addresses'],
        queryFn: async (): Promise<StateDistrict[]> => addressService.getAddresses(),
        initialData: [],
    });
}
