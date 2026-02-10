import type {
  ReleaseManifest,
  DownloadOption,
  PlatformDownloads,
} from "../types/release";

/**
 * Safely join base URL with a relative path
 * Ensures no double slashes and proper formatting
 */
export function joinUrl(baseUrl: string, path: string): string {
  if (!path) return baseUrl;

  const base = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
  const relative = path.startsWith("/") ? path.slice(1) : path;

  return `${base}/${relative}`;
}

/**
 * Fetch the latest release manifest from R2
 * Falls back gracefully if the fetch fails
 */
export async function fetchReleaseManifest(
  manifestUrl?: string,
): Promise<ReleaseManifest | null> {
  const url =
    manifestUrl || "https://downloads.lifevault.sabrlabs.co.uk/latest.json";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.warn(
        `Failed to fetch release manifest: ${response.status} ${response.statusText}`,
      );
      return null;
    }

    const data = await response.json();

    // Basic validation
    if (!data.version || !data.baseUrl || !data.paths) {
      console.warn("Invalid release manifest schema");
      return null;
    }

    return data as ReleaseManifest;
  } catch (error) {
    console.error("Error fetching release manifest:", error);
    return null;
  }
}

/**
 * Create download option from manifest data
 */
function createDownloadOption(
  baseUrl: string,
  path: string | undefined,
  label: string,
  fileType: string,
  description: string,
): DownloadOption | null {
  if (!path) return null;

  return {
    label,
    fileName: path.split("/").pop() || path,
    fileType,
    description,
    url: joinUrl(baseUrl, path),
  };
}

/**
 * Parse release manifest into platform-specific download options
 */
export function parseDownloads(manifest: ReleaseManifest): {
  windows: PlatformDownloads;
  macos: PlatformDownloads;
  linux: PlatformDownloads;
} {
  const { baseUrl, paths } = manifest;

  // Windows downloads
  const windowsPrimary = createDownloadOption(
    baseUrl,
    paths.windows?.installerExe,
    "Windows Installer",
    "EXE",
    "Recommended for most users",
  );

  const windowsAlternatives = [
    createDownloadOption(
      baseUrl,
      paths.windows?.msi,
      "Windows MSI",
      "MSI",
      "For enterprise deployment and silent installation",
    ),
    createDownloadOption(
      baseUrl,
      paths.windows?.portableExe,
      "Windows Portable",
      "EXE",
      "No installation required, run from any folder",
    ),
  ].filter((opt): opt is DownloadOption => opt !== null);

  // macOS downloads
  const macosPrimary = createDownloadOption(
    baseUrl,
    paths.macos?.dmg,
    "macOS Installer",
    "DMG",
    "Recommended for most users",
  );

  const macosAlternatives = [
    createDownloadOption(
      baseUrl,
      paths.macos?.zip,
      "macOS ZIP",
      "ZIP",
      "Alternative download format",
    ),
  ].filter((opt): opt is DownloadOption => opt !== null);

  // Linux downloads
  const linuxPrimary = createDownloadOption(
    baseUrl,
    paths.linux?.appImage,
    "Linux AppImage",
    "AppImage",
    "Universal Linux format, works on most distributions",
  );

  const linuxAlternatives = [
    createDownloadOption(
      baseUrl,
      paths.linux?.deb,
      "Debian Package",
      "DEB",
      "For Ubuntu, Debian, and derivatives",
    ),
  ].filter((opt): opt is DownloadOption => opt !== null);

  return {
    windows: {
      os: "windows",
      primary: windowsPrimary || undefined,
      alternatives: windowsAlternatives,
    },
    macos: {
      os: "macos",
      primary: macosPrimary || undefined,
      alternatives: macosAlternatives,
    },
    linux: {
      os: "linux",
      primary: linuxPrimary || undefined,
      alternatives: linuxAlternatives,
    },
  };
}

/**
 * Format date string to readable format
 */
export function formatReleaseDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateString;
  }
}
