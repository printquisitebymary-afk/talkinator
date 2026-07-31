import React, { useState, useEffect, useRef } from 'react';

export default function SearchScreen({ onNavigate, showSettings, setShowSettings }) {
  const [clues, setClues] = useState(Array(9).fill(''));
  const [selectedClueIndex, setSelectedClueIndex] = useState(null);
  const [recordings, setRecordings] = useState([]);
  const [isRecording, setIsRecording] = useState(false);
  const textareaRef = useRef(null);

  const handleClueClick = (index) => {
    setSelectedClueIndex(index);
  };

  const handleClueChange = (e) => {
    if (selectedClueIndex !== null) {
      const newClues = [...clues];
      newClues[selectedClueIndex] = e.target.value.slice(-1);
      setClues(newClues);
    }
  };

  const addClue = () => {
    setClues([...clues, '']);
  };

  const removeClue = () => {
    if (clues.length > 1) {
      setClues(clues.slice(0, -1));
    }
  };

  const startRecording = () => {
    setIsRecording(true);
    // Simulate recording
    setTimeout(() => {
      setIsRecording(false);
      setRecordings([...recordings, { id: Date.now(), duration: '0:12' }]);
    }, 3000);
  };

  return (
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
              <div className="max-w-[280px]">
                <h1 className="[font-family:'Geist_Mono',monospace] font-bold uppercase text-[#ffa06b] text-[34px] leading-[39px] tracking-[-0.48px] pt-px">
                  On the tip of your tongue?
                </h1>
                <p className="[font-family:'Geist_Mono',monospace] lowercase text-[#f6dfdd]/78 text-[15px] leading-6 mt-4">
                  Describe the word you can't quite reach. We'll find it — in any language.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] bg-black border-[#f049cf] border-2 border-solid flex p-5 flex-col gap-4">
            <div className="flex justify-between items-start gap-3">
              <div className="min-w-0 flex flex-col gap-2">
                <div className="leading-none [font-family:'Geist_Mono',monospace] whitespace-nowrap font-normal text-left align-baseline uppercase text-[#f6dfdd] text-[23px] leading-6 tracking-tight pt-2">
                  talk around it
                </div>
              </div>
              <div className="shrink-0 rounded-full bg-black border-[#ffa06b] border-2 border-solid flex px-3 py-2 items-center gap-1.5 h-9.5">
                <svg className="size-4 text-[#ffa06b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.5 3.5L15 12m-6.5 6.5L9 21H3m12-6.5L15 12m-6.5-6.5L9 3" />
                </svg>
                <div className="[font-family:'Geist_Mono',monospace] uppercase text-[#f6dfdd] text-[13px]">
                  HIN
                </div>
                <svg className="size-4 text-[#ffa06b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                <div className="[font-family:'Geist_Mono',monospace] uppercase text-[#f6dfdd] text-[13px]">
                  ENG
                </div>
              </div>
            </div>
            <p className="[font-family:'Geist_Mono',monospace] font-normal text-left align-baseline text-[#b8a8a7] text-base leading-5 tracking-normal p-0 self-start flex-none w-82.5 h-10">
              explain it in the language you know the best
            </p>
            <div className="rounded-[22px] bg-black border-[#f049cf] border-2 border-solid p-4">
              <textarea
                ref={textareaRef}
                className="min-h-[112px] bg-transparent resize-none outline-none [font-family:'Geist_Mono',monospace] lowercase text-[#f6dfdd] text-lg leading-6 w-full"
                placeholder=""
                defaultValue=""
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="[font-family:'Geist_Mono',monospace] uppercase text-[#f6dfdd] text-base leading-6 px-1">
                Add clues
              </div>
              <div className="rounded-full bg-black border-[#f049cf] border-2 border-solid flex px-4 py-3 justify-between items-center gap-2">
                <button onClick={removeClue} className="size-4 cursor-pointer shrink-0 text-[#ffa06b]">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
                <div className="flex justify-center items-end flex-1 gap-1.5">
                  {clues.map((clue, index) => (
                    <div 
                      key={index} 
                      className="flex flex-col items-center gap-1 cursor-pointer"
                      onClick={() => handleClueClick(index)}
                    >
                      {clue && (
                        <div className="[font-family:'Geist_Mono',monospace] text-[#ffa06b] text-sm leading-[14px]">
                          {clue}
                        </div>
                      )}
                      <div className={`w-[5mm] h-0.5 ${clue ? 'bg-[#ffa06b]' : 'bg-[#f6dfdd]'}`} />
                    </div>
                  ))}
                </div>
                <button onClick={addClue} className="size-4 cursor-pointer shrink-0 text-[#ffa06b]">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="rounded-[22px] bg-black border-[#f049cf] border-2 border-solid p-4">
              {recordings.length === 0 ? (
                <div className="flex items-center gap-3">
                  <button 
                    onClick={startRecording}
                    className="size-10 shrink-0 rounded-full bg-black border-[#f049cf] border-2 border-solid flex justify-center items-center"
                  >
                    <svg className="size-4 fill-[#f049cf] text-[#f049cf]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                      <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                    </svg>
                  </button>
                  <div className="[font-family:'Geist_Mono',monospace] text-[#b8a8a7] text-sm">
                    tap to record
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  {recordings.map((recording) => (
                    <div key={recording.id} className="flex items-center gap-3">
                      <div className="size-10 shrink-0 rounded-full bg-black border-[#f049cf] border-2 border-solid flex justify-center items-center">
                        <svg className="size-4 fill-[#f049cf] text-[#f049cf]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <div className="flex justify-center items-center flex-1 gap-[3px] h-8">
                        {[...Array(20)].map((_, i) => (
                          <div 
                            key={i} 
                            className="rounded-full bg-[#f049cf]/70 w-[3px]"
                            style={{ 
                              height: `${Math.random() * 6 + 2}px`,
                              animation: isRecording ? 'waveform 1s ease-in-out infinite' : 'none'
                            }}
                          />
                        ))}
                      </div>
                      <div className="[font-family:'Geist_Mono',monospace] shrink-0 text-[#f6dfdd] text-sm leading-5">
                        {recording.duration}
                      </div>
                    </div>
                  ))}
                  <button 
                    onClick={startRecording}
                    className="size-10 shrink-0 rounded-full bg-black border-[#f049cf] border-2 border-solid flex justify-center items-center"
                  >
                    <svg className="size-4 fill-[#f049cf] text-[#f049cf]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                      <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                    </svg>
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="px-4">
            <button 
              onClick={() => onNavigate('results')}
              className="[font-family:'Geist_Mono',monospace] font-normal text-center align-baseline uppercase rounded-3xl bg-[#f049cf] text-black text-lg leading-7 tracking-normal border-[#f049cf] border-2 border-solid px-5 py-4 w-full"
            >
              Find my word
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}