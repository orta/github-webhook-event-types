export interface TeamTeam {
  name: string;
  id: number;
  slug: string;
  description: string;
  privacy: string;
  url: string;
  members_url: string;
  repositories_url: string;
  permission: string;
}

export interface TeamOrganization {
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

export interface TeamSender {
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

export interface Team {
  action: string;
  team: TeamTeam;
  organization: TeamOrganization;
  sender: TeamSender;
}
