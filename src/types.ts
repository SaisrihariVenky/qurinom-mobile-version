export type TabType = 'overview' | 'products' | 'solutions' | 'company' | 'qhr';

export interface ProductItem {
  id: string;
  name: string;
  category: 'business' | 'social' | 'travel' | 'events';
  categoryLabel: string;
  badge: string;
  version: string;
  statusBadge: string;
  heroImage: string;
  catalogImage: string;
  shortDesc: string;
  longDesc: string;
  tags: string[];
  features: string[];
  telemetry: {
    label1: string;
    value1: string;
    sub1?: string;
    progress1?: number;
    label2: string;
    value2: string;
    sub2?: string;
    progress2?: number;
    status: string;
    latency: string;
  };
}

export interface DemoRequest {
  fullName: string;
  email: string;
  company: string;
  teamSize: string;
  product: string;
  notes?: string;
}
