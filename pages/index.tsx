import React, { useState, useEffect, useRef } from 'react';
import { questionsData, personalitiesMeta } from '../data/data-set';
import { Bounce } from 'react-toastify/unstyled';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router';


export type Gender = 'male' | 'female';

export type PersonalityKey = 
  | 'chinaar' 
  | 'gf_kutta' 
  | 'bf_chamchi' 
  | 'saccha_ashiq' 
  | 'overthinker' 
  | 'ghosting_specialist' 
  | 'food_gossip';



export interface PersonalityMeta {
  titleMale: string;
  titleFemale: string;
  desc: string;
}



type Step = 'welcome' | 'quiz' | 'loading' | 'result';

export default function Home() {
  const [step, setStep] = useState<Step>('welcome');
  const [name, setName] = useState<string>('');
  const [gender, setGender] = useState<Gender>('male');
  const [currentQIndex, setCurrentQIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<PersonalityKey[]>([]);
  const [loadingText, setLoadingText] = useState<string>('Analyzing your choices...');
  const [resultData, setResultData] = useState<PersonalityKey | null>(null);
  const router = useRouter()

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const handleSelectOption = (personalityKey: PersonalityKey) => {
    const updatedAnswers = [...answers, personalityKey];
    setAnswers(updatedAnswers);

    const questionsList = questionsData[gender];
    if (currentQIndex + 1 < questionsList.length) {
      setCurrentQIndex(currentQIndex + 1);
    } else {
      calculateResult(updatedAnswers);
    }
  };

  const calculateResult = (finalAnswers: PersonalityKey[]) => {
    setStep('loading');
    const texts = [
      'Kya lagta hai',
      'Ye kya options select kiye ho',
      'Uffff appke answers',
      'Generating your final certificate...'
    ];
    let idx = 0;
    const interval = setInterval(() => {
      idx++;
      if (idx < texts.length) {
        setLoadingText(texts[idx]);
      } else {
        clearInterval(interval);
        
        const counts = finalAnswers.reduce<Record<string, number>>((acc, curr) => {
          acc[curr] = (acc[curr] || 0) + 1;
          return acc;
        }, {});
        
        let dominant = Object.keys(counts).reduce((a, b) => 
          (counts[a] || 0) > (counts[b] || 0) ? a : b, 
          'chinaar'
        ) as PersonalityKey;

        setResultData(dominant);
        setStep('result');
      }
    }, 2000);
  };

  const wrapText = (ctx: CanvasRenderingContext2D, text: string, x: number, y: number, maxWidth: number, lineHeight: number) => {
    const words = text.split(' ');
    let line = '';

    for (let i = 0; i < words.length; i++) {
        const testLine = line + words[i] + ' ';
        const metrics = ctx.measureText(testLine);

        if (metrics.width > maxWidth && i > 0) {
            ctx.fillText(line, x, y);
            line = words[i] + ' ';
            y += lineHeight;
        } else {
            line = testLine;
        }
    }

    ctx.fillText(line, x, y);
}

 useEffect(() => {
    if (step === 'result' && canvasRef.current && resultData) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = 1000;
      canvas.height = 700;

      // Load your custom exported Canva template image
      const bgImage = new Image();
      bgImage.src = `${process.env.NEXT_PUBLIC_HOST_LINK}/public/Certificat.png`; // Path to your Canva exported image in public folder
      
      bgImage.onload = () => {
        // Draw the Canva background image first
        ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);

        // Overlay Player Name dynamically on the exact coordinates of your Canva design
        ctx.fillStyle = '#0f172a'; // Adjust text color to match your design
        ctx.font = 'bold 42px sans-serif';
        ctx.textAlign = 'center';
        const meta = personalitiesMeta[resultData] || personalitiesMeta.chinaar;
        const personalityTitle = gender === 'male' ? meta.titleMale : meta.titleFemale;

        ctx.fillText(personalityTitle.toUpperCase(), canvas.width / 2, 230);

        ctx.fillStyle = '#1d4ed8'; // Adjust highlight color
        ctx.font = 'bold 50px sans-serif';
        ctx.fillText(name.toUpperCase() || "ANONYMOUS PLAYER", canvas.width / 2, 330);

       ctx.fillStyle = '#000000'; // Adjust highlight color
        ctx.font = 'bold 30px Roboto';
        wrapText(ctx, meta.desc, canvas.width / 2, 410, 600, 40);
      };
    }
  }, [step, resultData, name, gender]);

  const downloadCertificate = async () => {
    if (canvasRef.current) {
      const link = document.createElement('a');
      link.download = `${name || 'player'}-personality-certificate.png`;
      link.href = canvasRef.current.toDataURL('image/png');
      link.click();
    }

try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_LINK}/api/upload`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            certificate: canvasRef.current?.toDataURL('image/png'),
           
          }),
        }
      );

      const result = await response.json();

      // API error
      if (!response.ok) {
        toast.error(
          result.message || "Something went wrong"
        );
        return;
      }

      // Success
      if (result.success) {
        toast.success(
          "Your Certificate has been downloaded successfully!"
        );

      
      }
    } catch (error) {
      console.error("Upload error:", error);

      toast.error(
        "Unable to download your certificate. Please try again."
      );
    }


  };

  return (
    <>
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition={Bounce}
/>
      

      <div className="min-h-screen bg-black text-slate-100 flex flex-col items-center justify-center p-4 selection:bg-cyan-500 selection:text-black">
        <header className="mb-6 text-center">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white ">
           PERSONALITY QUIZ
          </h1>
          <p className="text-slate-400 text-sm md:text-base mt-2">
            20 Tricky Questions • Accurate Options • Certificate Reveal
          </p>
        </header>

        <main className="w-full max-w-2xl bg-slate-900/80  border-dashed border-white border-2  rounded-2xl shadow-2xl p-6 md:p-8 backdrop-blur-md">
          {step === 'welcome' && (
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold text-white">Enter Your Details to Begin</h2>
                <p className="text-sm text-slate-400">Choose your gender and enter your name for the certificate.</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-white mb-1 font-semibold">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    value={name} 
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                    placeholder="e.g. John Doe, Jane Smith"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-cyan-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1 font-semibold">
                    Select gender
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button 
                      type="button"
                      onClick={() => setGender('male')}
                      className={`cursor-pointer py-3 rounded-xl border font-semibold transition ${
                        gender === 'male' 
                          ? 'bg-cyan-600/20 border-cyan-500 text-cyan-300 shadow-lg shadow-cyan-900/30' 
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      Male 
                    </button>
                    <button 
                      type="button"
                      onClick={() => setGender('female')}
                      className={`cursor-pointer py-3 rounded-xl border font-semibold transition ${
                        gender === 'female' 
                          ? 'bg-pink-600/20 border-pink-500 text-pink-300 shadow-lg shadow-pink-900/30' 
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      Female 
                    </button>
                  </div>
                </div>

                   <div className="relative w-full h-14">
        {/* Bottom shadow layer */}
        <div
          aria-hidden="true"
          className="absolute inset-0 translate-y-3 rounded-full bg-[#d28108] border-2 border-black"
        />

        {/* Button */}
        <button
         onClick={() => {
                    if (!name.trim()) {
                      toast.error('Enter your Name!');
                      return;
                    }
                    setCurrentQIndex(0);
                    setAnswers([]);
                    setStep('quiz');
                  }}

          className={`
            relative
            w-full h-full
            rounded-full
            border-2 border-black
            bg-linear-to-r from-[hsl(18,100%,60%)] to-[hsl(15,85%,45%)]
            text-lg font-semibold tracking-[0.3px] text-white
            overflow-hidden
            cursor-pointer
            transition-transform duration-100 ease-out
            shadow-[inset_0_-3px_0_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.6)]
            active:translate-y-3

            after:content-['']
            after:absolute
            after:top-[-50%]
            after:left-[-50%]
            after:w-[40%]
            after:h-[200%]
            after:bg-[rgba(255,255,255,0.45)]
            after:skew-x-[-20deg]
            after:translate-x-[-200%]
            after:transition-transform
            after:duration-700
            hover:after:translate-x-[400%]
          `}
        >
          <span className="relative z-10 drop-shadow-[0_1px_0_rgba(255,255,255,0.6)]">
            Start Quiz (20 Questions)
          </span>
        </button>
      </div>



              </div>
            </div>
          )}

         
<div className="w-full max-w-3xl mx-auto px-3 sm:px-5 md:px-6">
  {step === 'quiz' && (
    <div className="w-full min-w-0">
      {/* Progress Header */}
      <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center mb-5 sm:mb-6 border-b border-slate-800 pb-3">
        <span className="text-xs sm:text-sm uppercase tracking-wider text-cyan-400 font-bold">
          Question {currentQIndex + 1} of 20
        </span>

        <span className="text-xs sm:text-sm text-slate-500 font-mono">
          {Math.round(((currentQIndex + 1) / 20) * 100)}% Completed
        </span>
      </div>

      {/* Question */}
      <h2 className="text-base sm:text-lg md:text-xl font-semibold text-slate-100 mb-5 sm:mb-6 leading-relaxed break-words">
        {questionsData[gender][currentQIndex].question}
      </h2>

      {/* Answer Options */}
      <div className="space-y-3">
        {questionsData[gender][currentQIndex].options.map((opt, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => handleSelectOption(opt.personality)}
            className="group flex w-full min-w-0 items-center justify-between gap-3 rounded-xl border border-slate-800 bg-slate-950 px-3 py-3 sm:px-4 sm:py-4 text-left text-slate-200 transition duration-200 hover:bg-green-600 cursor-pointer hover:border-cyan-500/50 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <span className="min-w-0 flex-1 break-words text-sm sm:text-base font-medium leading-relaxed">
              {opt.text}
            </span>

            <span className="shrink-0 text-xs sm:text-sm text-slate-500 group-hover:text-cyan-300 transition font-mono">
              [{String.fromCharCode(65 + idx)}]
            </span>
          </button>
        ))}
      </div>
    </div>
  )}

  {/* Loading Screen */}
  {step === 'loading' && (
    <div className="flex w-full flex-col items-center justify-center px-3 py-10 sm:py-16 text-center space-y-4 sm:space-y-6">
      <div
        role="status"
        aria-label="Loading"
        className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-4 border-cyan-500 border-t-transparent animate-spin"
      />

      <h3 className="text-lg sm:text-xl font-bold text-slate-200 tracking-wide animate-pulse break-words">
        {loadingText}
      </h3>

      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
        Unmasking your hidden traits... Please wait.
      </p>
    </div>
  )}

  {/* Result Screen */}
  {step === 'result' && (
    <div className="w-full min-w-0 space-y-5 sm:space-y-6 text-center">
      {/* Result Heading */}
      <div className="px-1">
        <span className="text-[10px] sm:text-xs uppercase tracking-widest text-pink-400 font-bold">
          Quiz Finished Successfully
        </span>

        <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-black text-slate-100 leading-tight break-words">
          Your True Personality is Revealed!
        </h2>
      </div>

      {/* Certificate Preview */}
      <div className="w-full min-w-0 overflow-hidden rounded-xl border border-slate-800 bg-slate-950 p-2 sm:p-3">
        <canvas
          ref={canvasRef}
          className="block h-auto w-full max-w-full mx-auto rounded shadow-lg"
          style={{ height: 'auto' }}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2">
        <button
          type="button"
          onClick={downloadCertificate}
          className="w-full sm:w-auto min-h-12 rounded-xl bg-cyan-500 px-5 sm:px-6 py-3 text-sm sm:text-base font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          Download Certificate PNG
        </button>

        <button
          type="button"
          onClick={() => setStep('welcome')}
          className="w-full sm:w-auto min-h-12 rounded-xl border border-slate-700 bg-slate-800 px-5 sm:px-6 py-3 text-sm sm:text-base font-semibold text-slate-300 transition hover:bg-slate-700 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        >
          Play Again
        </button>

         <button
          type="button"
          onClick={() => router.push('/othersCertificates')}
          className="w-full sm:w-auto min-h-12 rounded-xl border border-slate-700 bg-slate-800 px-5 sm:px-6 py-3 text-sm sm:text-base font-semibold text-slate-300 transition hover:bg-slate-700 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        >
          Check Other Certificates
        </button>
      </div>
    </div>
  )}
</div>

        </main>

      </div>
    </>
  );
}