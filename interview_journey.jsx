import { useState } from "react";

export default function InterviewJourneyPage() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    { id: 1, title: "Step 1", label: "測驗 / 問卷填寫", hash: "#step-1" },
    { id: 2, title: "Step 2", label: "視訊 / 現場面試", hash: "#step-2" },
    { id: 3, title: "Step 3", label: "結果通知", hash: "#step-3" },
  ];

  const progressWidth = `${((activeStep - 1) / (steps.length - 1)) * 100}%`;

  const goStep = (id: number) => {
    setActiveStep(id);
    const el = document.querySelector(`#step-${id}`);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const ClockIcon = ({ className = "" }: { className?: string }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 7v6l4 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className="min-h-screen text-[#191919] bg-[linear-gradient(180deg,#ffffff_0%,#ffffff_70%,#FDF1F2_100%)]">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-white/85 backdrop-blur-md text-[#191919] shadow-[0_0_18px_#FFDFDF]">
        <div className="mx-auto max-w-5xl px-6 h-12 flex items-center">
          <div className="font-extrabold tracking-tight text-lg">
            <span className="text-[#e21e28]">CM</span>
            <span className="text-[#191919]">oney 面試旅程</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 pb-10">
        {/* Progress Bar */}
        <div className="sticky top-12 z-10 backdrop-blur-lg bg-white/30 rounded-b-lg">
          <div className="mx-auto max-w-5xl px-6 py-3">
            <div className="grid grid-cols-3 text-center mb-1">
              {steps.map((s) => (
                <button
                  key={s.id}
                  onClick={() => goStep(s.id)}
                  className="flex flex-col items-center"
                >
                  <span
                    className={`text-sm font-semibold ${
                      s.id <= activeStep ? "text-[#e21e28]" : "text-neutral-400"
                    }`}
                  >
                    {s.title}
                  </span>
                  <span className="text-xs text-[#303030]">{s.label}</span>
                </button>
              ))}
            </div>

            <div className="relative h-[3px] mx-6 mt-1 rounded-full bg-[#d9d9d9]">
              <div
                className="absolute left-0 top-0 h-[3px] bg-[#e21e28] rounded-full transition-all duration-500"
                style={{ width: progressWidth }}
              />
            </div>
          </div>
        </div>

        {/* Shared card rendering */}
        {[
          {
            id: "step-1",
            title: "Step 1 測驗 / 問卷填寫",
            desc: (
              <>
                為了讓面試官對您有更詳細的了解，會依據職務不同，進行相對應的專業測驗、問卷。請依據收到的甄試邀請信，
                <span className="text-[#e21e28]">在面試前一天完成填寫各測驗或問卷</span>
                。
              </>
            ),
            cards: [
              {
                title: "邏輯推理測驗",
                time: "限時40min",
                desc: "此測驗能反映您解決、分析問題的能力。",
              },
              {
                title: "行為事例說明",
                time: "不限時",
                desc: "開放式問答，請跟我們分享您過去的工作／生活經歷，並提供一位推薦人。確認錄取前，會寄出照會信，參考推薦人的回饋。",
              },
              {
                title: "招募體驗問卷",
                time: "不限時",
                desc: "非必填，我們期待了解您如何認識 CMoney，以及哪些訊息或管道最能吸引您。答案僅作內部分析，不會影響您的面試結果。",
              },
            ],
          },
          {
            id: "step-2",
            title: "Step 2 視訊 / 現場面試",
            desc: "依據職務不同，與團隊進行相對應階段的視訊或現場面試，透過交流對焦彼此合作的期待。（部分特定職務會於職能關前後加入前測、聊聊關卡）",
            cards: [
              {
                title: "職能面試",
                time: "60–120 min",
                desc: "評估是否具備職務所需的專業技能與能力。",
              },
              {
                title: "價值觀面試",
                time: "60 min",
                desc: "評估您與公司核心價值觀的契合度與動機。",
              },
              {
                title: "邏輯面試",
                time: "90–120 min",
                desc: "檢視邏輯思維、問題拆解與決策判斷能力。",
              },
            ],
          },
          {
            id: "step-3",
            title: "Step 3 結果通知",
            desc: (
              <>
                在每次面試後 <span className="text-[#e21e28]">5 個工作天</span> 內，您會收到我們的通知。（若遇到眾多人選參與，將延後面試結果通知時間。）
              </>
            ),
            cards: [],
          },
        ].map((step) => (
          <section key={step.id} id={step.id} className="pt-6 mb-8 md:mb-10 scroll-mt-28">
            <div className="rounded-2xl bg-white/95 shadow-[0_0_16px_#FFDFDF] p-8 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold mb-2 text-[#e21e28]">
                {step.title}
              </h2>
              <p className="text-[#444] leading-snug mb-5">{step.desc}</p>
              <div className="grid gap-6 md:grid-cols-3">
                {step.cards.map((card, i) => (
                  <div key={i} className="rounded-xl bg-[#FFE4E5] p-6 text-left text-[#333]">
                    <div className="flex flex-col leading-tight">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <h3 className="text-[20px] font-semibold text-[#303030] m-0">
                          {card.title}
                        </h3>
                      </div>
                      {card.time && (
                        <p className="font-semibold text-base text-[#e21e28] flex items-center gap-1 -mt-0.5">
                          {card.time.includes("min") && (
                            <ClockIcon className="w-4 h-4 text-[#e21e28]" />
                          )}
                          {card.time}
                        </p>
                      )}
                    </div>
                    <p className="text-sm leading-snug text-[#535353] mt-2">
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        <footer className="pb-10 text-sm text-[#555]">
          若您對流程有任何疑問，請回覆甄試邀請信，我們將盡速協助。
        </footer>
      </div>
    </div>
  );
}
