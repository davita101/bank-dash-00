"use client"
import React from 'react'
import { FiSettings } from "react-icons/fi";
import { PiBellRinging } from "react-icons/pi";
import Mask from "../assets/mainLogo/headeer/Mask.svg"
import { CiSearch } from "react-icons/ci";
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';
import { SignIn, SignInButton, SignOutButton } from '@clerk/clerk-react';


const Header = () => {
	return (
		<div className='flex h-[100px] w-full justify-between items-center '>
			<h2 className='font-semibold  text-primary--200 text-heading--600'>Overview</h2>
			<div className='flex justify-center items-center gap-[30px] mr-[40px] rounded-3xl'>
				<div className='flex w-[255px] h-[50px] rounded-3xl bg-primary--400 gap-5 justify-center items-center '>
					<CiSearch className='w-[20px] h-[20px] bg-primary--400' />
					<input type="text" placeholder='Search for something' className=' outline-none placeholder:text-slate-400 bg-primary--400    border-primary--400  ' />
				</div>
				<div className=' w-[50px] h-[50px] flex justify-center items-center text-primary--700 bg-primary--400 rounded-full'>
					<FiSettings className='w-[25px] h-[25px]' />
				</div>
				<div className=' w-[50px] h-[50px] flex justify-center items-center  text-primary--600 bg-primary--400 rounded-full'>
					<PiBellRinging className='w-[25px] h-[25px]' />
				</div>
				{/* <SignInButton/> */}
				{/* <SignOutButton/> */}
				{/* <UserButton /> */}
				<Image className='w-[60px] h-[60px] rounded-full' src={Mask} alt="" />
				{/* classworck buld resposive */}
				{/* homeworck build full header renspoinisve */}
			</div>

		</div>
	)
}

export default Header