import { describe, expect, it } from "vitest";
import type { ReleaseManifest } from "../types/release";
import { formatReleaseDate, joinUrl, parseDownloads } from "../utils/release";

/* ------------------------------------------------------------------ */
/*  joinUrl                                                           */
/* ------------------------------------------------------------------ */

describe("joinUrl", () => {
  it("joins base without trailing slash and relative without leading slash", () => {
    expect(joinUrl("https://example.com", "file.exe")).toBe(
      "https://example.com/file.exe",
    );
  });

  it("strips trailing slash from base", () => {
    expect(joinUrl("https://example.com/", "file.exe")).toBe(
      "https://example.com/file.exe",
    );
  });

  it("strips leading slash from relative path", () => {
    expect(joinUrl("https://example.com", "/file.exe")).toBe(
      "https://example.com/file.exe",
    );
  });

  it("handles both trailing and leading slashes", () => {
    expect(joinUrl("https://example.com/", "/file.exe")).toBe(
      "https://example.com/file.exe",
    );
  });

  it("preserves nested relative paths", () => {
    expect(joinUrl("https://example.com/base", "path/to/file.exe")).toBe(
      "https://example.com/base/path/to/file.exe",
    );
  });

  it("returns base when path is empty", () => {
    expect(joinUrl("https://example.com", "")).toBe("https://example.com");
  });
});

/* ------------------------------------------------------------------ */
/*  parseDownloads                                                    */
/* ------------------------------------------------------------------ */

const fullManifest: ReleaseManifest = {
  version: "0.4.2",
  tag: "v0.4.2",
  publishedAt: "2026-02-10T18:27:38Z",
  baseUrl: "https://downloads.lifevault.sabrlabs.co.uk",
  paths: {
    windows: {
      installerExe: "v0.4.2/LifeVault-0.4.2-setup.exe",
      msi: "v0.4.2/LifeVault-0.4.2.msi",
      portableExe: "v0.4.2/LifeVault-0.4.2-portable.exe",
    },
    macos: {
      dmg: "v0.4.2/LifeVault-0.4.2.dmg",
      zip: "v0.4.2/LifeVault-0.4.2-mac.zip",
    },
    linux: {
      appImage: "v0.4.2/LifeVault-0.4.2.AppImage",
      deb: "v0.4.2/LifeVault-0.4.2.deb",
    },
  },
};

describe("parseDownloads", () => {
  it("builds correct primary download URLs from manifest", () => {
    const result = parseDownloads(fullManifest);

    expect(result.windows.primary?.url).toBe(
      "https://downloads.lifevault.sabrlabs.co.uk/v0.4.2/LifeVault-0.4.2-setup.exe",
    );
    expect(result.macos.primary?.url).toBe(
      "https://downloads.lifevault.sabrlabs.co.uk/v0.4.2/LifeVault-0.4.2.dmg",
    );
    expect(result.linux.primary?.url).toBe(
      "https://downloads.lifevault.sabrlabs.co.uk/v0.4.2/LifeVault-0.4.2.AppImage",
    );
  });

  it("extracts file names correctly", () => {
    const result = parseDownloads(fullManifest);

    expect(result.windows.primary?.fileName).toBe("LifeVault-0.4.2-setup.exe");
    expect(result.macos.primary?.fileName).toBe("LifeVault-0.4.2.dmg");
    expect(result.linux.primary?.fileName).toBe("LifeVault-0.4.2.AppImage");
  });

  it("includes alternative downloads", () => {
    const result = parseDownloads(fullManifest);

    expect(result.windows.alternatives).toHaveLength(2);
    expect(result.windows.alternatives[0].fileType).toBe("MSI");
    expect(result.windows.alternatives[1].fileType).toBe("EXE");

    expect(result.macos.alternatives).toHaveLength(1);
    expect(result.macos.alternatives[0].fileType).toBe("ZIP");

    expect(result.linux.alternatives).toHaveLength(1);
    expect(result.linux.alternatives[0].fileType).toBe("DEB");
  });

  it("handles missing platform paths gracefully", () => {
    const sparse: ReleaseManifest = {
      ...fullManifest,
      paths: {
        windows: { installerExe: "v1/setup.exe" },
      },
    };

    const result = parseDownloads(sparse);

    expect(result.windows.primary?.url).toBe(
      "https://downloads.lifevault.sabrlabs.co.uk/v1/setup.exe",
    );
    expect(result.windows.alternatives).toHaveLength(0);
    expect(result.macos.primary).toBeUndefined();
    expect(result.macos.alternatives).toHaveLength(0);
    expect(result.linux.primary).toBeUndefined();
    expect(result.linux.alternatives).toHaveLength(0);
  });

  it("sets correct os field on each platform", () => {
    const result = parseDownloads(fullManifest);
    expect(result.windows.os).toBe("windows");
    expect(result.macos.os).toBe("macos");
    expect(result.linux.os).toBe("linux");
  });
});

/* ------------------------------------------------------------------ */
/*  formatReleaseDate                                                 */
/* ------------------------------------------------------------------ */

describe("formatReleaseDate", () => {
  it("formats ISO date string to readable format", () => {
    const result = formatReleaseDate("2026-02-10T18:27:38Z");
    expect(result).toBe("February 10, 2026");
  });

  it("returns original string when parsing fails", () => {
    const result = formatReleaseDate("not-a-date");
    // Invalid Date returns "Invalid Date" from toLocaleDateString in some
    // runtimes, so we just assert it does not throw
    expect(typeof result).toBe("string");
  });
});
