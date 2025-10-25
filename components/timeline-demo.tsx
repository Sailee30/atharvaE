import { Timeline } from "@/components/ui/timeline"

export default function TimelineDemo() {
  const data = [
    {
      title: "Sep 2024",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-white-800 md:text-sm dark:text-neutral-200">
            Company founded & first bid won
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-white-700 md:text-sm dark:text-neutral-300">
              ✅ Company founded with core team
            </div>
            <div className="flex items-center gap-2 text-xs text-white-700 md:text-sm dark:text-neutral-300">
              ✅ Set up core team and initial project processes (scoping, sprint planning, client onboarding).
            </div>
            <div className="flex items-center gap-2 text-xs text-white-700 md:text-sm dark:text-neutral-300">
              ✅ Laid down product & delivery standards that shaped future work.nched
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
          </div>
        </div>
      ),
    },
    {
      title: "Dec 2024",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-white-800 md:text-sm dark:text-neutral-200">
          Aurenium capital (SaaS) onboarding + Dr. Rajendra Shinde websites
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-white-700 md:text-sm dark:text-neutral-300">
              ✅ Began work on Aurenium capital (SaaS product; Dubai-based startup) on 24 Dec 2024 — UI/UX + core front-end.
            </div>
            <div className="flex items-center gap-2 text-xs text-white-700 md:text-sm dark:text-neutral-300">
              ✅ Delivered 2–3 websites for Dr. Rajendra Shinde during this phase.
            </div>
            <div className="flex items-center gap-2 text-xs text-white-700 md:text-sm dark:text-neutral-300">
              ✅ Two months later we began managing Dr. Rajendra Sandhu’s social media (content plan + posting cadence).
            </div>
            
          </div>
          <div className="grid grid-cols-2 gap-4">
          </div>
        </div>
      ),
    },
    {
      title: "Feb 2025",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-white-800 md:text-sm dark:text-neutral-200">
            Laundry-system startup: full application build
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-white-700 md:text-sm dark:text-neutral-300">
              ✅Built a complete application for a laundry-tech startup (end-to-end product: user flows, admin panel, and integrations).
            </div>
            <div className="flex items-center gap-2 text-xs text-white-700 md:text-sm dark:text-neutral-300">
              ✅ Client reported strong satisfaction with UX and operational efficiencies gained.
            </div>
            <div className="flex items-center gap-2 text-xs text-white-700 md:text-sm dark:text-neutral-300">
              ✅ This project cemented our capability to deliver full-stack product solutions.
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
          </div>
        </div>
      ),
    },
    {
      title: "Mar 2025",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-white-800 md:text-sm dark:text-neutral-200">
           Marketing team formed & scale-up of marketing services
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-white-700 md:text-sm dark:text-neutral-300">
              ✅ Launched a dedicated marketing unit (5–6 people) to serve growing demand.
            </div>
            <div className="flex items-center gap-2 text-xs text-white-700 md:text-sm dark:text-neutral-300">
              ✅ From March onward we started marketing for ~33 companies, running campaigns, social presence, and growth strategies.
            </div>
            <div className="flex items-center gap-2 text-xs text-white-700 md:text-sm dark:text-neutral-300">
              ✅ Introduced standardized onboarding for marketing clients and reporting dashboards.
            </div>
            
          </div>
          <div className="grid grid-cols-2 gap-4">
          </div>
        </div>
      ),
    },
    {
      title: "Jun 2025",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-white-800 md:text-sm dark:text-neutral-200">
            UKAY Aerodynamics (large international project)
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-white-700 md:text-sm dark:text-neutral-300">
              ✅ Won and delivered a flagship project for UK Aerodynamics — website + global marketing for advanced helicopter/delivery drones.
            </div>
            <div className="flex items-center gap-2 text-xs text-white-700 md:text-sm dark:text-neutral-300">
              ✅ Collaborated with international engineers and stakeholders; created product pages and campaign assets for a European audience.
            </div>
            <div className="flex items-center gap-2 text-xs text-white-700 md:text-sm dark:text-neutral-300">
              ✅ This engagement opened further international business channels and credibility in aerospace/defense-adjacent clients.
            </div>
            
          </div>
          <div className="grid grid-cols-2 gap-4">
          </div>
        </div>
      ),
    },
    {
      title: "Jul 2025",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-white-800 md:text-sm dark:text-neutral-200">
           Europe visit & Bulgaria medical client (international expansion)
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-white-700 md:text-sm dark:text-neutral-300">
              ✅ Business trip to Europe: met partners and onboarded a Bulgaria-based medical device client.
            </div>
            <div className="flex items-center gap-2 text-xs text-white-700 md:text-sm dark:text-neutral-300">
              ✅ Worked on medical / surgical product sites and explored ultrasound-effects product marketing and regulatory considerations.
            </div>
            <div className="flex items-center gap-2 text-xs text-white-700 md:text-sm dark:text-neutral-300">
              ✅ Expanded international portfolio and gained domain knowledge in medical device marketing and compliance.
            </div>
            
          </div>
          <div className="grid grid-cols-2 gap-4">
          </div>
        </div>
      ),
    },
    
  ]
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  )
}
