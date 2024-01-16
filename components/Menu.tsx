import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDragon } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

interface MenuProps {
	isOpen: boolean;
  }

export default function Menu({ isOpen }: MenuProps) {
	const menuAnimation = isOpen ? 'slide-in-right' : 'slide-out-right';
	return(
		<div className={`w-full h-screen bg-black absolute mt-12 z-50 ${menuAnimation} `}>
			<Link
              href={"/admin"}
              className="flex items-center justify-center py-5 "
            >
              <FontAwesomeIcon icon={faDragon} className="text-white w-5" />
            </Link>
		</div>
	)
}