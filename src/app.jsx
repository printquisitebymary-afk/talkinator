const { useState, useEffect, useRef } = React;

// TALKINATOR Logo Images (using inline SVG placeholders - replace with actual images)
const HEADER_WORDMARK = 'assets/header_wordmark.png'; + btoa('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40"><text x="0" y="28" font-family="monospace" font-size="20" font-weight="bold" fill="#f6dfdd">TALKINATOR</text></svg>');
const START_WORDMARK = 'assets/header_wordmark.png'; + btoa('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 60"><text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-family="monospace" font-size="32" font-weight="bold" fill="#f6dfdd">TALKINATOR</text></svg>');
const BLOCK_BG = 'assets/image.png'; + btoa('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200"><rect width="400" height="200" fill="#1a1a1a"/><text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-family="monospace" font-size="14" fill="#333">Background Pattern</text></svg>');

// Front/Landing Page Component
function FrontPage({ onNavigate }) {
  return React.createElement('div', { className: 'bg-black text-neutral-50 w-full h-fit flex flex-col' },
    React.createElement('div', { className: 'flex-1 flex flex-col items-center justify-center p-8 gap-12' },
      React.createElement('div', { className: 'mb-6' },
        React.createElement('img', { src: START_WORDMARK, alt: 'TALKINATOR', className: 'w-80 h-auto' })
      ),
      React.createElement('button', { onClick: () => onNavigate('search'), className: 'w-64 h-14 rounded-full bg-[#f049cf] flex items-center justify-center gap-2 hover:scale-105 transition-transform' },
        React.createElement('span', { className: 'text-black font-bold uppercase text-sm tracking-wide' }, 'GO'),
        React.createElement('svg', { className: 'size-4 text-black', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
          React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M13 7l5 5m0 0l-5 5m5-5H6' })
        )
      )
    )
  );
}

// Footer Component with moving purple glow - reduced height by 2mm (from 80px to 72px)
function Footer({ currentScreen, onNavigate }) {
  const isActive = (screen) => currentScreen === screen;

  return React.createElement('div', { className: 'fixed bottom-0 left-0 right-0 z-50 bg-black flex items-center w-full h-[72px] overflow-hidden' },
    React.createElement('div', { className: 'relative z-10 flex mx-[5px] px-6 justify-between items-center w-full' },
      React.createElement('button', { onClick: () => onNavigate('search'), className: 'relative flex justify-center items-center size-12' },
        isActive('search') && React.createElement('div', { className: 'absolute inset-0 bg-white rounded-full blur-xl opacity-95' }),
        React.createElement('svg', { className: 'size-6 text-white relative z-10', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
          React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' })
        )
      ),
      React.createElement('button', { onClick: () => onNavigate('recent'), className: 'relative flex justify-center items-center size-12' },
        isActive('recent') && React.createElement('div', { className: 'absolute inset-0 bg-white rounded-full blur-xl opacity-95' }),
        React.createElement('svg', { className: 'size-6 text-white relative z-10', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
          React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' })
        )
      ),
      React.createElement('button', { onClick: () => onNavigate('saved'), className: 'relative flex justify-center items-center size-12' },
        isActive('saved') && React.createElement('div', { className: 'absolute inset-0 bg-white rounded-full blur-xl opacity-95' }),
        React.createElement('svg', { className: 'size-6 text-white relative z-10', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
          React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z' })
        )
      ),
      React.createElement('button', { onClick: () => onNavigate('translator'), className: 'relative flex justify-center items-center size-12' },
        isActive('translator') && React.createElement('div', { className: 'absolute inset-0 bg-white rounded-full blur-xl opacity-95' }),
        React.createElement('div', { className: 'flex items-center gap-0.5 relative z-10 text-white' },
          React.createElement('span', { className: 'text-white text-[17px] leading-6 tracking-normal mr-0 pb-1 self-center flex-none w-[17px]' }, '文'),
          React.createElement('span', { className: 'text-white text-xl leading-0 tracking-normal pt-[5px]' }, 'A')
        )
      )
    )
  );
}

// Header Component with proper logo positioning
function Header({ onSettingsToggle }) {
  return React.createElement('div', { className: 'fixed top-0 left-0 right-0 z-50 bg-black flex items-center justify-between w-full px-4 py-3' },
    React.createElement('img', { src: HEADER_WORDMARK, alt: 'TALKINATOR', className: 'h-10 w-auto' }),
    React.createElement('button', { onClick: onSettingsToggle, className: 'size-10 rounded-full bg-black border-zinc-300 border-2 border-solid flex justify-center items-center' },
      React.createElement('svg', { className: 'size-5 text-zinc-300', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', strokeWidth: 2 },
        React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M12 15a3 3 0 100-6 3 3 0 000 6z' }),
        React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z' })
      )
    )
  );
}

// Search Screen Component
function SearchScreen({ onNavigate, showSettings, setShowSettings }) {
  const [clues, setClues] = useState(Array(9).fill(''));
  const [selectedClueIndex, setSelectedClueIndex] = useState(null);
  const [recordings, setRecordings] = useState([]);
  const [isRecording, setIsRecording] = useState(false);

  const addClue = () => setClues([...clues, '']);
  
  const removeClue = () => {
    if (clues.length > 1) setClues(clues.slice(0, -1));
  };

  const startRecording = () => {
    setIsRecording(true);
    setTimeout(() => {
      setIsRecording(false);
      setRecordings([...recordings, { id: Date.now(), duration: '0:12' }]);
    }, 3000);
  };

  const deleteRecording = (id) => {
    setRecordings(recordings.filter(r => r.id !== id));
  };

  return React.createElement('div', { className: 'bg-black text-neutral-50 w-full h-fit' },
    React.createElement('div', { className: 'bg-black text-neutral-50 flex flex-col w-full h-fit' },
      React.createElement('div', { className: 'flex p-4 flex-col gap-8' },
        React.createElement('div', { className: 'flex px-1 justify-between items-start' }),
        React.createElement('div', { className: 'relative rounded-3xl bg-black overflow-hidden' },
          React.createElement('img', { src: BLOCK_BG, alt: 'Background', className: 'absolute inset-0 w-full h-full object-cover opacity-80' }),
          React.createElement('div', { className: 'relative min-h-[200px] flex p-5 flex-col justify-end gap-6' },
            React.createElement('div', { className: 'max-w-[280px]' },
              React.createElement('h1', { className: '[font-family:\'Geist_Mono\',monospace] font-bold uppercase text-[#ffa06b] text-[34px] leading-[39px] tracking-[-0.48px] pt-px' }, 'On the tip of your tongue?'),
              React.createElement('p', { className: '[font-family:\'Geist_Mono\',monospace] lowercase text-[#f6dfdd]/78 text-[15px] leading-6 mt-4' }, 'Describe the word you can\'t quite reach. We\'ll find it — in any language.')
            )
          )
        ),
        React.createElement('div', { className: 'rounded-[28px] bg-black border-[#f049cf] border-2 border-solid flex p-5 flex-col gap-4' },
          React.createElement('div', { className: 'flex justify-between items-start gap-3' },
            React.createElement('div', { className: 'min-w-0 flex flex-col gap-2' },
              React.createElement('div', { className: 'leading-none [font-family:\'Geist_Mono\',monospace] whitespace-nowrap font-normal text-left align-baseline uppercase text-[#f6dfdd] text-[23px] leading-6 tracking-tight pt-2' }, 'talk around it')
            ),
            React.createElement('div', { className: 'shrink-0 rounded-full bg-black border-[#ffa06b] border-2 border-solid flex px-3 py-2 items-center gap-1.5 h-9.5' },
              React.createElement('div', { className: '[font-family:\'Geist_Mono\',monospace] uppercase text-[#f6dfdd] text-[13px]' }, 'HIN'),
              React.createElement('svg', { className: 'size-3 text-[#ffa06b]', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
                React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' })
              ),
              React.createElement('div', { className: '[font-family:\'Geist_Mono\',monospace] uppercase text-[#f6dfdd] text-[13px]' }, 'ENG')
            )
          ),
          React.createElement('p', { className: '[font-family:\'Geist_Mono\',monospace] font-normal text-left align-baseline text-[#b8a8a7] text-base leading-5 tracking-normal p-0 self-start flex-none w-82.5 h-10' }, 'explain it in the language you know the best'),
          React.createElement('div', { className: 'rounded-[22px] bg-black border-[#f049cf] border-2 border-solid p-4' },
            React.createElement('textarea', { placeholder: 'enter text here...', className: 'min-h-[112px] bg-transparent resize-none outline-none [font-family:\'Geist_Mono\',monospace] lowercase text-[#f6dfdd] text-lg leading-6 w-full', defaultValue: '' })
          ),
          React.createElement('div', { className: 'flex flex-col gap-3' },
            React.createElement('div', { className: '[font-family:\'Geist_Mono\',monospace] uppercase text-[#f6dfdd] text-base leading-6 px-1' }, 'Add clues'),
            React.createElement('div', { className: 'rounded-full bg-black border-[#f049cf] border-2 border-solid flex px-4 py-3 justify-between items-center gap-2' },
              React.createElement('button', { onClick: removeClue, className: 'size-4 cursor-pointer shrink-0 text-[#ffa06b]' },
                React.createElement('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
                  React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M20 12H4' })
                )
              ),
              React.createElement('div', { className: 'flex justify-center items-end flex-1 gap-1.5' },
                clues.map((clue, index) =>
                  React.createElement('div', { key: index, className: 'flex flex-col items-center gap-1 cursor-pointer', onClick: () => setSelectedClueIndex(index) },
                    React.createElement('input', { 
                      type: 'text', 
                      maxLength: 1,
                      value: clue,
                      onChange: (e) => {
                        const newClues = [...clues];
                        newClues[index] = e.target.value.slice(-1);
                        setClues(newClues);
                      },
                      className: 'w-4 h-4 bg-transparent border-none outline-none text-center [font-family:\'Geist_Mono\',monospace] text-[#ffa06b] text-sm',
                      placeholder: '_'
                    }),
                    React.createElement('div', { className: 'w-[5mm] h-0.5 bg-[#f6dfdd]' })
                  )
                )
              ),
              React.createElement('button', { onClick: addClue, className: 'size-4 cursor-pointer shrink-0 text-[#ffa06b]' },
                React.createElement('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
                  React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M12 4v16m8-8H4' })
                )
              )
            )
          ),
          React.createElement('div', { className: 'rounded-[22px] bg-black border-[#f049cf] border-2 border-solid p-4' },
            recordings.length === 0 ? (
              React.createElement('div', { className: 'flex items-center gap-3' },
                React.createElement('button', { onClick: startRecording, className: 'size-10 shrink-0 rounded-full bg-black border-[#f049cf] border-2 border-solid flex justify-center items-center' },
                  React.createElement('svg', { className: 'size-4 fill-[#f049cf] text-[#f049cf]', fill: 'currentColor', viewBox: '0 0 24 24' },
                    React.createElement('path', { d: 'M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z' }),
                    React.createElement('path', { d: 'M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z' })
                  )
                ),
                React.createElement('div', { className: '[font-family:\'Geist_Mono\',monospace] text-[#b8a8a7] text-sm' }, 'tap to record')
              )
            ) : (
              React.createElement('div', { className: 'space-y-3' },
                recordings.map(recording =>
                  React.createElement('div', { key: recording.id, className: 'flex items-center gap-3' },
                    React.createElement('div', { className: 'size-10 shrink-0 rounded-full bg-black border-[#f049cf] border-2 border-solid flex justify-center items-center' },
                      React.createElement('svg', { className: 'size-4 fill-[#f049cf] text-[#f049cf]', fill: 'currentColor', viewBox: '0 0 24 24' },
                        React.createElement('path', { d: 'M8 5v14l11-7z' })
                      )
                    ),
                    React.createElement('div', { className: 'flex justify-center items-center flex-1 gap-[3px] h-8' },
                      Array(20).fill(0).map((_, i) =>
                        React.createElement('div', { key: i, className: 'rounded-full bg-[#f049cf]/70 w-[3px]', style: { height: `${Math.random() * 6 + 2}px` } })
                      )
                    ),
                    React.createElement('div', { className: '[font-family:\'Geist_Mono\',monospace] shrink-0 text-[#f6dfdd] text-sm leading-5' }, recording.duration),
                    React.createElement('button', { onClick: () => deleteRecording(recording.id), className: 'size-8 rounded-full bg-black border-[#f049cf] border-2 border-solid flex justify-center items-center' },
                      React.createElement('svg', { className: 'size-4 text-[#ffa06b]', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
                        React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16' })
                      )
                    )
                  )
                ),
                React.createElement('button', { onClick: startRecording, className: 'size-10 shrink-0 rounded-full bg-black border-[#f049cf] border-2 border-solid flex justify-center items-center' },
                  React.createElement('svg', { className: 'size-4 fill-[#f049cf] text-[#f049cf]', fill: 'currentColor', viewBox: '0 0 24 24' },
                    React.createElement('path', { d: 'M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z' }),
                    React.createElement('path', { d: 'M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z' })
                  )
                )
              )
            )
          )
        ),
        React.createElement('div', { className: 'px-4' },
          React.createElement('button', { onClick: () => onNavigate('results'), className: '[font-family:\'Geist_Mono\',monospace] font-normal text-center align-baseline uppercase rounded-3xl bg-[#f049cf] text-black text-lg leading-7 tracking-normal border-[#f049cf] border-2 border-solid px-5 py-4 w-full' }, 'Find my word')
        )
      )
    )
  );
}

// Results Screen Component with swipe functionality
function ResultsScreen({ onNavigate, showSettings, setShowSettings, onSaveWord }) {
  const [suggestions, setSuggestions] = useState([
    { id: 1, word: 'nostalgia', type: 'noun', definition: 'a sentimental longing for the past, triggered by a familiar place or memory.', match: '96%', saved: false },
    { id: 2, word: 'reminiscence', type: 'noun', definition: 'the act of recalling past experiences, often with warmth and fondness.', match: '88%', saved: false },
    { id: 3, word: 'word drift', type: 'noun', definition: 'a near-match for a word that sits just beyond recall, waiting to be recovered.', match: '81%', saved: false }
  ]);

  const [dragStart, setDragStart] = useState(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [currentSwipe, setCurrentSwipe] = useState(null);

  const handleMouseDown = (e, id) => {
    setDragStart({ x: e.clientX, y: e.clientY, id });
    setCurrentSwipe(null);
  };

  const handleMouseMove = (e) => {
    if (dragStart) {
      const offsetX = e.clientX - dragStart.x;
      setDragOffset({ x: offsetX, y: 0 });
    }
  };

  const handleMouseUp = () => {
    if (dragStart) {
      if (dragOffset.x > 100) {
        // Swiped RIGHT = LOST (orange background on left)
        setCurrentSwipe({ id: dragStart.id, type: 'lost' });
        setTimeout(() => {
          setSuggestions(suggestions.filter(s => s.id !== dragStart.id));
          setCurrentSwipe(null);
        }, 300);
      } else if (dragOffset.x < -100) {
        // Swiped LEFT = FOUND (pink background on left)
        setCurrentSwipe({ id: dragStart.id, type: 'found' });
        onSaveWord(dragStart.id);
        setTimeout(() => {
          setCurrentSwipe(null);
        }, 300);
      }
      setDragStart(null);
      setDragOffset({ x: 0, y: 0 });
    }
  };

  const toggleSave = (id) => {
    setSuggestions(suggestions.map(s => s.id === id ? { ...s, saved: !s.saved } : s));
    if (!suggestions.find(s => s.id === id)?.saved) {
      onSaveWord(id);
    }
  };

  return React.createElement('div', { className: 'font-[\'Geist_Mono\'] bg-black text-neutral-50 self-start w-full h-fit' },
    React.createElement('div', { className: 'relative min-h-[874px] bg-black flex flex-col w-full overflow-hidden' },
      React.createElement('div', { className: 'overflow-y-auto bg-black flex px-6 pt-8 pb-4 flex-col flex-1 gap-6' },
        React.createElement('div', { className: 'flex justify-between items-center' },
          React.createElement('button', { onClick: () => onNavigate('search'), className: 'rounded-full bg-[#ffa06b] flex px-4 py-2 items-center gap-1' },
            React.createElement('svg', { className: 'size-4 text-black', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', strokeWidth: 2.5 },
              React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M10 19l-7-7m0 0l7-7m-7 7h18' })
            ),
            React.createElement('span', { className: 'font-[\'Geist_Mono\'] font-bold uppercase text-black text-sm leading-5 tracking-wide' }, 'BACK')
          )
        ),
        React.createElement('div', { className: 'flex items-center gap-2' },
          React.createElement('svg', { className: 'size-5 text-[#f049cf]', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24', strokeWidth: 2.5 },
            React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z' })
          ),
          React.createElement('h2', { className: 'font-[\'Geist_Mono\'] font-medium text-left align-baseline uppercase text-[#F6DFDD] text-xl leading-7 tracking-widest' }, `SUGGESTIONS (${suggestions.length})`)
        ),
        React.createElement('div', { className: 'flex flex-col gap-4' },
          suggestions.map(suggestion => {
            const isFound = currentSwipe?.id === suggestion.id && currentSwipe.type === 'found';
            const isLost = currentSwipe?.id === suggestion.id && currentSwipe.type === 'lost';
            const isDragging = dragStart?.id === suggestion.id;
            
            return React.createElement('div', { 
              key: suggestion.id, 
              className: 'relative cursor-pointer',
              onMouseDown: (e) => handleMouseDown(e, suggestion.id),
              onMouseMove: handleMouseMove,
              onMouseUp: handleMouseUp,
              onMouseLeave: handleMouseUp
            },
              // Fixed background layer (FOUND/LOST) - stays in place behind card
              React.createElement('div', { 
                className: 'absolute inset-0 rounded-xl flex items-center justify-start px-6',
                style: { 
                  backgroundColor: isLost ? '#ffa06b' : (isFound ? '#f049cf' : 'transparent'),
                  zIndex: 0
                }
              },
                (isFound || isLost) && React.createElement('span', { 
                  className: 'font-[\'Geist_Mono\'] font-bold uppercase text-black text-2xl'
                }, isFound ? 'FOUND' : 'LOST')
              ),
              // Card content with fixed border outline that slides over background
              React.createElement('div', { 
                className: 'relative rounded-xl border-[#f049cf] border-2 border-solid flex p-4 flex-col gap-2 bg-black',
                style: { 
                  transform: isDragging ? `translateX(${dragOffset.x}px)` : 'translateX(0)',
                  transition: isDragging ? 'none' : 'transform 0.3s ease-out',
                  zIndex: 1
                }
              },
                React.createElement('div', { className: 'flex justify-between items-start' },
                  React.createElement('div', { className: 'flex flex-col gap-1' },
                    React.createElement('span', { className: 'font-[\'Geist_Mono\'] lowercase text-neutral-50 text-lg leading-7' }, suggestion.word),
                    React.createElement('span', { className: 'font-[\'Geist_Mono\'] lowercase text-[#a1a1a1] text-xs leading-4' }, suggestion.type)
                  ),
                  React.createElement('button', { onClick: () => toggleSave(suggestion.id), className: 'shrink-0' },
                    React.createElement('svg', { className: `size-5 ${suggestion.saved ? 'fill-[#ffa06b] text-[#ffa06b]' : 'text-neutral-50'}`, fill: suggestion.saved ? 'currentColor' : 'none', stroke: 'currentColor', viewBox: '0 0 24 24', strokeWidth: 2 },
                      React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z' })
                    )
                  )
                ),
                React.createElement('p', { className: 'font-[\'Geist_Mono\'] lowercase text-[#a1a1a1] text-xs leading-5' }, suggestion.definition),
                React.createElement('div', { className: 'flex mt-1 items-center gap-2' },
                  React.createElement('span', { className: 'font-[\'Geist_Mono\'] lowercase rounded-full text-[#ffa06b] text-[11px] border-2 border-[#ffa06b] border-solid px-2 py-0.5' }, `${suggestion.match} match`)
                )
              )
            );
          })
        )
      )
    )
  );
}

// Saved Screen Component with default word
function SavedScreen({ onNavigate, showSettings, setShowSettings, savedWords, setSavedWords }) {
  const removeWord = (id) => {
    setSavedWords(savedWords.filter(word => word.id !== id));
  };

  return React.createElement('div', { className: 'bg-neutral-950 text-neutral-50 w-full h-fit' },
    React.createElement('div', { className: 'bg-black text-neutral-50 w-full h-fit' },
      React.createElement('div', { className: 'bg-black text-neutral-50 flex flex-col w-full h-fit' },
        React.createElement('div', { className: 'flex p-4 flex-col gap-8' },
          React.createElement('div', { className: 'flex px-1 justify-between items-start' }),
          React.createElement('div', { className: 'relative rounded-3xl bg-black overflow-hidden' },
            React.createElement('div', { className: 'absolute inset-0', style: { backgroundImage: 'url(' + BLOCK_BG + ')', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.8 } }),
            React.createElement('div', { className: 'relative min-h-[200px] flex p-5 flex-col justify-end gap-6' },
              React.createElement('div', { className: 'max-w-[300px]' },
                React.createElement('h1', { className: '[font-family:\'Geist_Mono\',monospace] font-bold uppercase text-[#ffa06b] text-[34px] leading-[39px] tracking-[-0.48px] pb-8' }, 'NOT TO FORGET'),
                React.createElement('p', { className: '[font-family:\'Geist_Mono\',monospace] lowercase text-[#f6dfdd]/78 text-[15px] leading-6 mt-4' }, 'words worth keeping close, saved to revisit, savor, and make your own.')
              )
            )
          ),
          React.createElement('div', { className: 'flex flex-col gap-3' },
            savedWords.map(word =>
              React.createElement('div', { key: word.id, className: 'rounded-[22px] bg-black border-[#f049cf] border-2 border-solid flex p-4 flex-col gap-2' },
                React.createElement('div', { className: 'flex justify-between items-start gap-3' },
                  React.createElement('div', { className: 'min-w-0 flex flex-col gap-1' },
                    React.createElement('div', { className: '[font-family:\'Geist_Mono\',monospace] lowercase text-[#f6dfdd] text-lg leading-6' }, word.word),
                    React.createElement('div', { className: '[font-family:\'Geist_Mono\',monospace] lowercase text-[#b8a8a7] text-xs leading-4' }, word.type)
                  ),
                  React.createElement('button', { onClick: () => removeWord(word.id), className: 'shrink-0' },
                    React.createElement('svg', { className: 'size-5 fill-[#ffa06b] cursor-pointer text-[#ffa06b]', fill: 'currentColor', viewBox: '0 0 24 24' },
                      React.createElement('path', { d: 'M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z' })
                    )
                  )
                ),
                React.createElement('p', { className: '[font-family:\'Geist_Mono\',monospace] lowercase text-[#b8a8a7] text-sm leading-5' }, word.definition)
              )
            )
          )
        )
      )
    )
  );
}

// Recent Screen Component
function RecentScreen({ onNavigate, showSettings, setShowSettings }) {
  const [expandedCard, setExpandedCard] = useState(null);

  const recentWords = [
    { id: 1, word: 'serendipity', type: 'noun', definition: 'a happy accident, the pleasant surprise of stumbling onto something good you weren\'t looking for.', status: 'found just now', translation: 'वो अच्छा इत्तेफ़ाक जो बिना ढूंढे मिल जाए।', letters: ['S', 'E', 'R', 'E', 'N', 'D', 'I', 'P', 'I', 'T', 'Y'] },
    { id: 2, word: 'déjà vu', type: 'noun', definition: 'the eerie sense that a new moment has already been lived through before.', status: 'found 4 days ago', translation: 'वो अजीब एहसास जब लगे कि ये पल पहले भी जी चुके हैं।', letters: ['D', 'E', 'J', 'A', 'V', 'U'], hasRecording: true },
    { id: 3, word: 'word drift', type: 'noun', definition: 'the faint trace of a memory that grows quieter each time you try to recall it.', status: 'still lost', letters: ['F', 'A', 'D', 'I', 'N', 'G', 'E', 'C', 'H', 'O'] }
  ];

  const toggleCard = (id) => setExpandedCard(expandedCard === id ? null : id);

  return React.createElement('div', { className: 'bg-neutral-950 text-neutral-50 w-full h-fit' },
    React.createElement('div', { className: 'bg-black text-neutral-50 w-full h-fit' },
      React.createElement('div', { className: 'bg-black text-neutral-50 flex flex-col w-full h-fit' },
        React.createElement('div', { className: 'flex p-4 flex-col gap-8' },
          React.createElement('div', { className: 'flex px-1 justify-between items-start' }),
          React.createElement('div', { className: 'relative rounded-3xl bg-black overflow-hidden' },
            React.createElement('div', { className: 'absolute inset-0', style: { backgroundImage: 'url(' + BLOCK_BG + ')', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.8 } }),
            React.createElement('div', { className: 'relative min-h-[200px] flex p-5 flex-col justify-end gap-6' },
              React.createElement('div', { className: 'max-w-[300px]' },
                React.createElement('h1', { className: '[font-family:\'Geist_Mono\',monospace] font-bold uppercase text-[#ffa06b] text-[34px] leading-[39px] tracking-[-0.48px] pb-8' }, 'LOST & FOUND'),
                React.createElement('p', { className: '[font-family:\'Geist_Mono\',monospace] lowercase text-[#f6dfdd]/78 text-[15px] leading-6 mt-4' }, 'every word you\'ve chased down, and the ones still slipping through the static.')
              )
            )
          ),
          React.createElement('div', { className: 'rounded-[28px] bg-black flex flex-col gap-3' },
            recentWords.map(item =>
              React.createElement('div', { key: item.id, className: 'rounded-[22px] bg-black border-[#f049cf] border-2 border-solid flex p-4 flex-col gap-3' },
                React.createElement('div', { className: 'flex justify-between items-center gap-3' },
                  React.createElement('div', { className: 'min-w-0 flex flex-col gap-1' },
                    React.createElement('div', { className: '[font-family:\'Geist_Mono\',monospace] lowercase text-[#f6dfdd] text-lg leading-6' }, item.word),
                    React.createElement('div', { className: '[font-family:\'Geist_Mono\',monospace] lowercase text-[#b8a8a7] text-xs leading-4' }, item.type)
                  ),
                  React.createElement('div', { className: '[font-family:\'Geist_Mono\',monospace] shrink-0 uppercase text-xs leading-4 text-[#ffa06b]' }, item.status)
                ),
                React.createElement('p', { className: '[font-family:\'Geist_Mono\',monospace] lowercase text-[#b8a8a7] text-sm leading-5' }, item.definition),
                React.createElement('div', { className: 'flex justify-between items-center gap-3' },
                  React.createElement('button', { onClick: () => toggleCard(item.id), className: 'rounded-full bg-[#ffa06b] flex px-4 py-1.5 justify-center items-center' },
                    React.createElement('div', { className: '[font-family:\'Geist_Mono\',monospace] uppercase text-black text-xs leading-4' }, 'see clues')
                  ),
                  React.createElement('button', { onClick: () => toggleCard(item.id) },
                    React.createElement('svg', { className: 'size-5 text-[#f6dfdd]', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
                      React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M19 9l-7 7-7-7' })
                    )
                  )
                ),
                expandedCard === item.id && React.createElement('div', { className: 'pt-1 flex-col gap-3' },
                  React.createElement('div', { className: 'rounded-[18px] bg-black border-[#f049cf] border-2 border-solid p-3' },
                    React.createElement('p', { className: '[font-family:\'Geist_Mono\',monospace] lowercase text-[#f6dfdd] text-sm leading-5' }, item.translation)
                  ),
                  React.createElement('div', { className: 'border-[#f049cf] border-t-2 border-r-0 border-b-0 border-l-0 border-dotted w-full h-px' }),
                  React.createElement('div', { className: 'rounded-full bg-black border-[#f049cf] border-2 border-solid flex px-4 py-3 justify-center items-end gap-1.5' },
                    item.letters.map((letter, index) =>
                      React.createElement('div', { key: index, className: 'flex flex-col items-center gap-1' },
                        React.createElement('div', { className: '[font-family:\'Geist_Mono\',monospace] text-[#ffa06b] text-sm leading-[14px]' }, letter),
                        React.createElement('div', { className: 'w-[5mm] bg-[#ffa06b] h-0.5' })
                      )
                    )
                  )
                )
              )
            )
          )
        )
      )
    )
  );
}

// Translator Screen Component
function TranslatorScreen({ onNavigate, showSettings, setShowSettings }) {
  const [showTypingModal, setShowTypingModal] = useState(false);
  const [showRecordingModal, setShowRecordingModal] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) setUploadedFile(file);
  };

  return React.createElement('div', { className: 'bg-neutral-950 text-neutral-50 w-full h-fit' },
    React.createElement('div', { className: 'bg-black text-neutral-50 w-full h-fit' },
      React.createElement('div', { className: 'bg-black text-neutral-50 flex flex-col w-full h-fit' },
        React.createElement('div', { className: 'flex p-4 flex-col gap-8' },
          React.createElement('div', { className: 'flex px-1 justify-between items-start' }),
          React.createElement('div', { className: 'relative rounded-3xl bg-black overflow-hidden' },
            React.createElement('div', { className: 'absolute inset-0', style: { backgroundImage: 'url(' + BLOCK_BG + ')', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.8 } }),
            React.createElement('div', { className: 'relative min-h-[200px] flex p-5 flex-col justify-end gap-6' },
              React.createElement('div', { className: 'max-w-[300px]' },
                React.createElement('h1', { className: '[font-family:\'Geist_Mono\',monospace] font-bold uppercase text-[#ffa06b] text-[34px] leading-[39px] tracking-[-0.48px] mb-7.5 pb-9 h-20' }, 'FOUND IN TRANSLATION'),
                React.createElement('p', { className: '[font-family:\'Geist_Mono\',monospace] lowercase text-[#f6dfdd]/78 text-[15px] leading-6 mt-4' }, 'type it, speak it, or snap it, translate any word your way.')
              )
            )
          ),
          React.createElement('div', { className: 'rounded-[28px] bg-black border-[#f049cf] border-2 border-solid flex p-5 flex-col gap-3' },
            React.createElement('div', { className: 'flex flex-row justify-between items-center gap-2' },
              React.createElement('div', { className: '[font-family:\'Geist_Mono\',monospace] uppercase text-[#f6dfdd] text-lg leading-6' }, 'TYPE IT OUT')
            ),
            React.createElement('textarea', { placeholder: 'enter text to translate', className: '[font-family:\'Geist_Mono\',monospace] min-h-20 resize-none outline-none lowercase rounded-[18px] bg-black text-[#f6dfdd] text-sm leading-5 border-[#f049cf] border-2 border-solid p-3 w-full', defaultValue: '' }),
            React.createElement('button', { onClick: () => setShowTypingModal(true), className: '[font-family:\'Geist_Mono\',monospace] font-normal text-center align-baseline uppercase rounded-full bg-[#f049cf] text-black text-sm leading-5 tracking-normal h-11' }, 'TRANSLATE')
          ),
          React.createElement('div', { className: 'rounded-[28px] bg-black border-[#f049cf] border-2 border-solid flex p-5 flex-col gap-3' },
            React.createElement('div', { className: 'flex flex-row justify-between items-start gap-2' },
              React.createElement('div', { className: 'flex flex-col gap-1' },
                React.createElement('div', { className: '[font-family:\'Geist_Mono\',monospace] uppercase text-[#f6dfdd] text-lg leading-6' }, 'UPLOAD A FILE'),
                React.createElement('div', { className: '[font-family:\'Geist_Mono\',monospace] lowercase text-[#b8a8a7] text-xs leading-4' }, 'png, jpg, pdf, docx')
              )
            ),
            React.createElement('div', { className: 'rounded-[18px] bg-black border-[#f049cf] border-2 border-dashed flex p-6 flex-col justify-center items-center gap-2' },
              React.createElement('svg', { className: 'size-8 text-[#ffa06b]', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
                React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12' })
              ),
              React.createElement('div', { className: '[font-family:\'Geist_Mono\',monospace] text-center lowercase text-[#b8a8a7] text-xs leading-4' }, uploadedFile ? uploadedFile.name : 'drag & drop or tap to browse'),
              uploadedFile && React.createElement('button', { onClick: () => setUploadedFile(null), className: 'text-[#ffa06b] text-xs uppercase' }, 'Remove')
            ),
            React.createElement('input', { type: 'file', accept: '.png,.jpg,.jpeg,.pdf,.docx', onChange: handleFileUpload, className: 'hidden', id: 'file-upload' }),
            React.createElement('label', { htmlFor: 'file-upload' },
              React.createElement('button', { onClick: () => document.getElementById('file-upload').click(), className: '[font-family:\'Geist_Mono\',monospace] font-normal text-center align-baseline uppercase rounded-full bg-[#f049cf] text-black text-sm leading-5 tracking-normal h-11 w-full' }, 'EXTRACT & TRANSLATE')
            )
          ),
          React.createElement('div', { className: 'rounded-[28px] bg-black border-[#f049cf] border-2 border-solid flex p-5 flex-col gap-3' },
            React.createElement('div', { className: 'flex flex-row justify-between items-start gap-2' },
              React.createElement('div', { className: 'flex flex-col gap-1' },
                React.createElement('div', { className: '[font-family:\'Geist_Mono\',monospace] uppercase text-[#f6dfdd] text-lg leading-6' }, 'RECORD YOUR VOICE')
              )
            ),
            React.createElement('div', { className: 'rounded-[22px] bg-black border-[#f049cf] border-2 border-solid flex p-6 flex-col justify-center items-center gap-2' },
              React.createElement('button', { onClick: () => setShowRecordingModal(true), className: 'size-14 rounded-full bg-black border-[#f049cf] border-2 border-solid flex justify-center items-center' },
                React.createElement('svg', { className: 'size-6 text-[#ffa06b]', fill: 'currentColor', viewBox: '0 0 24 24' },
                  React.createElement('path', { d: 'M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z' }),
                  React.createElement('path', { d: 'M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z' })
                )
              ),
              React.createElement('div', { className: '[font-family:\'Geist_Mono\',monospace] text-center lowercase text-[#b8a8a7] text-xs leading-4' }, 'tap to record or upload audio')
            ),
            React.createElement('button', { onClick: () => setShowRecordingModal(true), className: '[font-family:\'Geist_Mono\',monospace] font-normal text-center align-baseline uppercase rounded-full bg-[#f049cf] text-black text-sm leading-5 tracking-normal h-11' }, 'TRANSLATE')
          )
        )
      )
    ),
    showTypingModal && React.createElement('div', { className: 'fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4' },
      React.createElement('div', { className: 'rounded-[28px] bg-black border-[#f049cf] border-2 border-solid p-5 flex flex-col gap-3 max-w-sm w-full' },
        React.createElement('div', { className: 'flex justify-between items-center' },
          React.createElement('div', { className: '[font-family:\'Geist_Mono\',monospace] uppercase text-[#f6dfdd] text-lg leading-6' }, 'TYPE IT OUT'),
          React.createElement('div', { className: 'shrink-0 rounded-full bg-black border-[#ffa06b] border-2 border-solid flex px-3 py-2 items-center gap-1.5 h-9.5' },
            React.createElement('div', { className: '[font-family:\'Geist_Mono\',monospace] uppercase text-[#f6dfdd] text-[13px]' }, 'HIN'),
            React.createElement('svg', { className: 'size-3 text-[#ffa06b]', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
              React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' })
            ),
            React.createElement('div', { className: '[font-family:\'Geist_Mono\',monospace] uppercase text-[#f6dfdd] text-[13px]' }, 'ENG')
          )
        ),
        React.createElement('textarea', { placeholder: '', className: '[font-family:\'Geist_Mono\',monospace] min-h-[112px] resize-none outline-none lowercase rounded-[18px] bg-black text-[#f6dfdd] text-lg leading-6 border-[#f049cf] border-2 border-solid p-4 w-full', defaultValue: 'वो एहसास जब कोई पुरानी जगह देखकर यादें ताज़ा हो जाएं।' }),
        React.createElement('button', { onClick: () => setShowTypingModal(false), className: '[font-family:\'Geist_Mono\',monospace] font-normal text-center align-baseline uppercase rounded-full bg-[#f049cf] text-black text-sm leading-5 tracking-normal h-11' }, 'TRANSLATE')
      )
    ),
    showRecordingModal && React.createElement('div', { className: 'fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4' },
      React.createElement('div', { className: 'rounded-[28px] bg-black border-[#f049cf] border-2 border-solid p-5 flex flex-col gap-3 max-w-sm w-full' },
        React.createElement('div', { className: 'flex justify-between items-center' },
          React.createElement('div', { className: '[font-family:\'Geist_Mono\',monospace] uppercase text-[#f6dfdd] text-lg leading-6' }, 'RECORD YOUR VOICE'),
          React.createElement('div', { className: 'shrink-0 rounded-full bg-black border-[#ffa06b] border-2 border-solid flex px-3 py-2 items-center gap-1.5 h-9.5' },
            React.createElement('div', { className: '[font-family:\'Geist_Mono\',monospace] uppercase text-[#f6dfdd] text-[13px]' }, 'HIN'),
            React.createElement('svg', { className: 'size-3 text-[#ffa06b]', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' },
              React.createElement('path', { strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2, d: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' })
            ),
            React.createElement('div', { className: '[font-family:\'Geist_Mono\',monospace] uppercase text-[#f6dfdd] text-[13px]' }, 'ENG')
          )
        ),
        React.createElement('div', { className: 'rounded-[22px] bg-black border-[#f049cf] border-2 border-solid p-4' },
          React.createElement('div', { className: 'flex items-center gap-3' },
            React.createElement('div', { className: 'size-10 shrink-0 rounded-full bg-black border-[#f049cf] border-2 border-solid flex justify-center items-center' },
              React.createElement('svg', { className: 'size-4 fill-[#f049cf] text-[#f049cf]', fill: 'currentColor', viewBox: '0 0 24 24' },
                React.createElement('path', { d: 'M8 5v14l11-7z' })
              )
            ),
            React.createElement('div', { className: 'flex justify-center items-center flex-1 gap-[3px] h-8' },
              React.createElement('div', { className: 'rounded-full bg-[#f049cf]/70 w-[3px] h-4' }),
              React.createElement('div', { className: 'rounded-full bg-[#f049cf]/70 w-[3px] h-3' }),
              React.createElement('div', { className: 'rounded-full bg-[#f049cf]/70 w-[3px] h-6' }),
              React.createElement('div', { className: 'rounded-full bg-[#f049cf]/70 w-[3px] h-5' }),
              React.createElement('div', { className: 'rounded-full bg-[#f049cf]/70 w-[3px] h-2' }),
              React.createElement('div', { className: 'rounded-full bg-[#f049cf]/70 w-[3px] h-7' }),
              React.createElement('div', { className: 'rounded-full bg-[#f049cf]/70 w-[3px] h-4' }),
              React.createElement('div', { className: 'rounded-full bg-[#f049cf]/70 w-[3px] h-3' }),
              React.createElement('div', { className: 'rounded-full bg-[#f049cf]/70 w-[3px] h-5' }),
              React.createElement('div', { className: 'rounded-full bg-[#f049cf]/70 w-[3px] h-2' })
            ),
            React.createElement('div', { className: '[font-family:\'Geist_Mono\',monospace] shrink-0 text-[#f6dfdd] text-sm leading-5' }, '0:12')
          )
        ),
        React.createElement('button', { onClick: () => setShowRecordingModal(false), className: '[font-family:\'Geist_Mono\',monospace] font-normal text-center align-baseline uppercase rounded-full bg-[#f049cf] text-black text-sm leading-5 tracking-normal h-11' }, 'TRANSLATE'),
        React.createElement('button', { onClick: () => setShowRecordingModal(false), className: '[font-family:\'Geist_Mono\',monospace] font-normal text-center align-baseline uppercase rounded-full bg-transparent text-[#f6dfdd] text-sm leading-5 tracking-normal h-11 border-[#f049cf] border-2 border-solid' }, 'CHANGE LANGUAGE')
      )
    )
  );
}

// Settings Pages
function LanguageSettings() {
  return React.createElement('div', { className: 'p-6 flex flex-col gap-6' },
    React.createElement('h2', { className: '[font-family:\'Geist_Mono\',monospace] font-bold uppercase text-[#864af1] text-2xl' }, 'LANGUAGE SETTINGS'),
    React.createElement('p', { className: '[font-family:\'Geist_Mono\',monospace] lowercase text-white text-sm' }, 'Choose your preferred language for the app interface.')
  );
}

function WidgetsSettings() {
  return React.createElement('div', { className: 'p-6 flex flex-col gap-6' },
    React.createElement('h2', { className: '[font-family:\'Geist_Mono\',monospace] font-bold uppercase text-[#864af1] text-2xl' }, 'WIDGETS'),
    React.createElement('div', { className: 'flex flex-col gap-4' },
      React.createElement('div', { className: 'rounded-[18px] bg-black border-[#f049cf] border-2 border-solid p-4' },
        React.createElement('div', { className: '[font-family:\'Geist_Mono\',monospace] uppercase text-[#f6dfdd] text-sm' }, '1. RECORD & TRANSLATE'),
        React.createElement('p', { className: '[font-family:\'Geist_Mono\',monospace] lowercase text-[#b8a8a7] text-xs mt-2' }, 'Quick access to voice recording and translation')
      ),
      React.createElement('div', { className: 'rounded-[18px] bg-black border-[#f049cf] border-2 border-solid p-4' },
        React.createElement('div', { className: '[font-family:\'Geist_Mono\',monospace] uppercase text-[#f6dfdd] text-sm' }, '2. SEARCH THE WORD'),
        React.createElement('p', { className: '[font-family:\'Geist_Mono\',monospace] lowercase text-[#b8a8a7] text-xs mt-2' }, 'Quick access to word search')
      )
    )
  );
}

function DataSettings() {
  return React.createElement('div', { className: 'p-6 flex flex-col gap-6' },
    React.createElement('h2', { className: '[font-family:\'Geist_Mono\',monospace] font-bold uppercase text-[#864af1] text-2xl' }, 'DATA SETTINGS'),
    React.createElement('p', { className: '[font-family:\'Geist_Mono\',monospace] lowercase text-white text-sm' }, 'Manage your data and privacy settings.')
  );
}

// Main App Component
function App() {
  const [currentScreen, setCurrentScreen] = useState('front');
  const [showSettings, setShowSettings] = useState(false);
  const [settingsPage, setSettingsPage] = useState(null);
  const [savedWords, setSavedWords] = useState([
    { id: 1, word: 'serendipity', type: 'noun', definition: 'a happy accident, the pleasant surprise of stumbling onto something good you weren\'t looking for.' }
  ]);
  const [suggestions] = useState([
    { id: 1, word: 'nostalgia', type: 'noun', definition: 'a sentimental longing for the past, triggered by a familiar place or memory.', match: '96%', saved: false },
    { id: 2, word: 'reminiscence', type: 'noun', definition: 'the act of recalling past experiences, often with warmth and fondness.', match: '88%', saved: false },
    { id: 3, word: 'word drift', type: 'noun', definition: 'a near-match for a word that sits just beyond recall, waiting to be recovered.', match: '81%', saved: false }
  ]);

  const handleSaveWord = (wordData) => {
    const word = suggestions.find(s => s.id === wordData);
    if (word) {
      setSavedWords([...savedWords, { id: wordData, word: word.word, type: word.type, definition: word.definition }]);
    }
  };

  const renderScreen = () => {
    if (showSettings) {
      if (settingsPage === 'language') return React.createElement(LanguageSettings);
      if (settingsPage === 'widgets') return React.createElement(WidgetsSettings);
      if (settingsPage === 'data') return React.createElement(DataSettings);
    }

    switch(currentScreen) {
      case 'front': return React.createElement(FrontPage, { onNavigate: setCurrentScreen });
      case 'search': return React.createElement(SearchScreen, { onNavigate: setCurrentScreen, showSettings, setShowSettings });
      case 'results': return React.createElement(ResultsScreen, { onNavigate: setCurrentScreen, showSettings, setShowSettings, onSaveWord: handleSaveWord });
      case 'saved': return React.createElement(SavedScreen, { onNavigate: setCurrentScreen, showSettings, setShowSettings, savedWords, setSavedWords });
      case 'recent': return React.createElement(RecentScreen, { onNavigate: setCurrentScreen, showSettings, setShowSettings });
      case 'translator': return React.createElement(TranslatorScreen, { onNavigate: setCurrentScreen, showSettings, setShowSettings });
      default: return React.createElement(FrontPage, { onNavigate: setCurrentScreen });
    }
  };

  return React.createElement('div', { className: 'min-h-screen bg-black text-[#f6dfdd] flex flex-col relative' },
    currentScreen !== 'front' && React.createElement(Header, { onSettingsToggle: () => { setShowSettings(!showSettings); setSettingsPage(null); } }),
    React.createElement('div', { className: 'flex-1 overflow-y-auto pb-20' + (currentScreen !== 'front' ? ' pt-16' : '') }, renderScreen()),
    currentScreen !== 'front' && !showSettings && React.createElement(Footer, { currentScreen, onNavigate: setCurrentScreen }),
    showSettings && React.createElement('div', { className: 'fixed inset-0 z-40 bg-black/60', onClick: () => { setShowSettings(false); setSettingsPage(null); } },
      React.createElement('div', { className: 'absolute right-4 top-20 flex flex-col gap-6' },
        React.createElement('div', { onClick: () => setSettingsPage('language'), className: 'shadow-[0_0_20px_4px_rgba(134,74,241,0.7)] rounded-full bg-[#864af1] flex px-4 py-3 justify-center items-center cursor-pointer' },
          React.createElement('span', { className: '[font-family:\'Geist_Mono\',monospace] whitespace-nowrap uppercase text-white text-[11px] leading-4 tracking-wide' }, 'Language')
        ),
        React.createElement('div', { onClick: () => setSettingsPage('widgets'), className: 'shadow-[0_0_20px_4px_rgba(134,74,241,0.7)] rounded-full bg-[#864af1] flex px-4 py-3 justify-center items-center cursor-pointer' },
          React.createElement('span', { className: '[font-family:\'Geist_Mono\',monospace] whitespace-nowrap uppercase text-white text-[11px] leading-4 tracking-wide' }, 'Widgets')
        ),
        React.createElement('div', { onClick: () => setSettingsPage('data'), className: 'shadow-[0_0_20px_4px_rgba(134,74,241,0.7)] rounded-full bg-[#864af1] flex px-4 py-3 justify-center items-center cursor-pointer' },
          React.createElement('span', { className: '[font-family:\'Geist_Mono\',monospace] whitespace-nowrap uppercase text-white text-[11px] leading-4 tracking-wide' }, 'Data Settings')
        )
      )
    )
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));