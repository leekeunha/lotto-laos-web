import React, { useEffect, useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Input } from '@material-tailwind/react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { SearchProps } from './types';

export default function Search({ searchPath }: SearchProps) {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [text, setText] = useState(searchParams.get('q') || '');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (text) {
            searchParams.set('q', text);
        } else {
            searchParams.delete('q');
        }

        setSearchParams(searchParams);
        navigate(`${searchPath}?${searchParams.toString()}`);
    };

    useEffect(() => {
        setText(searchParams.get('q') || '');
    }, [searchParams]);

    return (
        <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-center justify-end w-full">
            <div className="flex w-full shrink-0 gap-2 md:w-max mt-1">
                <form className="w-full md:w-72" onSubmit={handleSubmit}>
                    <Input
                        label="Search"
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                        crossOrigin={undefined}
                    />
                </form>
            </div>
        </div>
    );
}
