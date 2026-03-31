const ITEMS = [
  'Web Design & Development',
  'SaaS Products',
  'AI Agents',
  'Growth Strategy',
  'Brand Identity',
  'Marketing Automation',
  'Conversion Funnels',
  'Paid Advertising',
];

export default function Marquee() {
  /* Double the items so the loop is seamless */
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="py-4 border-y border-[#F0EDE8]/[0.05] overflow-hidden bg-[#0A0A0A]">
      <div className="marquee-track flex gap-14 whitespace-nowrap w-max">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 text-[#F0EDE8]/28 text-[11px] font-medium uppercase tracking-[0.2em] flex-shrink-0"
          >
            <span className="w-[5px] h-[5px] rounded-full bg-[#E8FF47] opacity-55 flex-shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}