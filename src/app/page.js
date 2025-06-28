import { redirect } from 'next/navigation';

export const metadata = {
  title: "Traveller's Dost",
  description: "Explore Together. Your Pocket-Friendly Travel Dost. Discover the Cheapest Group Trips in India with Verified Travel Partners Only.",
};

export default function Landing() {
  redirect('/home');
}