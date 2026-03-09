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
    <div className="bg-card-bg dark:bg-card-bg p-6 rounded-lg shadow-md h-full flex flex-col">
      <p className="text-secondary mb-6 flex-grow italic">"{text}"</p>
      <div className="flex items-center gap-4">
        {picture ? (
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image src={picture} alt={name} fill className="object-cover" />
          </div>
        ) : (
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
            {getInitials(name)}
          </div>
        )}
        <div>
          <p className="font-semibold text-foreground">{name}</p>
          <p className="text-sm text-secondary">{company}</p>
        </div>
      </div>
    </div>
  );
}
