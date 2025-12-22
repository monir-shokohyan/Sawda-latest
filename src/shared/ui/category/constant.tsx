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
} from "react-icons/md";
import { Categorytype } from "./types";

export const CategoryConstants: Categorytype[] = [
    {
        label: 'Cars',
        icon: <MdDirectionsCar size={20} />
    },
    {
        label: 'Home Services',
        icon: <MdHomeRepairService size={20} />
    },
    {
        label: 'Property',
        icon: <MdLocationCity size={20} />
    },
    {
        label: 'Computer & Tech',
        icon: <MdComputer size={20} />
    },
    {
        label: 'Mobile Phones & Gadgets',
        icon: <MdSmartphone size={20} />
    },
    {
        label: "Women's Fashion",
        icon: <MdCheckroom size={20} />
    },
    {
        label: "Men's Fashion",
        icon: <MdCheckroom size={20} />
    },
    {
        label: 'Beauty & Personal Care',
        icon: <MdFaceRetouchingNatural size={20} />
    },
    {
        label: 'Luxury',
        icon: <MdDiamond size={20} />
    },
    {
        label: 'Furniture & Home Living',
        icon: <MdWeekend size={20} />
    },
    {
        label: 'Car Accessories',
        icon: <MdDirectionsCarFilled size={20} />
    },
    {
        label: 'Tv & Home Appliances',
        icon: <MdTv size={20} />
    },
    {
        label: 'Babies & Kids',
        icon: <MdChildCare size={20} />
    },
    {
        label: 'Motorcycles',
        icon: <MdTwoWheeler size={20} />
    },
    {
        label: 'Hobbies & Toys',
        icon: <MdToys size={20} />
    },
    {
        label: 'Health & Nutrition',
        icon: <MdHealthAndSafety size={20} />
    },
    {
        label: 'Sports Equipment',
        icon: <MdSportsSoccer size={20} />
    },
    {
        label: 'Foods & Drinks',
        icon: <MdRestaurant size={20} />
    },
    {
        label: 'Jobs',
        icon: <MdWorkOutline size={20} />
    },
    {
        label: 'Evertything Else',
        icon: <MdApps size={20} />
    },
];