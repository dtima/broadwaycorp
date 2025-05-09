/**
 * Utility functions for handling navigation items
 */

import { NavItem } from '../components/navigation/SubNavigation';

interface LegacyNavItem {
  label: string;
  path: string;
  current?: boolean;
}

/**
 * Converts legacy navigation items to the new NavItem format
 * @param items Legacy navigation items array
 * @returns NavItem array compatible with SubNavigation component
 */
export const convertToNavItems = (items: LegacyNavItem[]): NavItem[] => {
  return items.map(item => ({
    id: item.path.replace(/\//g, '-').replace(/^-/, ''), // Generate an ID from the path
    label: item.label,
    href: item.path,
  }));
}; 