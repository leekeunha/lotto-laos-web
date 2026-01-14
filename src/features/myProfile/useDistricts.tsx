import { useQuery } from '@tanstack/react-query';
import { District } from '../../models/District';
import AddressClient from '../../httpClient/AddressClient';
import { AddressService } from '../../services/AddressService';

export default function useDistricts(id: string) {
    const addressClient = new AddressClient();
    const addressService = new AddressService(addressClient);

    return useQuery({
        queryKey: ['districts', id],
        queryFn: async (): Promise<District[]> => addressService.getDistricts(id),
        initialData: [],
        enabled: !!id,
    });
}
