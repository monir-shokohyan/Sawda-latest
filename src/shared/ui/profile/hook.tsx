import React from 'react'
import { Profiletype } from './types'
import { TbUserPlus } from 'react-icons/tb'
import {
  MdOutlineLogout,
  MdOutlinePersonOutline,
  MdOutlineSettings,
} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const useProfileDropDown = ({ id }: { id: string }) => {
  const navigate = useNavigate()
  const ProfileConstant: Profiletype[] = [
    {
      label: 'Following',
      icon: <TbUserPlus size={20} />,
    },
    {
      label: 'Profile',
      icon: <MdOutlinePersonOutline size={20} />,
    },
    {
      label: 'Settings',
      icon: <MdOutlineSettings size={20} />,
      handleClick: () => navigate(`/settings/${id}`),
    },
    {
      label: 'Logout',
      icon: <MdOutlineLogout size={20} />,
    },
  ]

  return {
    ProfileConstant,
  }
}

export { useProfileDropDown }
