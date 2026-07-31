import React, { useState } from 'react';

export default function TranslatorScreen({ onNavigate, showSettings, setShowSettings }) {
  const [showTypingModal, setShowTypingModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [showRecordingModal, setShowRecordingModal] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [recordings, setRecordings] = useState([]);
  const [isRecording, setIsRecording] = useState(false);

  const startRecording = () => {
    setIsRecording(true);
    setTimeout(() => {
      setIsRecording(false);
      setRecordings([...recordings, { id: Date.now(), duration: '0:12' }]);
    }, 3000);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFile(file);
    }
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
                  <h1 className="[font-family:'Geist_Mono',monospace] font-bold uppercase text-[#ffa06b] text-[34px] leading-[39px] tracking-[-0.48px] mb-7.5 pb-9 h-20">
                    FOUND IN TRANSLATION
                  </h1>
                  <p className="[font-family:'Geist_Mono',monospace] lowercase text-[#f6dfdd]/78 text-[15px] leading-6 mt-4">
                    type it, speak it, or snap it, translate any word your way.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] bg-black border-[#f049cf] border-2 border-solid flex p-5 flex-col gap-3">
              <div className="flex flex-row justify-between items-center gap-2">
                <div className="[font-family:'Geist_Mono',monospace] uppercase text-[#f6dfdd] text-lg leading-6">
                  TYPE IT OUT
                </div>
              </div>
              <textarea
                placeholder="enter text to translate"
                className="[font-family:'Geist_Mono',monospace] min-h-20 resize-none outline-none lowercase rounded-[18px] bg-black text-[#f6dfdd] text-sm leading-5 border-[#f049cf] border-2 border-solid p-3 w-full"
                defaultValue=""
              />
              <button 
                onClick={() => setShowTypingModal(true)}
                className="[font-family:'Geist_Mono',monospace] font-normal text-left align-baseline uppercase rounded-full bg-[#f049cf] text-black text-sm leading-5 tracking-normal h-11"
              >
                TRANSLATE
              </button>
            </div>

            <div className="rounded-[28px] bg-black border-[#f049cf] border-2 border-solid flex p-5 flex-col gap-3">
              <div className="flex flex-row justify-between items-start gap-2">
                <div className="flex flex-col gap-1">
                  <div className="[font-family:'Geist_Mono',monospace] uppercase text-[#f6dfdd] text-lg leading-6">
                    UPLOAD A FILE
                  </div>
                  <div className="[font-family:'Geist_Mono',monospace] lowercase text-[#b8a8a7] text-xs leading-4">
                    png, jpg, pdf, docx
                  </div>
                </div>
              </div>
              <div className="rounded-[18px] bg-black border-[#f049cf] border-2 border-dashed flex p-6 flex-col justify-center items-center gap-2">
                <svg className="size-8 text-[#ffa06b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <div className="[font-family:'Geist_Mono',monospace] text-center lowercase text-[#b8a8a7] text-xs leading-4">
                  {uploadedFile ? uploadedFile.name : 'drag & drop or tap to browse'}
                </div>
                {uploadedFile && (
                  <button 
                    onClick={() => setUploadedFile(null)}
                    className="text-[#ffa06b] text-xs uppercase"
                  >
                    Remove
                  </button>
                )}
              </div>
              <input
                type="file"
                accept=".png,.jpg,.jpeg,.pdf,.docx"
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload">
                <button 
                  onClick={() => document.getElementById('file-upload').click()}
                  className="[font-family:'Geist_Mono',monospace] font-normal text-left align-baseline uppercase rounded-full bg-[#f049cf] text-black text-sm leading-5 tracking-normal h-11 w-full"
                >
                  EXTRACT & TRANSLATE
                </button>
              </label>
            </div>

            <div className="rounded-[28px] bg-black border-[#f049cf] border-2 border-solid flex p-5 flex-col gap-3">
              <div className="flex flex-row justify-between items-start gap-2">
                <div className="flex flex-col gap-1">
                  <div className="[font-family:'Geist_Mono',monospace] uppercase text-[#f6dfdd] text-lg leading-6">
                    RECORD YOUR VOICE
                  </div>
                  <div className="[font-family:'Geist_Mono',monospace] lowercase text-[#b8a8a7] text-xs leading-4" />
                </div>
              </div>
              <div className="rounded-[22px] bg-black border-[#f049cf] border-2 border-solid flex p-6 flex-col justify-center items-center gap-2">
                <button 
                  onClick={startRecording}
                  className="size-14 rounded-full bg-black border-[#f049cf] border-2 border-solid flex justify-center items-center"
                >
                  <svg className="size-6 text-[#ffa06b]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
                    <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                  </svg>
                </button>
                <div className="[font-family:'Geist_Mono',monospace] text-center lowercase text-[#b8a8a7] text-xs leading-4">
                  tap to record or upload audio
                </div>
              </div>
              <button 
                onClick={() => setShowRecordingModal(true)}
                className="[font-family:'Geist_Mono',monospace] font-normal text-left align-baseline uppercase rounded-full bg-[#f049cf] text-black text-sm leading-5 tracking-normal h-11"
              >
                TRANSLATE
              </button>
            </div>
          </div>
        </div>
      </div>

      {showTypingModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="rounded-[28px] bg-black border-[#f049cf] border-2 border-solid p-5 flex flex-col gap-3 max-w-sm w-full">
            <div className="flex justify-between items-center">
              <div className="[font-family:'Geist_Mono',monospace] uppercase text-[#f6dfdd] text-lg leading-6">
                TYPE IT OUT
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
            <textarea
              placeholder=""
              className="[font-family:'Geist_Mono',monospace] min-h-[112px] resize-none outline-none lowercase rounded-[18px] bg-black text-[#f6dfdd] text-lg leading-6 border-[#f049cf] border-2 border-solid p-4 w-full"
              defaultValue="वो एहसास जब कोई पुरानी जगह देखकर यादें ताज़ा हो जाएं।"
            />
            <button 
              onClick={() => setShowTypingModal(false)}
              className="[font-family:'Geist_Mono',monospace] font-normal text-center align-baseline uppercase rounded-full bg-[#f049cf] text-black text-sm leading-5 tracking-normal h-11"
            >
              TRANSLATE
            </button>
          </div>
        </div>
      )}

      {showRecordingModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="rounded-[28px] bg-black border-[#f049cf] border-2 border-solid p-5 flex flex-col gap-3 max-w-sm w-full">
            <div className="flex justify-between items-center">
              <div className="[font-family:'Geist_Mono',monospace] uppercase text-[#f6dfdd] text-lg leading-6">
                RECORD YOUR VOICE
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
                  0:12
                </div>
              </div>
            </div>
            <textarea
              placeholder=""
              className="[font-family:'Geist_Mono',monospace] min-h-[80px] resize-none outline-none lowercase rounded-[18px] bg-black text-[#f6dfdd] text-lg leading-6 border-[#f049cf] border-2 border-solid p-4 w-full"
              defaultValue=""
            />
            <button 
              onClick={() => setShowRecordingModal(false)}
              className="[font-family:'Geist_Mono',monospace] font-normal text-center align-baseline uppercase rounded-full bg-[#f049cf] text-black text-sm leading-5 tracking-normal h-11"
            >
              TRANSLATE
            </button>
            <button 
              onClick={() => setShowRecordingModal(false)}
              className="[font-family:'Geist_Mono',monospace] font-normal text-center align-baseline uppercase rounded-full bg-transparent text-[#f6dfdd] text-sm leading-5 tracking-normal h-11 border-[#f049cf] border-2 border-solid"
            >
              CHANGE LANGUAGE
            </button>
          </div>
        </div>
      )}
    </div>
  );
}