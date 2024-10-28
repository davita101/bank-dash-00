"use client"
import React from 'react'
import { FiSettings } from "react-icons/fi";
import { PiBellRinging } from "react-icons/pi";
import Mask from "../assets/mainLogo/headeer/Mask.svg"
import { CiSearch } from "react-icons/ci";
import Image from 'next/image';
import { UserButton } from '@clerk/nextjs';
import { SignIn, SignInButton, SignOutButton } from '@clerk/clerk-react';
import Headermob from './Headermob';


const Header = () => {
	return (
		<div className='flex h-[100px] max-sm:flex-col  w-full justify-between items-center '>
			<div className='sm:hidden flex '>

			</div>

			<div className='flex gap-[5rem] items-center'>
				<h2 className='font-semibold  text-primary--200 lg:text-heading--700 max-sm:text-heading--600 sm:text-heading--600'>Overview</h2>
				<Image className='lg:w-[60px] sm:hidden  sm:w-[45px] lg:h-[60px] sm:h-[45px] rounded-full' src={Mask} alt="" />

				
			</div>
			<div className='flex justify-center items-center gap-[30px] mr-[40px] rounded-3xl'>
				<div className='flex max-sm:hidden  w-[255px] lg:h-[50px] sm:h-[40px] rounded-3xl bg-primary--400 gap-5 justify-center items-center '>
					<CiSearch className='lg:w-[20px] sm:w-[16px] lg:h-[20px] sm:h-[20px] bg-primary--400' />
					<input type="text" placeholder='Search for something' className=' outline-none placeholder:text-slate-400 bg-primary--400    border-primary--400  ' />
				</div>
				<div className=' lg:w-[50px] sm:w-[40px] lg:h-[50px] sm:h-[40px] max-sm:hidden flex justify-center items-center text-primary--700 bg-primary--400 rounded-full'>
					<FiSettings className='lg:w-[25px] sm:w-[18px] lg:h-[25px] sm:h-[18px]' />
				</div>
				<div className=' lg:w-[50px] sm:w-[40px] lg:h-[50px] sm:h-[40px] max-sm:hidden flex justify-center items-center  text-primary--600 bg-primary--400 rounded-full'>
					<PiBellRinging className='lg:w-[25px] sm:w-[18px] lg:h-[25px] sm:h-[18px]' />
				</div>

				<Image className='lg:w-[60px] max-sm:hidden sm:w-[45px] lg:h-[60px] sm:h-[45px] rounded-full' src={Mask} alt="" />

			</div>
			<div className='flex sm:hidden py-[12px]  max-sm:w-[325px] max-sm: max-sm:justify-start max-sm:pl-[19px]   rounded-3xl bg-primary--400 gap-5 justify-center items-center '>
				<CiSearch className='lg:w-[20px] sm:w-[16px] lg:h-[20px] sm:h-[20px] bg-primary--400' />
				<input type="text" placeholder='Search for something' className=' outline-none placeholder:text-slate-400 bg-primary--400    border-primary--400  ' />
			</div>


		</div>
	)
}

export default Header