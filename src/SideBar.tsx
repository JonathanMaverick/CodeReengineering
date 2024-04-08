import { useState } from 'react';
import { FaAngleRight, FaHome } from 'react-icons/fa';

export default function SideBar(){

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

    const toggleDropdown2 = () => {
        setIsDropdownOpen2(!isDropdownOpen2);
    };

    return (
        <div className="sticky bg-202020 h-screen w-1/6 p-3 flex flex-col text-909090 text-base z-50">
            <a href="/" className="p-1 rounded hover:bg-neutral-700 block"><p className="flex items-center gap-3"><FaHome /> Home</p></a>
            <p className="text-sm block mt-6">Content</p>
            <div className="relative rounded p-1 mt-2 hover:bg-neutral-700">
                <div className="flex items-center gap-2">
                <button onClick={toggleDropdown} className="rounded flex items-center hover:bg-neutral-800">
                    <FaAngleRight className={`transition-all duration-300 ${isDropdownOpen ? "transform rotate-90" : ""}`} />
                </button>
                    <a href="/change-preventers">🛡️ Change Preventers</a>
                </div>
            </div>
            {isDropdownOpen && (
                <div className="w-100">
                    <a href="/change-preventers/divergent-change" className="pl-12 p-1 rounded hover:bg-neutral-700 block">🔄 Divergent Change</a>
                    <a href="/change-preventers/shotgun-surgery" className="pl-12 p-1 rounded hover:bg-neutral-700 block">🔫 Shotgun Surgery</a>
                    <a href="/change-preventers/hierarcy" className="pl-12 p-1 rounded hover:bg-neutral-700 block">👨‍👧‍👧 Parallel Inheritance</a>
                </div>
            )}
            <div className="relative rounded p-1 mt-2 hover:bg-neutral-700">
                <div className="flex items-center gap-2">
                <button onClick={toggleDropdown2} className="rounded flex items-center hover:bg-neutral-800">
                    <FaAngleRight className={`transition-all duration-300 ${isDropdownOpen2 ? "transform rotate-90" : ""}`} />
                </button>
                    <a href="/dispensables">💣 Dispensables</a>
                </div>
            </div>
            {isDropdownOpen2 && (
                <div className="w-100">
                    <a href="/dispensables/comment" className="pl-12 p-1 rounded hover:bg-neutral-700 block">💬 Comment</a>
                    <a href="/dispensables/duplicate-code" className="pl-12 p-1 rounded hover:bg-neutral-700 block">👯 Duplicate Code</a>
                    <a href="/dispensables/lazy-class" className="pl-12 p-1 rounded hover:bg-neutral-700 block">🦥 Lazy Class</a>
                    <a href="/dispensables/data-class" className="pl-12 p-1 rounded hover:bg-neutral-700 block">📝 Data Class</a>
                    <a href="/dispensables/dead-code" className="pl-12 p-1 rounded hover:bg-neutral-700 block">💀 Dead Code</a>
                    <a href="/dispensables/speculative-generality" className="pl-12 p-1 rounded hover:bg-neutral-700 block">🧐 Speculative Generality</a>
                </div>
            )}
        </div>
    );
}
