export interface MembershipMember {
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

export interface MembershipSender {
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

export interface MembershipTeam {
  name: string;
  id: number;
  slug: string;
  permission: string;
  url: string;
  members_url: string;
  repositories_url: string;
}

export interface MembershipOrganization {
  login: string;
  id: number;
  url: string;
  repos_url: string;
  events_url: string;
  members_url: string;
  public_members_url: string;
  avatar_url: string;
}

export interface Membership {
  action: string;
  scope: string;
  member: MembershipMember;
  sender: MembershipSender;
  team: MembershipTeam;
  organization: MembershipOrganization;
}
