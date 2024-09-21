import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import logo from './phoenix.png';
import './page.css';
 
export default function Home() {
  return (
    <div>
      <main>
        <navbar className="navbar nav bg-body-tertiary">
            <Image src={logo} alt="logo" width="30" height="30"/>Team Phoenix
        </navbar>
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
        <input type="text" placeholder="Ph Level" className="border p-2" />
        <select className="border p-2" defaultValue="">
          <option value="" disabled>Soil Type</option>
          <option value="silt">Silt</option>
          <option value="clay">Clay</option>
          <option value="sand">Sand</option>
        </select>
        <input type="text" placeholder="Water Level" className="border p-2" />
      </div>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
      </main>
      
    </div>
  );
}
