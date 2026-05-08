import React, { useState } from 'react'
import { FaUser, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiSun, HiMoon } from 'react-icons/hi'
import { RiSettings3Fill } from 'react-icons/ri'
import { IoCloseSharp } from 'react-icons/io5'

const Navbar = ({ darkMode, setDarkMode, model, setModel, maxTokens, setMaxTokens }) => {
  const [showAbout, setShowAbout] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  return (
    <>
      <div className="nav flex items-center justify-between px-[100px] h-[90px] border-b-[1px] border-gray-800">
        <div className="logo">
          <h3 className='text-[25px] font-[700] sp-text'>GenUI</h3>
        </div>
        <div className="icons flex items-center gap-[15px]">
          <div className="icon" onClick={() => setDarkMode(!darkMode)} title="Toggle Theme">
            {darkMode ? <HiSun /> : <HiMoon />}
          </div>
          <div className="icon" onClick={() => { setShowAbout(true); setShowSettings(false); }} title="About">
            <FaUser />
          </div>
          <div className="icon" onClick={() => { setShowSettings(true); setShowAbout(false); }} title="Settings">
            <RiSettings3Fill />
          </div>
        </div>
      </div>

      {/* About Modal */}
      {showAbout && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60" onClick={() => setShowAbout(false)}>
          <div className="bg-[#141319] border border-gray-800 rounded-2xl p-6 w-[340px] relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowAbout(false)} className="absolute top-3 right-3 text-gray-400 hover:text-white">
              <IoCloseSharp size={20} />
            </button>
            <div className="flex flex-col items-center text-center">
              <div className="w-[70px] h-[70px] rounded-full bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center text-[28px] font-bold text-white mb-3">
                A
              </div>
              <h3 className="text-[20px] font-bold text-white">Adarsh Kumar</h3>
              <p className="text-gray-400 text-[13px] mt-1">Frontend Developer & AI Enthusiast</p>
              <p className="text-gray-500 text-[12px] mt-3 leading-relaxed">
                Built GenUI — an AI-powered UI component generator using React, Vite, Tailwind CSS, and Google Gemini API.
              </p>
              <div className="flex gap-3 mt-4">
                <a
                  href="https://github.com/Adarshkumar0509"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#09090B] border border-gray-700 text-gray-300 hover:text-white hover:border-purple-600 transition-all text-[13px]"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#09090B] border border-gray-700 text-gray-300 hover:text-white hover:border-purple-600 transition-all text-[13px]"
                >
                  <FaLinkedin /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Settings Panel */}
      {showSettings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60" onClick={() => setShowSettings(false)}>
          <div className="bg-[#141319] border border-gray-800 rounded-2xl p-6 w-[360px] relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowSettings(false)} className="absolute top-3 right-3 text-gray-400 hover:text-white">
              <IoCloseSharp size={20} />
            </button>
            <h3 className="text-[18px] font-bold text-white mb-5">Settings</h3>

            {/* Theme Toggle */}
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="text-[14px] text-white font-semibold">Theme</p>
                <p className="text-[12px] text-gray-500">Switch between dark and light mode</p>
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`w-12 h-6 rounded-full transition-all relative ${darkMode ? 'bg-purple-600' : 'bg-gray-600'}`}
              >
                <span className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${darkMode ? 'left-7' : 'left-1'}`}></span>
              </button>
            </div>

            {/* AI Model */}
            <div className="mb-5">
              <p className="text-[14px] text-white font-semibold mb-1">AI Model</p>
              <p className="text-[12px] text-gray-500 mb-2">Select which Gemini model to use</p>
              <select
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="w-full bg-[#09090B] border border-gray-700 text-white text-[13px] rounded-lg px-3 py-2 outline-none focus:border-purple-600"
              >
                <option value="gemini-2.5-flash">Gemini 2.5 Flash (Fast)</option>
                <option value="gemini-1.5-pro">Gemini 1.5 Pro (Powerful)</option>
                <option value="gemini-1.5-flash">Gemini 1.5 Flash (Balanced)</option>
              </select>
            </div>

            {/* Max Length */}
            <div className="mb-2">
              <div className="flex items-center justify-between mb-1">
                <p className="text-[14px] text-white font-semibold">Max Prompt Length</p>
                <p className="text-[13px] text-purple-400">{maxTokens} chars</p>
              </div>
              <p className="text-[12px] text-gray-500 mb-2">Limit how long your prompt can be</p>
              <input
                type="range"
                min={100}
                max={1000}
                step={100}
                value={maxTokens}
                onChange={(e) => setMaxTokens(Number(e.target.value))}
                className="w-full accent-purple-600"
              />
              <div className="flex justify-between text-[11px] text-gray-600 mt-1">
                <span>100</span>
                <span>1000</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
