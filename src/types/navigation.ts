import { ComponentType } from 'react';

// Navigation Item Interface for Dashboard Sidebar
export interface DashboardNavItem {
  id: string;
  label: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
  badge?: string | number;
  roles?: Array<'owner' | 'admin' | 'member'>;
}

// Sidebar Nav Item Props
export interface SidebarNavItemProps {
  href: string;
  icon: ComponentType<{ className?: string }>;
  label: string;
  badge?: string | number;
  isActive: boolean;
}

// User Profile Menu Props
export interface UserProfileMenuProps {
  userName: string;
  roleTitle: string;
  avatarUrl?: string;
}

// Header Group Switcher Props
export interface HeaderGroupSwitcherProps {
  currentGroupName: string;
  currentRole: 'owner' | 'admin' | 'member';
}
