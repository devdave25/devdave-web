import { Search } from "@/components/search";
import { WebLink } from "@/components/web-link";
import { DEFAULT_LINKS } from "@/constants/links";
import { Cheatsheet } from "@/containers/cheatsheet";
import { Projects } from "@/containers/projects";
import { useLocalStorage } from "@/hooks/local";
import { isUrl } from "@/utils/url";
import classNames from "classnames";
import Head from "next/head";
import React from "react";

export default function Home() {
  const [localLinks, setLocalLinks] = useLocalStorage<string[]>("links", []);
  const [filter, setFilter] = React.useState<string>("");
  const [showCheatsheet, setShowCheatsheet] = React.useState<boolean>(false);

  const filteredLinks = React.useMemo(
    () =>
      [
        ...DEFAULT_LINKS.map((l) => ({ ...l, local: false })),
        ...localLinks.map((url) => ({ url, favicon: undefined, local: true })),
      ]
        .filter(({ url }) => isUrl(url))
        .map((l) => ({ ...l, host: new URL(l.url).host?.replace("www.", "") }))
        .filter(({ host }) =>
          host.toLowerCase().includes(filter?.toLowerCase() ?? "")
        )
        .sort((a, b) => a.host.localeCompare(b.host)),
    [localLinks, filter]
  );

  const addLink = (url: string) => {
    if (localLinks.includes(url)) {
      return;
    }

    if (!isUrl(url)) {
      return;
    }

    setLocalLinks([...localLinks, url]);
  };

  const removeLink = (url: string) => {
    setLocalLinks(localLinks.filter((link) => link !== url));
  };

  const submit = (value: string, ctrl?: boolean) => {
    if (!value.length) {
      return;
    }

    if (filteredLinks.length === 1) {
      window.open(filteredLinks[0].url, ctrl ? "_blank" : "_self");
      return;
    }

    if (+value > 0 && value.length === 4) {
      window.open(`http://localhost:${value}`, ctrl ? "_blank" : "_self");
      return;
    }

    if (isUrl(value)) {
      window.open(value, ctrl ? "_blank" : "_self");
      return;
    }

    window.open(
      `https://www.google.com/search?q=${value}`,
      ctrl ? "_blank" : "_self"
    );
  };

  return (
    <>
      <Head>
        <title>DevDave</title>
        <meta name="description" content="DevDave Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-w-screen flex max-h-screen min-h-screen flex-row overflow-hidden bg-surface text-white">
        <div className="block w-full overflow-y-auto overflow-x-hidden">
          <div className="flex h-full flex-col gap-6">
            <div
              className={classNames(
                "absolute -right-4 top-[80%] z-10 -rotate-90 rounded-t-md px-2 xs:hidden",
                {
                  "bg-green-800": showCheatsheet,
                  "bg-green-900": !showCheatsheet,
                }
              )}
              onClick={() => {
                setShowCheatsheet(!showCheatsheet);
              }}
            >
              {showCheatsheet ? "close" : "open"}
            </div>
            <div className="mt-10 mx-10 flex flex-row px-0 transition-all duration-500 lg:px-16 xl:px-40 2xl:px-[25%]">
              <Search
                className="w-full"
                autoFocus
                onChange={setFilter}
                onSubmit={submit}
                onAddLink={addLink}
              />
            </div>
            <div className="px-4 xl:px-10 2xl:px-20 flex w-full flex-grow overflow-auto">
              <div className="flex w-full flex-grow flex-col justify-between px-4 overflow-auto bg-background rounded-xl">
                <div className="grid p-2 grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                  {filteredLinks.map(({ url, favicon, local }, i) => (
                    <WebLink
                      key={i}
                      url={url}
                      favicon={favicon}
                      local={local}
                      onRemoveLink={removeLink}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex max-w-full pb-4 px-4 overflow-x-auto flex-shrink-0">
              <Projects className="flex h-20 sm:h-32 2xl:h-40 flex-row gap-4" />
            </div>
          </div>
        </div>
        <div
          className={classNames(
            "w-full max-w-[500px] overflow-y-auto overflow-x-hidden bg-surface xs:relative xs:block",
            {
              absolute: showCheatsheet,
              hidden: !showCheatsheet,
            }
          )}
        >
          <Cheatsheet />
        </div>
      </div>
    </>
  );
}
