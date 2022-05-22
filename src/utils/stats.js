import { MdOutlineReviews } from 'react-icons/md';
import { VscTools, VscHeart } from 'react-icons/vsc';
import { BsLightningCharge } from 'react-icons/bs';

export const stats = [
  {
    title: 'Served',
    desc: 'customers',
    icon: <VscHeart className="w-8 h-8" />,
    tickerValue: 2500,
    tickerSuffix: '+',
    color: 'text-primary',
    decimals: 0,
  },
  {
    title: 'Annual Revenue',
    desc: '21% more than last year',
    icon: <BsLightningCharge className="w-8 h-8" />,
    tickerValue: 10.5,
    tickerSuffix: 'M+',
    color: 'text-secondary',
    decimals: 1,
  },
  {
    title: 'Reviews',
    desc: 'and they keep on coming',
    icon: <MdOutlineReviews className="w-8 h-8" />,
    tickerValue: 1.5,
    tickerSuffix: 'K+',
    color: 'text-accent',
    decimals: 1,
  },
  {
    title: 'Products',
    desc: 'in the inventory',
    icon: <VscTools className="w-8 h-8" />,
    tickerValue: 100,
    tickerSuffix: '+',
    color: 'text-cyan-600',
    decimals: 0,
  },
];
