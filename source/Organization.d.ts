export interface OrganizationInvitation {
  id: number;
  login: string;
  email?: any;
  role: string;
}

export interface OrganizationUser {
  login: string;
  id: number;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export interface OrganizationMembership {
  url: string;
  state: string;
  role: string;
  organization_url: string;
  user: OrganizationUser;
}

export interface OrganizationOrganization {
  login: string;
  id: number;
  url: string;
  repos_url: string;
  events_url: string;
  hooks_url: string;
  issues_url: string;
  members_url: string;
  public_members_url: string;
  avatar_url: string;
  description: string;
}

export interface OrganizationSender {
  login: string;
  id: number;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export interface Organization {
  action: string;
  invitation: OrganizationInvitation;
  membership: OrganizationMembership;
  organization: OrganizationOrganization;
  sender: OrganizationSender;
}
