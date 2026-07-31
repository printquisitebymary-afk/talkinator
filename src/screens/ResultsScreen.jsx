import React, { useState } from 'react';

export default function ResultsScreen({ onNavigate, showSettings, setShowSettings }) {

  const suggestions = [
    {
      id: 1,
      word: 'nostalgia',
      type: 'noun',
      definition: 'a sentimental longing for the past, triggered by a familiar place or memory.',
      match: '96%',
      lang: 'en → en'
    },
    {
      id: 2,
      word: 'reminiscence',
      type: 'noun',
      definition: 'the act of recalling past experiences, often with warmth and fondness.',
      match: '88%',
      lang: 'hi → en'
    },
    {
      id: 3,
      word: 'word drift',
      type: 'noun',
      definition: 'a near-match for a word that sits just beyond recall, waiting to be recovered.',
      match: '81%',
      lang: 'en → en'
    }
  ];

  return (
    <div className="font-['Geist_Mono'] bg-black text-neutral-50 self-start w-full h-fit">
      <div className="relative min-h-[874px] bg-black flex flex-col w-full overflow-hidden">
        <div className="overflow-y-auto bg-black flex px-6 pt-8 pb-4 flex-col flex-1 gap-6">
          <div className="flex justify-between items-center">
            <button 
              onClick={() => onNavigate('search')}
              className="rounded-full bg-[#ffa06b] flex px-4 py-2 items-center gap-1"
            >
              <svg className="size-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="font-['Geist_Mono'] font-bold uppercase text-black text-sm leading-5 tracking-wide">
                BACK
              </span>
            </button>
            <button 
              onClick={() => setShowSettings(!showSettings)}
              className="size-9 shrink-0 rounded-full border-gray-300 border-2 border-solid flex justify-center items-center"
            >
              <svg className="size-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
          
          <div className="flex items-center gap-2">
            <svg className="size-5 text-[#f049cf]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            <h2 className="font-['Geist_Mono'] font-medium text-left align-baseline uppercase text-[#F6DFDD] text-xl leading-7 tracking-widest">
              SUGGESTIONS ({suggestions.length})
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {suggestions.map((suggestion) => (
              <div 
                key={suggestion.id}
                className="cursor-pointer transition-all duration-500 rounded-xl border-[#f049cf] border-2 border-solid flex p-4 flex-col gap-2"
              >
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-1">
                    <span className="font-['Geist_Mono'] lowercase text-neutral-50 text-lg leading-7">
                      {suggestion.word}
                    </span>
                    <span className="font-['Geist_Mono'] lowercase text-[#a1a1a1] text-xs leading-4">
                      {suggestion.type}
                    </span>
                  </div>
                  <svg 
                    className="size-5 shrink-0 text-neutral-50" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                </div>
                <p className="font-['Geist_Mono'] lowercase text-[#a1a1a1] text-xs leading-5">
                  {suggestion.definition}
                </p>
                <div className="flex mt-1 items-center gap-2">
                  <span className="font-['Geist_Mono'] lowercase rounded-full text-[#ffa06b] text-[11px] border-[#ffa06b] border-1 border-solid px-2 py-0.5">
                    {suggestion.match} match
                  </span>
                  <span className="font-['Geist_Mono'] lowercase rounded-full text-[#ffa06b] text-[11px] border-[#ffa06b] border-1 border-solid px-2 py-0.5">
                    {suggestion.lang}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}