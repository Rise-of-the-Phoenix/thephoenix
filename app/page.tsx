import Image from "next/image";
import React from "react";
import logo from './phoenix.png'
import SubmitButton from "./submitButton";
import 'bootstrap/dist/css/bootstrap.css';
import './page.css'

 
export default function Home() {
  return (
  
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Image src={logo} alt="logo" />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
        We are Team Phoenix{" "}.
          </li>
          <li>Together we will create fire.</li>
        </ol>
      <div className="grid grid-cols-3 grid-rows-2 gap-4">
        <input type="text" placeholder="Nitrogen" className="border p-2" />
        <input type="text" placeholder="Phosphorus" className="border p-2" />
        <input type="text" placeholder="Potassium" className="border p-2" />
        <input type="text" placeholder="Ph" className="border p-2" />
        <select className="border p-2" defaultValue="">
          <option value="" disabled>Soil Type</option>
          <option value="Loamy">Loamy</option>
          <option value="clay">Clay</option>
          <option value="sand">Sand</option>
        </select>
        <input type="text" placeholder="Water Level" className="border p-2" />
        <SubmitButton />
      </div>
      
      </main>
      
    </div>
  );
}
