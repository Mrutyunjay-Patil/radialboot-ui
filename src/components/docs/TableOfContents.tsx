// src/components/docs/TableOfContents.tsx
import React, { useEffect, useState } from 'react';

interface TOCItem {
  title: string;
  href: string;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const headings = document.querySelectorAll('h2[id], h3[id]');
    const headingIds = Array.from(headings).map(h => h.id);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0% -80% 0%' }
    );

    headings.forEach((heading) => {
      observer.observe(heading);
    });

    return () => {
      headings.forEach((heading) => {
        observer.unobserve(heading);
      });
    };
  }, []);

  return (
    <div className="toc">
      <h4 className="text-sm font-medium mb-2">On This Page</h4>
      <ul>
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className={`toc-link ${activeId === item.href.replace('#', '') ? 'active' : ''}`}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}