'use client';

import {
  UsersThree,
  Database,
  CalendarCheck,
  ClipboardText,
  ChatsCircle,
  HouseSimple,
  FolderOpen,
  Lightbulb,
} from '@phosphor-icons/react';
import type { Icon } from '@phosphor-icons/react';

interface Competency {
  skill: string;
  icon: Icon;
}

const COMPETENCIES: Competency[] = [
  { skill: 'Candidate & Employee Support', icon: UsersThree },
  { skill: 'ATS & Record Management', icon: Database },
  { skill: 'Interview Scheduling & Coordination', icon: CalendarCheck },
  { skill: 'HR Operations & Documentation', icon: ClipboardText },
  { skill: 'Clear Communication', icon: ChatsCircle },
  { skill: 'Remote Work Experience', icon: HouseSimple },
  { skill: 'Organization & Follow-Through', icon: FolderOpen },
  { skill: 'Problem Solving', icon: Lightbulb },
];

export default function CoreCompetencies() {
  return (
    <section className="py-12 bg-[var(--color-primary)]/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-[var(--color-neutral-dark)] mb-8 text-center">
          Core Competencies
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {COMPETENCIES.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.skill}
                className="p-4 bg-[var(--color-neutral-light)] rounded-xl text-center border border-[var(--color-neutral-medium)] hover:border-[var(--color-primary)] transition-colors"
              >
                <IconComponent
                  size={28}
                  weight="duotone"
                  className="text-[var(--color-primary)] mb-2 mx-auto"
                />
                <span className="text-sm font-medium text-[var(--color-neutral-dark)]">
                  {item.skill}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
