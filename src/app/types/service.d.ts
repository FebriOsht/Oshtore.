import { ReactNode } from 'react';

/**
 * Interface untuk item paket di katalog Landing Page
 */
export interface LandingPagePackage {
  name: string;
  price: string;
  update: string;
  features: string[];
  color: 'indigo' | 'slate';
  popular?: boolean;
}

/**
 * Interface untuk kategori jasa Landing Page (misal: Paket UMKM, Paket Bisnis)
 */
export interface LandingPageCategory {
  category: string;
  items: LandingPagePackage[];
}

/**
 * Interface untuk item solusi di katalog Business System
 */
export interface BusinessSystemItem {
  title: string;
  description: string;
  icon: ReactNode; // Mendukung komponen ikon dari Lucide React
  features: string[];
  price: string;
  bestFor: string;
}

/**
 * Type untuk statistik yang ditampilkan di Landing Page Utama
 */
export interface BusinessStat {
  label: string;
  value: string;
  icon: ReactNode;
}

/**
 * Type untuk poin keunggulan (Value Proposition)
 */
export interface ValuePoint {
  title: string;
  desc: string;
  icon: ReactNode;
}