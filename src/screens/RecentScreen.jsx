import React, { useState } from 'react';

export default function RecentScreen({ onNavigate, showSettings, setShowSettings }) {
  const [expandedCard, setExpandedCard] = useState(null);

  const recentWords = [
    {
      id: 1,
      word: 'serendipity',
      type: 'noun',
      definition: 'a happy accident, the pleasant surprise of stumbling onto something good you weren\'t looking for.',
      status: 'found just now',
      translation: 'वो अच्छा इत्तेफ़ाक जो बिना ढूंढे मिल जाए।',
      letters: ['S', 'E', 'R', 'E', 'N', 'D', 'I', 'P', 'I', 'T', 'Y']
    },
    {
      id: 2,
      word: 'déjà vu',
      type: 'noun',
      definition: 'the eerie sense that a new moment has already been lived through before.',
      status: 'found 4 days ago',
      translation: 'वो अजीब एहसास जब लगे कि ये पल पहले भी जी चुके हैं।',
      letters: ['D', 'E', 'J', 'A', 'V', 'U'],
      hasRecording: true
    },
    {
      id: 3,
      word: 'word drift',
      type: 'noun',
      definition: 'the faint trace of a memory that grows quieter each time you try to recall it.',
      status: 'still lost',
      letters: ['F', 'A', 'D', 'I', 'N', 'G', 'E', 'C', 'H', 'O']
    }
  ];

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
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
                    LOST & FOUND
                  </h1>
                  <p className="[font-family:'Geist_Mono',monospace] lowercase text-[#f6dfdd]/78 text-[15px] leading-6 mt-4">
                    every word you've chased down, and the ones still slipping through the static.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] bg-black border-[#f049cf] border-2 border-solid flex p-5 flex-col gap-3">
              {recentWords.map((item) => (
                <div key={item.id} className="flex flex-col gap-3">
                  <div className="flex justify-between items-center gap-3">
                    <div className="min-w-0 flex flex-col gap-1">
                      <div className="[font-family:'Geist_Mono',monospace] lowercase text-[#f6dfdd] text-lg leading-6">
                        {item.word}
                      </div>
                      <div className="[font-family:'Geist_Mono',monospace] lowercase text-[#b8a8a7] text-xs leading-4">
                        {item.type}
                      </div>
                    </div>
                    <div className={`[font-family:'Geist_Mono',monospace] shrink-0 uppercase text-xs leading-4 ${item.status === 'still lost' ? 'text-[#FFA06B]' : 'text-[#ffa06b]'}`}>
                      {item.status}
                    </div>
                  </div>
                  <p className="[font-family:'Geist_Mono',monospace] lowercase text-[#b8a8a7] text-sm leading-5">
                    {item.definition}
                  </p>
                  <div className="flex justify-between items-center gap-3">
                    <button 
                      onClick={() => toggleCard(item.id)}
                      className="rounded-full bg-[#ffa06b] flex px-4 py-1.5 justify-center items-center"
                    >
                      <div className="[font-family:'Geist_Mono',monospace] uppercase text-black text-xs leading-4">
                        see clues
                      </div>
                    </button>
                    <button onClick={() => toggleCard(item.id)}>
                      <svg className="size-5 text-[#f6dfdd]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                  
                  {expandedCard === item.id && (
                    <div className="pt-1 flex-col gap-3">
                      <div className="rounded-[18px] bg-black border-[#f049cf] border-2 border-solid p-3">
                        <p className="[font-family:'Geist_Mono',monospace] lowercase text-[#f6dfdd] text-sm leading-5">
                          {item.translation}
                        </p>
                      </div>
                      <div className="border-[#f049cf] border-t-2 border-r-0 border-b-0 border-l-0 border-dotted w-full h-px" />
                      <div className="rounded-full bg-black border-[#f049cf] border-2 border-solid flex px-4 py-3 justify-center items-end gap-1.5">
                        {item.letters.map((letter, index) => (
                          <div key={index} className="flex flex-col items-center gap-1">
                            <div className="[font-family:'Geist_Mono',monospace] text-[#ffa06b] text-sm leading-[14px]">
                              {letter}
                            </div>
                            <div className="w-[5mm] bg-[#ffa06b] h-0.5" />
                          </div>
                        ))}
                      </div>
                      {item.hasRecording && (
                        <div className="rounded-[22px] bg-black border-[#f049cf] border-2 border-solid p-4">
                          <div className="flex items-center gap-3">
                            <div className="size-10 shrink-0 rounded-full bg-black border-[#f049cf] border-2 border-solid flex justify-center items-center">
                              <svg className="size-4 fill-[#f049cf] text-[#f049cf]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z"/>
                              </svg>
                            </div>
                            <div className="flex justify-center items-center flex-1 gap-[3px] h-8">
                              <div className="rounded-full bg-[#f049cf]/70 w-[3px] h-4" />
                              <div className="rounded-full bg-[#f049cf]/70 w-[3px] h-3" />
                              <div className="rounded-full bg-[#f049cf]/70 w-[3px] h-6" />
                              <div className="rounded-full bg-[#f049cf]/70 w-[3px] h-5" />
                              <div className="rounded-full bg-[#f049cf]/70 w-[3px] h-2" />
                              <div className="rounded-full bg-[#f049cf]/70 w-[3px] h-7" />
                              <div className="rounded-full bg-[#f049cf]/70 w-[3px] h-4" />
                              <div className="rounded-full bg-[#f049cf]/70 w-[3px] h-3" />
                              <div className="rounded-full bg-[#f049cf]/70 w-[3px] h-5" />
                              <div className="rounded-full bg-[#f049cf]/70 w-[3px] h-2" />
                            </div>
                            <div className="[font-family:'Geist_Mono',monospace] shrink-0 text-[#f6dfdd] text-sm leading-5">
                              0:08
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}