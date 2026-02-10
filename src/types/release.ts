/**
 * Release manifest type definitions
 * Fetched from Cloudflare R2 at runtime
 */

export interface ReleaseManifest {
  version: string;
  tag: string;
  publishedAt: string;
  baseUrl: string;
  paths: {
    windows?: {
      installerExe?: string;
      msi?: string;
      portableExe?: string;
    };
    macos?: {
      dmg?: string;
      zip?: string;
    };
    linux?: {
      appImage?: string;
      deb?: string;
    };
  };
}

export type OSType = "windows" | "macos" | "linux" | "unknown";

export interface DownloadOption {
  label: string;
  fileName: string;
  fileType: string;
  description: string;
  url: string;
}

export interface PlatformDownloads {
  os: OSType;
  primary?: DownloadOption;
  alternatives: DownloadOption[];
}
