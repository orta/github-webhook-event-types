export interface InstallationRepositoriesAccount {
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

export interface InstallationRepositoriesInstallation {
  id: number;
  account: InstallationRepositoriesAccount;
  repository_selection: string;
  access_tokens_url: string;
  repositories_url: string;
  html_url: string;
}

export interface InstallationRepositoriesRepositories_removed {
  id: number;
  name: string;
  full_name: string;
}

export interface InstallationRepositoriesSender {
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

export interface InstallationRepositories {
  action: string;
  installation: InstallationRepositoriesInstallation;
  repository_selection: string;
  repositories_added: any[];
  repositories_removed: InstallationRepositoriesRepositories_removed[];
  sender: InstallationRepositoriesSender;
}
