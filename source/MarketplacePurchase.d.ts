export interface MarketplacePurchaseMarketplacePurchaseAccount {
  type: string;
  id: number;
  login: string;
  organization_billing_email: string;
}

export interface MarketplacePurchaseMarketplacePurchasePlan {
  id: number;
  name: string;
  description: string;
  monthly_price_in_cents: number;
  yearly_price_in_cents: number;
  price_model: string;
  unit_name?: any;
  bullets: string[];
}

export interface MarketplacePurchaseMarketplace_purchase {
  account: MarketplacePurchaseMarketplacePurchaseAccount;
  billing_cycle: string;
  next_billing_date: string;
  unit_count: number;
  plan: MarketplacePurchaseMarketplacePurchasePlan;
}

export interface MarketplacePurchaseMarketplacePurchaseAccount {
  type: string;
  id: number;
  login: string;
}

export interface MarketplacePurchaseMarketplacePurchasePlan {
  id: number;
  name: string;
  description: string;
  monthly_price_in_cents: number;
  yearly_price_in_cents: number;
  price_model: string;
  unit_name?: any;
  bullets: string[];
}

export interface MarketplacePurchasePrevious_marketplace_purchase {
  account: MarketplacePurchaseMarketplacePurchaseAccount;
  billing_cycle: string;
  next_billing_date: string;
  unit_count: number;
  plan: MarketplacePurchaseMarketplacePurchasePlan;
}

export interface MarketplacePurchaseSender {
  id: number;
  login: string;
  email: string;
}

export interface MarketplacePurchase {
  action: string;
  effective_date: string;
  marketplace_purchase: MarketplacePurchaseMarketplace_purchase;
  previous_marketplace_purchase: MarketplacePurchasePrevious_marketplace_purchase;
  sender: MarketplacePurchaseSender;
}
