import AuthGuard from '@/components/_organisms/auth/AuthGurad';
import Header from '@/components/_organisms/header/Header';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGuard>
      <Header />
      {children}
    </AuthGuard>
  );
}
