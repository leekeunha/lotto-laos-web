import { useForm, FormProvider } from 'react-hook-form';
import { Alert, Button, Typography } from '@material-tailwind/react';
import { useTranslation } from 'react-i18next';
import { useSignin } from '../features/authentication/useSignin';
import { CustomError } from './types';
import { Link, useNavigate } from 'react-router-dom';
import AlertIcon from '../icons/AlertIcon';
import { useEffect, useState } from 'react';
import PageTitle from '../ui/PageTitle';
import { RHFCheckbox } from '../ui/RHFCheckbox';
import SignMessageLink from '../features/authentication/SignMessageLink';
import SignInInputs from '../features/authentication/SignInInputs';
import { MEMBER, PARTNER } from '../../constants/global';
import Section from '../ui/Section';
import PageContainer from '../ui/PageContainer';
import { zodResolver } from '@hookform/resolvers/zod';
import { partnerSignInSchema, playerSignInSchema, SignInSchema } from '../schema/signInSchema';

export default function SignInPage() {
    const [serverError, setServerError] = useState<string | null>(null);
    const [isPlayer, setIsPlayer] = useState(true);

    const methods = useForm<SignInSchema>({
        resolver: zodResolver(isPlayer ? playerSignInSchema : partnerSignInSchema),
        defaultValues: {
            identifier: localStorage.getItem('savedIdentifier') || '',
            password: '',
            rememberMe: localStorage.getItem('savedIdentifier') ? true : false,
            memberType: isPlayer ? MEMBER : PARTNER,
        },
    });

    useEffect(() => {
        methods.setValue('memberType', isPlayer ? MEMBER : PARTNER);
    }, [isPlayer]);

    const {
        handleSubmit,
        formState: { isValid },
        setValue,
    } = methods;
    const { t } = useTranslation();
    const { signin, isPending } = useSignin();
    const navigate = useNavigate();

    useEffect(() => {
        const savedIdentifier = localStorage.getItem('savedIdentifier');
        if (savedIdentifier) {
            setValue('identifier', savedIdentifier);
        }
    }, []);

    const setIdentifierInLocalstorage = () => {
        const rememberMe: boolean = methods.getValues('rememberMe');
        const identifier: string = methods.getValues('identifier');
        rememberMe
            ? localStorage.setItem('savedIdentifier', identifier)
            : localStorage.removeItem('savedIdentifier');
    };

    const onSubmit = (data: SignInSchema) => {
        const { rememberMe, ...requestData } = data;

        signin(requestData, {
            onSuccess: () => {
                setIdentifierInLocalstorage();
                navigate('/home');
            },
            onError: (error: Error) => {
                const customError = error as CustomError;
                console.log(error);
                const serverErrorMessage =
                    customError.response?.data?.errorMessage ||
                    'Provided email or password are incorrect';

                setServerError(serverErrorMessage);
            },
        });
    };

    return (
        <article className="flex flex-col">
            <PageTitle title="SIGN IN" showBackButton={false} showMoveHomeButton={true} />
            <PageContainer>
                <Section
                    className="my-auto text-center flex flex-col gap-5"
                    title={isPlayer ? 'Hello, Player!' : 'Hello, Partner!'}
                    description="sign_in_subtitle"
                >
                    <FormProvider {...methods}>
                        {serverError && (
                            <Alert
                                className="mt-4"
                                open={true}
                                onClose={() => setServerError(null)}
                                icon={<AlertIcon />}
                                color="red"
                            >
                                {serverError}
                            </Alert>
                        )}

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <SignInInputs isPlayer={isPlayer} />
                            <div className="flex justify-between">
                                <Typography variant="small" className="text-right mt-2">
                                    <RHFCheckbox
                                        name="rememberMe"
                                        label="ID Save"
                                        containerProps={{ className: '-m-2.5' }}
                                    />
                                </Typography>

                                <Typography variant="small" className="my-2.5 align-middle">
                                    {isPlayer && (
                                        <Link to="/auth/reset-password">Forgot Password?</Link>
                                    )}
                                </Typography>
                            </div>
                            <section className="w-full">
                                <div className="flex flex-col gap-4">
                                    <Button
                                        color="red"
                                        size="lg"
                                        className="mt-6"
                                        fullWidth
                                        type="submit"
                                        disabled={isPending || !isValid}
                                    >
                                        {t('sign_in_menu')}
                                    </Button>
                                    {isPlayer ? (
                                        <SignMessageLink
                                            message={'dont have anaccount? '}
                                            linkText={'sign_up_exclamation_mark'}
                                            linkTo={'/auth/welcome-sign-up'}
                                        />
                                    ) : (
                                        <p className="text-gray-500 text-sm">
                                            If you have any questions regarding your account, please
                                            contact your Happy Point representative.
                                        </p>
                                    )}
                                </div>
                            </section>
                        </form>
                    </FormProvider>
                    <p className="absolute bottom-20 left-0 right-0">
                        {isPlayer ? (
                            <>
                                If you are a partner,{' '}
                                <span
                                    className="text-red-600 cursor-pointer"
                                    onClick={() => setIsPlayer(false)}
                                >
                                    Partner Sign-in.
                                </span>
                            </>
                        ) : (
                            <>
                                If you are a player,{' '}
                                <span
                                    className="text-red-600 cursor-pointer"
                                    onClick={() => setIsPlayer(true)}
                                >
                                    Player Sign-in.
                                </span>
                            </>
                        )}
                    </p>
                </Section>
            </PageContainer>
        </article>
    );
}
