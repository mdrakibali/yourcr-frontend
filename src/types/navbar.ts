export interface NavLink {
  label: string;
  href: string;
}

export interface NavItemProps extends NavLink {
  onClick?: () => void;
  className?: string;
}

export interface MobileNavProps {
  navLinks: NavLink[];
}

export interface DesktopNavProps {
  navLinks: NavLink[];
  isScrolled?: boolean;
}

