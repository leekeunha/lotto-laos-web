import { Outlet } from 'react-router-dom';
import Footer from './Footer';

export default function AppLayout() {
    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden min-w-80 max-w-[512px] mx-auto bg-gray-50 w-full">
            <main className="flex-grow mb-16">
                <Outlet />
                <Footer />
            </main>
        </div>
    );
}
