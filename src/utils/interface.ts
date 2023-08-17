export interface LayoutProps {
  children: React.ReactNode;
}

export interface RecentProps {
  content?: any;
}

export interface RecentCardProps {
  content?: any;
}

export interface SideModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}
