'use client';

import Link from 'next/link';
import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react';


const Nav = () => {
    return (
        <div className="h-[13vh] overflow-hidden shadow-md border-b border-gray-300">
            <div className="w-[90%] md:w-[80%] h-full mx-auto flex items-center justify-between">
                <div className='md:w[250px] mdh[250px]'>
                    <Link href="/">
                        <Image
                            src="/kaya-logo.png"
                            alt="Company Logo"
                            width={80}
                            height={80}
                            className="mr-3"
                        /></Link>
                </div>
                <div className='flex items-center space-x-4'>
                    <Link href="/addjob"
                        className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                        Add Job
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Nav