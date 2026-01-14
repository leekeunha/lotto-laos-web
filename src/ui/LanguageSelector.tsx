import { SERVICE_COUNTRIES } from '../../constants/global';
import { Country } from './types';
import { FormProvider, useForm } from 'react-hook-form';
import useLanguageSelector from './useLanguageSelector';
import { RHFSelect } from './RHFSelect';

const LanguageSelector = () => {
    const { language, handleLanguageChange } = useLanguageSelector();
    type LanguageSchema = {
        language: string;
    };

    const methods = useForm<LanguageSchema>({
        defaultValues: {
            language,
        },
    });

    return (
        <FormProvider {...methods}>
            <form>
                <RHFSelect
                    label={'language'}
                    name="language"
                    containerProps={{ className: '!min-w-[100px]' }}
                    options={SERVICE_COUNTRIES.map(({ language }: Country) => ({
                        value: language,
                        label: language,
                    }))}
                    onChange={(newValue) => {
                        handleLanguageChange(newValue);
                    }}
                ></RHFSelect>
            </form>
        </FormProvider>
    );
};

export default LanguageSelector;
