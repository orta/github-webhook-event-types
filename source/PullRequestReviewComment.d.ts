export interface PullRequestReviewCommentPullRequestReviewCommentPullRequestReviewCommentPullRequestReviewCommentUser {
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

export interface PullRequestReviewCommentPullRequestReviewCommentSelf {
  href: string;
}

export interface PullRequestReviewCommentPullRequestReviewCommentHtml {
  href: string;
}

export interface PullRequestReviewCommentPullRequestReviewCommentPull_request {
  href: string;
}

export interface PullRequestReviewCommentPullRequestReviewComment_link {
  self: PullRequestReviewCommentPullRequestReviewCommentSelf;
  html: PullRequestReviewCommentPullRequestReviewCommentHtml;
  pull_request: PullRequestReviewCommentPullRequestReviewCommentPull_request;
}

export interface PullRequestReviewCommentPullRequestReviewCommentComment {
  url: string;
  id: number;
  diff_hunk: string;
  path: string;
  position: number;
  original_position: number;
  commit_id: string;
  original_commit_id: string;
  user: PullRequestReviewCommentPullRequestReviewCommentPullRequestReviewCommentPullRequestReviewCommentUser;
  body: string;
  created_at: string;
  updated_at: string;
  html_url: string;
  pull_request_url: string;
  _links: PullRequestReviewCommentPullRequestReviewComment_link;
}

export interface PullRequestReviewCommentPullRequestReviewCommentPullRequestReviewCommentPullRequestReviewCommentUser {
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

export interface PullRequestReviewCommentPullRequestReviewCommentPullRequestReviewCommentPullRequestReviewCommentUser {
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

export interface PullRequestReviewCommentPullRequestReviewCommentPullRequestReviewCommentOwner {
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

export interface PullRequestReviewCommentPullRequestReviewCommentRepo {
  id: number;
  name: string;
  full_name: string;
  owner: PullRequestReviewCommentPullRequestReviewCommentPullRequestReviewCommentOwner;
  private: boolean;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage?: any;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language?: any;
  has_issues: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  forks_count: number;
  mirror_url?: any;
  open_issues_count: number;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
}

export interface PullRequestReviewCommentHead {
  label: string;
  ref: string;
  sha: string;
  user: PullRequestReviewCommentPullRequestReviewCommentPullRequestReviewCommentPullRequestReviewCommentUser;
  repo: PullRequestReviewCommentPullRequestReviewCommentRepo;
}

export interface PullRequestReviewCommentPullRequestReviewCommentPullRequestReviewCommentPullRequestReviewCommentUser {
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

export interface PullRequestReviewCommentPullRequestReviewCommentPullRequestReviewCommentOwner {
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

export interface PullRequestReviewCommentPullRequestReviewCommentRepo {
  id: number;
  name: string;
  full_name: string;
  owner: PullRequestReviewCommentPullRequestReviewCommentPullRequestReviewCommentOwner;
  private: boolean;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage?: any;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language?: any;
  has_issues: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  forks_count: number;
  mirror_url?: any;
  open_issues_count: number;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
}

export interface PullRequestReviewCommentBase {
  label: string;
  ref: string;
  sha: string;
  user: PullRequestReviewCommentPullRequestReviewCommentPullRequestReviewCommentPullRequestReviewCommentUser;
  repo: PullRequestReviewCommentPullRequestReviewCommentRepo;
}

export interface PullRequestReviewCommentPullRequestReviewCommentSelf {
  href: string;
}

export interface PullRequestReviewCommentPullRequestReviewCommentHtml {
  href: string;
}

export interface PullRequestReviewCommentIssue {
  href: string;
}

export interface PullRequestReviewCommentPullRequestReviewCommentComment {
  href: string;
}

export interface PullRequestReviewCommentPullRequestReviewCommentReview_comment {
  href: string;
}

export interface PullRequestReviewCommentPullRequestReviewCommentReview_comment {
  href: string;
}

export interface PullRequestReviewCommentCommit {
  href: string;
}

export interface PullRequestReviewCommentStatuse {
  href: string;
}

export interface PullRequestReviewCommentPullRequestReviewComment_link {
  self: PullRequestReviewCommentPullRequestReviewCommentSelf;
  html: PullRequestReviewCommentPullRequestReviewCommentHtml;
  issue: PullRequestReviewCommentIssue;
  comments: PullRequestReviewCommentPullRequestReviewCommentComment;
  review_comments: PullRequestReviewCommentPullRequestReviewCommentReview_comment;
  review_comment: PullRequestReviewCommentPullRequestReviewCommentReview_comment;
  commits: PullRequestReviewCommentCommit;
  statuses: PullRequestReviewCommentStatuse;
}

export interface PullRequestReviewCommentPullRequestReviewCommentPull_request {
  url: string;
  id: number;
  html_url: string;
  diff_url: string;
  patch_url: string;
  issue_url: string;
  number: number;
  state: string;
  locked: boolean;
  title: string;
  user: PullRequestReviewCommentPullRequestReviewCommentPullRequestReviewCommentPullRequestReviewCommentUser;
  body: string;
  created_at: string;
  updated_at: string;
  closed_at?: any;
  merged_at?: any;
  merge_commit_sha: string;
  assignee?: any;
  milestone?: any;
  commits_url: string;
  review_comments_url: string;
  review_comment_url: string;
  comments_url: string;
  statuses_url: string;
  head: PullRequestReviewCommentHead;
  base: PullRequestReviewCommentBase;
  _links: PullRequestReviewCommentPullRequestReviewComment_link;
}

export interface PullRequestReviewCommentPullRequestReviewCommentPullRequestReviewCommentOwner {
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

export interface PullRequestReviewCommentRepository {
  id: number;
  name: string;
  full_name: string;
  owner: PullRequestReviewCommentPullRequestReviewCommentPullRequestReviewCommentOwner;
  private: boolean;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  forks_url: string;
  keys_url: string;
  collaborators_url: string;
  teams_url: string;
  hooks_url: string;
  issue_events_url: string;
  events_url: string;
  assignees_url: string;
  branches_url: string;
  tags_url: string;
  blobs_url: string;
  git_tags_url: string;
  git_refs_url: string;
  trees_url: string;
  statuses_url: string;
  languages_url: string;
  stargazers_url: string;
  contributors_url: string;
  subscribers_url: string;
  subscription_url: string;
  commits_url: string;
  git_commits_url: string;
  comments_url: string;
  issue_comment_url: string;
  contents_url: string;
  compare_url: string;
  merges_url: string;
  archive_url: string;
  downloads_url: string;
  issues_url: string;
  pulls_url: string;
  milestones_url: string;
  notifications_url: string;
  labels_url: string;
  releases_url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage?: any;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language?: any;
  has_issues: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  forks_count: number;
  mirror_url?: any;
  open_issues_count: number;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
}

export interface PullRequestReviewCommentSender {
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

export interface PullRequestReviewComment {
  action: string;
  comment: PullRequestReviewCommentPullRequestReviewCommentComment;
  pull_request: PullRequestReviewCommentPullRequestReviewCommentPull_request;
  repository: PullRequestReviewCommentRepository;
  sender: PullRequestReviewCommentSender;
}
