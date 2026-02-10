import { useEffect, useRef, useState } from "react";
import type {
  DownloadOption,
  PlatformDownloads,
  ReleaseManifest,
} from "../types/release";
import {
  detectOS,
  fetchReleaseManifest,
  fetchVersions,
  formatReleaseDate,
  parseDownloads,
} from "../utils/release";

/* ---------- sub-components ---------- */

function DownloadButton({
  url,
  size,
}: {
  url: string;
  size: "primary" | "sm";
}) {
  const cls =
    size === "primary"
      ? "btn btn-primary btn-lg gap-2 shrink-0"
      : "btn btn-sm btn-outline gap-2 shrink-0";
  return (
    <a href={url} className={cls} download>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={size === "primary" ? "w-5 h-5" : "w-4 h-4"}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
        />
      </svg>
      Download
    </a>
  );
}

function PrimaryCard({ option }: { option: DownloadOption }) {
  return (
    <div className="card bg-base-100 border-2 border-primary/20 shadow-lg mb-6">
      <div className="card-body">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-1">{option.label}</h3>
            <p className="text-sm text-base-content/70 mb-2">
              {option.description}
            </p>
            <div className="flex gap-2 items-center">
              <span className="badge badge-sm">{option.fileType}</span>
              <span className="text-xs text-base-content/50">
                {option.fileName}
              </span>
            </div>
          </div>
          <DownloadButton url={option.url} size="primary" />
        </div>
      </div>
    </div>
  );
}

function AlternativeCard({ option }: { option: DownloadOption }) {
  return (
    <div className="card bg-base-100 border border-base-300 hover:border-primary/30 transition-colors">
      <div className="card-body py-4 px-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="font-medium">{option.label}</span>
              <span className="badge badge-sm badge-outline">
                {option.fileType}
              </span>
            </div>
            <p className="text-sm text-base-content/60">{option.description}</p>
          </div>
          <DownloadButton url={option.url} size="sm" />
        </div>
      </div>
    </div>
  );
}

/* ---------- platform icons ---------- */

function WindowsIcon() {
  return (
    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
      </svg>
    </div>
  );
}

function MacOSIcon() {
  return (
    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
    </div>
  );
}

function LinuxIcon() {
  return (
    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center p-1.5">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
        alt="Linux"
        className="w-full h-full"
      />
    </div>
  );
}

const platformMeta: Record<
  string,
  { label: string; Icon: () => React.JSX.Element }
> = {
  windows: { label: "Windows", Icon: WindowsIcon },
  macos: { label: "macOS", Icon: MacOSIcon },
  linux: { label: "Linux", Icon: LinuxIcon },
};

/* ---------- platform section ---------- */

