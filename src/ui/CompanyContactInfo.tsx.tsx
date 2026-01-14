import Typography from '@material-tailwind/react/components/Typography';

export default function CompanyContactInfo() {
    return (
        <>
            <Typography variant="small" className="text-xs md:text-sm">
                Email:{' '}
                <a href="mailto:support@dlpe.la" className="text-blue-500">
                    support@dlpe.la
                </a>
            </Typography>
            <Typography variant="small" className="text-xs md:text-sm">
                Address: Floor 5, Tha Luang Square Building
                <br />
                Tha Luang Du Village, Xaysetha District, Vientiane, Lao PDR
            </Typography>
            <Typography variant="small" className="text-xs md:text-sm">
                Company President: Her Nam Cher
            </Typography>
            <Typography variant="small" className="text-xs md:text-sm">
                Tel 021 515151
            </Typography>
        </>
    );
}
