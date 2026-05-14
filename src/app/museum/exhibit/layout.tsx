import './exhibit.css';

export default function ExhibitLayout({ children }: { children: React.ReactNode }) {
  return <div className="museum-exhibit noise-overlay">{children}</div>;
}
