import { aboutInfo } from '../data/about'
import { skillGroups } from '../data/skills'
import { projects as summaryProjects } from '../data/projects'
import { limsAchievements, limsOverview } from '../data/lims'
import { hanaAchievements, hanaOverview } from '../data/hana'
import { blogAchievements, blogFeatures, blogOverview } from '../data/blog'
import type { Achievement } from '../data/types'

// ─── Components ───────────────────────────────────────────────────────────
function AchievementDetailSlide({
  projectName,
  item,
  bg,
}: {
  projectName: string
  item: Achievement
  bg: "black" | "zinc-950"
}) {
  return (
    <div
      className={`slide flex flex-col px-16 py-10 ${bg === "black" ? "bg-black" : "bg-zinc-950"}`}
    >
      {/* Header */}
      <div className="flex items-start gap-3 mb-5 shrink-0">
        <span className="text-3xl font-bold text-indigo-500/30 font-mono leading-tight shrink-0">
          {item.number}
        </span>
        <div>
          <p className="text-indigo-400 text-[10px] font-mono mb-0.5">{projectName}</p>
          <h3 className="text-white text-base font-bold leading-snug">{item.title}</h3>
        </div>
      </div>

      {/* Body */}
      <div className="grid grid-cols-[44%_56%] gap-4 flex-1 min-h-0">
        {/* Left: Problem + Root + Result */}
        <div className="flex flex-col gap-3">
          <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-3">
            <p className="text-red-400 text-[9px] font-mono uppercase tracking-wider mb-2">Problem</p>
            <div className="space-y-1.5">
              {item.problem.map((p, i) => (
                <p key={i} className="text-zinc-300 text-[11px] leading-5">{p}</p>
              ))}
            </div>
          </div>

          {item.root && (
            <div className="bg-orange-500/5 border border-orange-500/20 rounded-lg p-3">
              <p className="text-orange-400 text-[9px] font-mono uppercase tracking-wider mb-2">Root Cause</p>
              <div className="space-y-1.5">
                {item.root.map((r, i) => (
                  <p key={i} className="text-zinc-300 text-[11px] leading-5">{r}</p>
                ))}
              </div>
            </div>
          )}

          <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-3">
            <p className="text-green-400 text-[9px] font-mono uppercase tracking-wider mb-2">Result</p>
            <div className="space-y-1.5">
              {item.result.map((r, i) => (
                <p key={i} className="text-zinc-300 text-[11px] leading-5">{r}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Approach + Metrics */}
        <div className="flex flex-col gap-3">
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-3">
            <p className="text-yellow-400 text-[9px] font-mono uppercase tracking-wider mb-2">Approach</p>
            <ul className="space-y-2">
              {item.approach.map((step, i) => (
                <li key={i} className="text-zinc-400 text-[11px] flex gap-2 leading-5">
                  <span className="text-yellow-500/60 shrink-0 font-mono text-[10px] mt-0.5">
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  {step}
                </li>
              ))}
            </ul>
          </div>

          {item.metrics && (
            <div className="grid grid-cols-3 gap-2">
              {item.metrics.map((m) => (
                <div key={m.label} className="bg-zinc-900 border border-zinc-800 rounded-lg p-3 text-center">
                  <p className="text-zinc-500 text-[9px] mb-2">{m.label}</p>
                  <p className="text-zinc-600 text-[9px] line-through mb-1">{m.before}</p>
                  <p className="text-white text-sm font-semibold mb-1">{m.after}</p>
                  <p className="text-indigo-400 text-[9px] font-mono">{m.highlight}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Tags */}
      <div className="flex items-center justify-between mt-3 shrink-0">
        <div className="flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 bg-zinc-800 text-zinc-400 text-[10px] rounded-full font-mono">
              {tag}
            </span>
          ))}
        </div>
        {item.github && (
          <span className="text-indigo-400 text-[10px] font-mono shrink-0">GitHub ↗</span>
        )}
      </div>
    </div>
  )
}

// ─── Main Page ─────────────────────────────────────────────────────────────
export default function PDFPage() {
  return (
    <div className="pdf-preview">
      {/* ── SLIDE 1: Cover ── */}
      <div className="slide bg-black flex flex-col justify-center px-20">
        <p className="text-indigo-400 text-sm font-mono mb-5">// BACKEND DEVELOPER</p>
        <h1 className="text-8xl font-bold text-white tracking-tight mb-6">조건희</h1>
        <div className="w-20 h-0.5 bg-indigo-500 mb-8" />
        <p className="text-zinc-400 text-lg leading-relaxed mb-12 max-w-lg">
          사용자 경험을 고민하며 확장 가능한 서비스를 만드는 것을 좋아합니다.
          <br />
          문제의 원인을 깊이 파고들고 구조적으로 해결하는 백엔드 개발자입니다.
        </p>
        <div className="flex items-center gap-6 text-sm font-mono text-zinc-500">
          {aboutInfo.map((item, i) => (
            <>
              {i > 0 && <span key={`sep-${i}`} className="text-zinc-700">|</span>}
              <span key={item.label}>{item.value}</span>
            </>
          ))}
        </div>
      </div>

      {/* ── SLIDE 2: About ── */}
      <div className="slide bg-zinc-950 flex flex-col justify-center px-20 py-16">
        <p className="text-indigo-400 text-sm font-mono mb-2">01. About Me</p>
        <h2 className="text-3xl font-bold text-white mb-10">소개</h2>
        <div className="grid grid-cols-2 gap-16 items-start">
          <div className="space-y-5 text-zinc-400 leading-7 text-sm">
            <p>안녕하세요! 문제의 원인을 깊이 파고들고 구조적으로 해결하는 것을 좋아하는 백엔드 개발자입니다.</p>
            <p>현재 개인 블로그 프로젝트를 통해 조회수 처리, 알림 시스템, 검색 성능 개선 등을 구현하며 단순한 기능 구현을 넘어 실제 서비스 환경에서 발생할 수 있는 성능 문제와 설계 문제를 해결하는 경험을 쌓고 있습니다.</p>
            <p>최근에는 바이브 코딩에 깊은 관심을 가지고, 주 2회 스터디를 통해 AI 도구를 활용한 개발 방식을 꾸준히 탐구하고 있습니다.</p>
          </div>
          <div className="space-y-4">
            {aboutInfo.map((item) => (
              <div key={item.label} className="flex gap-4 text-sm border-b border-zinc-800 pb-4">
                <span className="text-zinc-500 w-16 shrink-0">{item.label}</span>
                <span className="text-zinc-300">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SLIDE 3: Skills ── */}
      <div className="slide bg-black flex flex-col justify-center px-20 py-16">
        <p className="text-indigo-400 text-sm font-mono mb-2">02. Skills</p>
        <h2 className="text-3xl font-bold text-white mb-10">기술 스택</h2>
        <div className="grid grid-cols-3 gap-5">
          {skillGroups.map((group) => (
            <div key={group.category} className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
              <h3 className="text-white text-sm font-semibold mb-3">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="px-2.5 py-1 bg-zinc-800 text-zinc-300 text-xs rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── SLIDES 4–6: Project Summaries ── */}
      {summaryProjects.map((project, i) => (
        <div
          key={project.title}
          className={`slide flex flex-col justify-center px-20 py-16 ${i % 2 === 0 ? "bg-zinc-950" : "bg-black"}`}
        >
          <div className="flex items-center gap-3 mb-2">
            <p className="text-indigo-400 text-sm font-mono">03. Projects · 0{i + 1}/03</p>
            <span className="text-xs font-mono text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded-full">
              {project.tag}
            </span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">{project.title}</h2>
          <p className="text-zinc-400 text-sm leading-7 mb-8">{project.description}</p>
          <div className="grid grid-cols-2 gap-12">
            <div>
              <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest mb-4">주요 성과</p>
              <ul className="space-y-3">
                {project.highlights.map((h) => (
                  <li key={h} className="text-zinc-300 text-sm flex gap-2 leading-6">
                    <span className="text-indigo-400 shrink-0 mt-0.5">▸</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest mb-4">기술 스택</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 bg-indigo-500/10 text-indigo-300 text-xs rounded-full font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* ── SLIDE 7: Deep Dive Divider ── */}
      <div className="slide bg-black flex flex-col items-center justify-center px-20">
        <p className="text-indigo-400 text-sm font-mono mb-6">// DEEP DIVE</p>
        <h2 className="text-6xl font-bold text-white tracking-tight mb-6">프로젝트 상세</h2>
        <div className="w-16 h-0.5 bg-indigo-500 mb-8" />
        <p className="text-zinc-500 text-lg text-center max-w-lg leading-relaxed">
          각 프로젝트에서 발견하고 해결한<br />기술적 문제들을 담은 심층 문서입니다.
        </p>
        <div className="mt-12 flex gap-8 text-sm font-mono text-zinc-600">
          <span>국제약품 LIMS · 성과 3건</span>
          <span className="text-zinc-800">|</span>
          <span>하나제약 LIMS · 성과 2건</span>
          <span className="text-zinc-800">|</span>
          <span>개인 블로그 플랫폼 · 성과 5건</span>
        </div>
      </div>

      {/* ── SLIDE 8: 국제약품 LIMS Overview ── */}
      <div className="slide bg-zinc-950 flex flex-col justify-center px-20 py-14">
        <p className="text-indigo-400 text-sm font-mono mb-2">{limsOverview.tag} — 상세</p>
        <h2 className="text-3xl font-bold text-white mb-6">국제약품 LIMS</h2>
        <div className="grid grid-cols-2 gap-12">
          <div>
            <p className="text-zinc-400 text-sm leading-7 mb-3">{limsOverview.description1}</p>
            <p className="text-zinc-500 text-sm leading-7 mb-6">{limsOverview.description2}</p>
            <div className="flex flex-wrap gap-2">
              {limsOverview.tech.map((t) => (
                <span key={t} className="px-2.5 py-1 bg-indigo-500/10 text-indigo-300 text-xs rounded-full font-mono">{t}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest mb-4">담당 역할</p>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-3">
              <p className="text-zinc-300 text-sm leading-7">{limsOverview.role1}</p>
              <p className="text-zinc-400 text-sm leading-7">{limsOverview.role2}</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── SLIDES 9–11: 국제약품 LIMS Achievements ── */}
      {limsAchievements.map((item, i) => (
        <AchievementDetailSlide
          key={item.number}
          projectName="국제약품 LIMS"
          item={item}
          bg={i % 2 === 0 ? "black" : "zinc-950"}
        />
      ))}

      {/* ── SLIDE 12: 하나제약 LIMS Overview ── */}
      <div className="slide bg-black flex flex-col justify-center px-20 py-14">
        <p className="text-indigo-400 text-sm font-mono mb-2">{hanaOverview.tag} — 상세</p>
        <h2 className="text-3xl font-bold text-white mb-6">하나제약 LIMS</h2>
        <div className="grid grid-cols-2 gap-12">
          <div>
            <p className="text-zinc-400 text-sm leading-7 mb-3">{hanaOverview.description1}</p>
            <p className="text-zinc-500 text-sm leading-7 mb-6">{hanaOverview.description2}</p>
            <div className="flex flex-wrap gap-2">
              {hanaOverview.tech.map((t) => (
                <span key={t} className="px-2.5 py-1 bg-indigo-500/10 text-indigo-300 text-xs rounded-full font-mono">{t}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest mb-4">담당 역할</p>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-3">
              <p className="text-zinc-300 text-sm leading-7">{hanaOverview.role1}</p>
              <p className="text-zinc-400 text-sm leading-7">{hanaOverview.role2}</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── SLIDES 13–14: 하나제약 LIMS Achievements ── */}
      {hanaAchievements.map((item, i) => (
        <AchievementDetailSlide
          key={item.number}
          projectName="하나제약 LIMS"
          item={item}
          bg={i % 2 === 0 ? "zinc-950" : "black"}
        />
      ))}

      {/* ── SLIDE 15: 개인 블로그 플랫폼 Overview ── */}
      <div className="slide bg-zinc-950 flex flex-col justify-center px-20 py-14">
        <p className="text-indigo-400 text-sm font-mono mb-2">{blogOverview.tag} — 상세</p>
        <h2 className="text-3xl font-bold text-white mb-6">개인 블로그 플랫폼</h2>
        <div className="grid grid-cols-2 gap-12">
          <div>
            <p className="text-zinc-400 text-sm leading-7 mb-2">{blogOverview.description1}</p>
            <p className="text-zinc-400 text-sm leading-7 mb-2">{blogOverview.description2}</p>
            <p className="text-zinc-500 text-sm leading-7 mb-6">{blogOverview.description3}</p>
            <div className="flex flex-wrap gap-2">
              {blogOverview.tech.map((t) => (
                <span key={t} className="px-2.5 py-1 bg-indigo-500/10 text-indigo-300 text-xs rounded-full font-mono">{t}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest mb-4">주요 기능</p>
            <div className="grid grid-cols-1 gap-2">
              {blogFeatures.map((f) => (
                <div key={f} className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2.5">
                  <span className="text-indigo-400 shrink-0 text-xs">▸</span>
                  <span className="text-zinc-300 text-xs">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── SLIDES 16–20: 개인 블로그 플랫폼 Achievements ── */}
      {blogAchievements.map((item, i) => (
        <AchievementDetailSlide
          key={item.number}
          projectName="개인 블로그 플랫폼"
          item={item}
          bg={i % 2 === 0 ? "black" : "zinc-950"}
        />
      ))}
    </div>
  )
}
