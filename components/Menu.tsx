import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDragon } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Menu() {
	return(
		<div className='w-20 bg-black h-screen bg-opacity-70 top-0 left-0 fixed  flex flex-col gap-5 items-center'>
			<div className='p-5'>Menu</div>
			<Link href={"/admin"} className='border-b border-slate-600 flex items-center justify-center py-5'>
				<FontAwesomeIcon icon={faDragon} className='text-white w-1/4'/>
			</Link>
			
		</div>
	)
}