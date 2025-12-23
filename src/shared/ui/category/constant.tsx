import {
  MdDirectionsCar,
  MdHomeRepairService,
  MdLocationCity,
  MdComputer,
  MdSmartphone,
  MdCheckroom,
  MdFaceRetouchingNatural,
  MdDiamond,
  MdWeekend,
  MdDirectionsCarFilled,
  MdTv,
  MdChildCare,
  MdTwoWheeler,
  MdToys,
  MdHealthAndSafety,
  MdSportsSoccer,
  MdRestaurant,
  MdWorkOutline,
  MdApps,
} from 'react-icons/md'
import { Categorytype } from './types'

export const CategoryConstants: Categorytype[] = [
  {
    label: 'Auto',
    icon: <MdDirectionsCar size={20} />,
    value: '1',
  },
  {
    label: 'Real State',
    icon: <MdLocationCity size={20} />,
    value: '2',
  },
  {
    label: 'Jobs',
    icon: <MdWorkOutline size={20} />,
    value: '3',
  },
  {
    label: 'Clothes, footwear, accessories',
    icon: <MdCheckroom size={20} />,
    value: '4',
  },
  {
    label: 'Sports Equipment',
    icon: <MdSportsSoccer size={20} />,
    value: '5',
  },
  {
    label: 'Animals',
    icon: <MdHomeRepairService size={20} />,
    value: '6',
  },
  {
    label: 'Business Equipment',
    icon: <MdWeekend size={20} />,
    value: '7',
  },
  {
    label: 'Services',
    icon: <MdHomeRepairService size={20} />,
    value: '8',
  },
  {
    label: 'Electoronics',
    icon: <MdSmartphone size={20} />,
    value: '9',
  },
  {
    label: 'Tv & Home Appliances',
    icon: <MdTv size={20} />,
    value: '10',
  },
  {
    label: 'Car Accessories',
    icon: <MdDirectionsCarFilled size={20} />,
    value: '11',
  },
  {
    label: 'Babies & Kids',
    icon: <MdChildCare size={20} />,
    value: '12',
  },
  {
    label: 'Accomodation for travel',
    icon: <MdComputer size={20} />,
    value: '13',
  },
  {
    label: 'Beauty & Personal Care',
    icon: <MdFaceRetouchingNatural size={20} />,
    value: '14',
  },

  {
    label: 'Evertything Else',
    icon: <MdApps size={20} />,
    value: '15',
  },
]