function PlatformSection({
  platform,
  recommended,
}: {
  platform: PlatformDownloads;
  recommended: boolean;
}) {
  const meta = platformMeta[platform.os];
  if (!meta) return null;
  const { label, Icon } = meta;

  return (
    <div className="download-section" data-os={platform.os}>
      <div className="flex items-center gap-3 mb-6">
        <Icon />
        <h2 className="text-3xl font-bold">{label}</h2>
        {recommended && (
          <span className="badge badge-primary">Recommended for you</span>
        )}
      </div>

      {platform.primary && <PrimaryCard option={platform.primary} />}

      {platform.alternatives.length > 0 && (
        <div>
          <h4 className="text-sm font-semibold text-base-content/60 mb-3 uppercase tracking-wide">
            Other Options
          </h4>
          <div className="space-y-3">
            {platform.alternatives.map((opt) => (
              <AlternativeCard key={opt.url} option={opt} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------- main component ---------- */

type LoadState =
  | { status: "loading" }
  | { status: "error"; message: string }
  | {
      status: "ready";
      manifest: ReleaseManifest;
      downloads: {
        windows: PlatformDownloads;
        macos: PlatformDownloads;
        linux: PlatformDownloads;
      };
      versions: ReleaseManifest[];
    };

const MANIFEST_URL = "https://downloads.lifevault.sabrlabs.co.uk/latest.json";
const VERSIONS_URL = "https://downloads.lifevault.sabrlabs.co.uk/versions.json";

interface DownloadPanelProps {
  /** Build-time latest manifest (fetched server-side, no CORS issues). */
  initialManifest?: ReleaseManifest | null;
  /** Build-time versions list (fetched server-side, no CORS issues). */
  initialVersions?: ReleaseManifest[];
}

/**
 * Derive initial LoadState from build-time props.
 * If the Astro page successfully fetched data at build time we start in "ready"
 * state so the user sees content immediately. Otherwise we start in "loading"
 * and attempt a client-side fetch (which may fail due to CORS).
 */
function deriveInitialState(
  manifest?: ReleaseManifest | null,
  versions?: ReleaseManifest[],
): { state: LoadState; version: string | null } {
  if (manifest) {
    return {
      state: {
        status: "ready",
        manifest,
        downloads: parseDownloads(manifest),
        versions: versions ?? [],
      },
      version: manifest.version,
    };
  }
  return { state: { status: "loading" }, version: null };
}

export default function DownloadPanelClient({
  initialManifest,
  initialVersions,
}: DownloadPanelProps) {
  const initial = deriveInitialState(initialManifest, initialVersions);
  const [state, setState] = useState<LoadState>(initial.state);
  const [selectedVersion, setSelectedVersion] = useState<string | null>(
    initial.version,
  );
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const detectedOS = useRef(detectOS());

  const hasBuildTimeData = useRef(initial.state.status === "ready");

  /*
   * Runtime refresh: try to fetch the latest data client-side.
   * If CORS blocks the request the build-time data is still displayed.
   */
  useEffect(() => {
    let cancelled = false;

    async function load() {
      const manifest = await fetchReleaseManifest(MANIFEST_URL);
      if (cancelled || !manifest) {
        // If we already have build-time data, keep it; otherwise show error
        if (!cancelled && !hasBuildTimeData.current) {
          setState({
            status: "error",
            message:
              "Unable to load download information. Please check back later or contact support.",
          });
        }
        return;
      }

      const downloads = parseDownloads(manifest);
      const versions = await fetchVersions(VERSIONS_URL);

      if (cancelled) return;

      setState({ status: "ready", manifest, downloads, versions });
      setSelectedVersion(manifest.version);
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  /* close dropdown on outside click */
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (
        detailsRef.current &&
        !detailsRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("click", onClickOutside);
    return () => document.removeEventListener("click", onClickOutside);
  }, []);

  /* ---------- version switching ---------- */

  function handleVersionSwitch(version: string) {
    if (state.status !== "ready") return;
    setSelectedVersion(version);
    setDropdownOpen(false);

    // Find the matching manifest from versions list, or fall back to active manifest
    const versionManifest =
      state.versions.find((v) => v.version === version) ??
      (version === state.manifest.version ? state.manifest : null);

    if (!versionManifest) return;

    const downloads = parseDownloads(versionManifest);
    setState((prev) => {
      if (prev.status !== "ready") return prev;
      return { ...prev, downloads, manifest: versionManifest };
    });
  }

  /* ---------- render ---------- */

  if (state.status === "loading") {
    return (
      <section className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-base-100 via-purple-50/20 to-base-100 dark:from-base-100 dark:via-purple-900/10 dark:to-base-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Download{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-500">
                LifeVault
              </span>
            </h1>
            <p className="text-lg text-base-content/70 max-w-2xl mx-auto mb-6">
              Choose your platform and start organizing your digital life today.
              LifeVault is free to download and use.
            </p>
          </div>
          <div className="flex justify-center">
            <span className="loading loading-spinner loading-lg text-primary" />
          </div>
        </div>
      </section>
    );
  }

  if (state.status === "error") {
    return (
      <section className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-base-100 via-purple-50/20 to-base-100 dark:from-base-100 dark:via-purple-900/10 dark:to-base-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Download{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-500">
                LifeVault
              </span>
            </h1>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="alert alert-warning shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <div className="flex-1">
                <h3 className="font-bold">
                  Unable to load download information
                </h3>
                <p className="text-sm mt-1">{state.message}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* ready state */
  const { manifest, downloads, versions } = state;

  /* build ordered platform list, detected OS first */
  const defaultOrder: Array<"windows" | "macos" | "linux"> = [
    "windows",
    "macos",
    "linux",
  ];
  const os = detectedOS.current;
  const orderedKeys =
    os !== "unknown"
      ? [os, ...defaultOrder.filter((k) => k !== os)]
      : defaultOrder;

  const latestVersion =
    versions.length > 0 ? versions[0].version : manifest.version;

  return (
    <section className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-base-100 via-purple-50/20 to-base-100 dark:from-base-100 dark:via-purple-900/10 dark:to-base-100">
      <div className="container mx-auto px-4 py-16">
        {/* header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Download{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-500">
              LifeVault
            </span>
          </h1>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto mb-6">
            Choose your platform and start organizing your digital life today.
            LifeVault is free to download and use.
          </p>

          <div className="flex flex-wrap gap-3 justify-center items-center">
            <details
              ref={detailsRef}
              className="dropdown"
              open={dropdownOpen}
              onToggle={(e) =>
                setDropdownOpen((e.target as HTMLDetailsElement).open)
              }
            >
              <summary className="badge badge-lg badge-primary cursor-pointer gap-2 select-none">
                <span>
                  {selectedVersion === latestVersion
                    ? `Latest version: ${manifest.version}`
                    : `Version: ${manifest.version}`}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <ul className="dropdown-content z-[1] menu p-2 shadow-lg bg-base-100 rounded-box w-52 mt-1 border border-base-300">
                {versions.length > 0 ? (
                  versions.map((v) => (
                    <li key={v.version}>
                      <a
                        className={
                          v.version === selectedVersion ? "active" : ""
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          handleVersionSwitch(v.version);
                        }}
                      >
                        {v.version}
                        {v.version === latestVersion ? " (Latest)" : ""}
                      </a>
                    </li>
                  ))
                ) : (
                  <li>
                    <a className="active">{manifest.version} (Latest)</a>
                  </li>
                )}
              </ul>
            </details>
            <div className="badge badge-lg badge-outline">
              Released: {formatReleaseDate(manifest.publishedAt)}
            </div>
          </div>
        </div>

        {/* download sections */}
        <div className="max-w-5xl mx-auto space-y-12">
          {orderedKeys.map((key) => (
            <PlatformSection
              key={key}
              platform={downloads[key]}
              recommended={key === os}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
