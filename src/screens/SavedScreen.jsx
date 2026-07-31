import React, { useState } from 'react';

export default function SavedScreen({ onNavigate, showSettings, setShowSettings }) {
  const [savedWords, setSavedWords] = useState([
    {
      id: 1,
      word: 'reminiscence',
      type: 'noun',
      definition: 'the bittersweet pull of looking back on moments long gone, fondly and a little wistfully.',
      saved: true
    },
    {
      id: 2,
      word: 'ephemeral',
      type: 'adjective',
      definition: 'lasting for a very short time, fleeting, gone almost as soon as it arrives.',
      saved: true
    },
    {
      id: 3,
      word: 'on the tip of my tongue',
      type: 'phrase',
      definition: 'when a word feels almost within reach, but refuses to fully surface in the moment.',
      saved: true
    }
  ]);

  const removeWord = (id) => {
    setSavedWords(savedWords.filter(word => word.id !== id));
  };

  return (
    <div className="bg-neutral-950 text-neutral-50 w-full h-fit">
      <div className="bg-black text-neutral-50 w-full h-fit">
        <div className="bg-black text-neutral-50 flex flex-col w-full h-fit">
          <div className="flex p-4 flex-col gap-6">
            <div className="flex px-1 justify-between items-start">
              <div className="inline-flex bg-transparent p-0 justify-start items-start w-fit">
                <div className="text-2xl font-bold tracking-wider text-white">
                  TALKINATOR
                </div>
              </div>
              <button 
                onClick={() => setShowSettings(!showSettings)}
                className="size-10 rounded-full bg-black border-zinc-300 border-2 border-solid flex justify-center items-center"
              >
                <svg className="size-4 text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </div>

            <div className="relative rounded-3xl bg-black overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-80" />
              <div className="relative min-h-[200px] flex p-5 flex-col justify-end gap-6">
                <div className="max-w-[300px]">
                  <h1 className="[font-family:'Geist_Mono',monospace] font-bold uppercase text-[#ffa06b] text-[34px] leading-[39px] tracking-[-0.48px] pb-8">
                    NOT TO FORGET
                  </h1>
                  <p className="[font-family:'Geist_Mono',monospace] lowercase text-[#f6dfdd]/78 text-[15px] leading-6 mt-4">
                    words worth keeping close, saved to revisit, savor, and make your own.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] bg-black border-[#f049cf] border-2 border-solid flex p-5 flex-col gap-3">
              {savedWords.map((word) => (
                <div key={word.id} className="flex flex-col gap-3">
                  <div className="flex justify-between items-start gap-3">
                    <div className="min-w-0 flex flex-col gap-1">
                      <div className="[font-family:'Geist_Mono',monospace] lowercase text-[#f6dfdd] text-lg leading-6">
                        {word.word}
                      </div>
                      <div className="[font-family:'Geist_Mono',monospace] lowercase text-[#b8a8a7] text-xs leading-4">
                        {word.type}
                      </div>
                    </div>
                    <button 
                      onClick={() => removeWord(word.id)}
                      className="shrink-0"
                    >
                      <svg className="size-5 fill-[#ffa06b] cursor-pointer text-[#ffa06b]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
                      </svg>
                    </button>
                  </div>
                  <p className="[font-family:'Geist_Mono',monospace] lowercase text-[#b8a8a7] text-sm leading-5">
                    {word.definition}
                  </p>
                </div>
              ))}
              
              {savedWords.length === 0 && (
                <div className="hidden py-8 flex-col items-center gap-2">
                  <svg className="size-8 text-[#b8a8a7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <div className="[font-family:'Geist_Mono',monospace] lowercase text-[#b8a8a7] text-sm leading-5">
                    no saved words yet.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}