import Image from 'next/image';

interface TestimonialCardProps {
  picture?: string;
  name: string;
  company: string;
  text: string;
}

export default function TestimonialCard({ picture, name, company, text }: TestimonialCardProps) {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="bg-white/5 border border-white/10 p-6 rounded-lg flex flex-col hover:border-[#00FFAB]/30 transition-all min-h-[280px]">
      <p className="text-white/80 mb-6 flex-grow text-sm leading-relaxed line-clamp-6">"{text}"</p>
      <div className="flex items-center gap-4 mt-auto">
        {picture ? (
          <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-[#00FFAB]/30 flex-shrink-0">
            <Image src={picture} alt={name} fill className="object-cover" />
          </div>
        ) : (
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#00FFAB] to-[#00e69a] flex items-center justify-center text-black font-bold shadow-lg flex-shrink-0">
            {getInitials(name)}
          </div>
        )}
        <div className="min-w-0">
          <p className="font-semibold text-white truncate">{name}</p>
          <p className="text-sm text-[#00FFAB] truncate">{company}</p>
        </div>
      </div>
    </div>
  );
}
