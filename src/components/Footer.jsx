import React from 'react';

export default function Footer({ currentScreen, onNavigate }) {
  const isActive = (screen) => currentScreen === screen;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black flex items-center w-full h-20 overflow-hidden">
      <div className="relative z-10 flex mx-[5px] px-6 justify-between items-center w-full">
        <button 
          onClick={() => onNavigate('search')}
          className="size-11 rounded-full flex justify-center items-center flex-none"
        >
          {isActive('search') ? (
            <div className="absolute inset-0 bg-[#864af1] rounded-full" />
          ) : null}
          <svg 
            className={`size-5 ${isActive('search') ? 'text-black' : 'text-white'}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        
        <button 
          onClick={() => onNavigate('recent')}
          className="relative flex justify-center items-center"
        >
          {isActive('recent') && (
            <div className="absolute inset-0 bg-[#864af1] rounded-full blur-xl opacity-70" />
          )}
          <svg 
            className={`size-6 ${isActive('recent') ? 'text-black' : 'text-white'}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
        
        <button 
          onClick={() => onNavigate('saved')}
          className="relative flex justify-center items-center"
        >
          {isActive('saved') && (
            <div className="absolute inset-0 bg-[#864af1] rounded-full blur-xl opacity-70" />
          )}
          <svg 
            className={`size-6 ${isActive('saved') ? 'text-black' : 'text-white'}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
          </svg>
        </button>
        
        <button 
          onClick={() => onNavigate('translator')}
          className="relative flex justify-center items-center"
        >
          {isActive('translator') && (
            <div className="absolute inset-0 bg-[#864af1] rounded-full blur-xl opacity-70" />
          )}
          <div className="flex items-center gap-0.5">
            <span className={`[font-family:'Geist_Mono',monospace] leading-none font-sans font-normal text-right align-baseline ${isActive('translator') ? 'text-black' : 'text-white'} text-[17px] leading-6 tracking-normal mr-0 pb-1 self-center flex-none w-[17px]`}>
              文
            </span>
            <span className={`[font-family:'Geist_Mono',monospace] leading-none font-medium text-left align-baseline ${isActive('translator') ? 'text-black' : 'text-white'} text-xl leading-0 tracking-normal pt-[5px]`}>
              A
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}