import { TextInput } from "@/components/text-input";
import classNames from "classnames";
import React from "react";

interface NavItem {
    link: string;
    name: string;
    description: string;
}

const list: NavItem[] = [{
    link: "/vim",
    name: "Vim",
    description: "My custom vim configuration."
}];

interface NavMenuProps {
    className?: string;
    handleSelect: (link: string) => void;
}
export const NavMenu: React.FC<NavMenuProps> = ({ className, handleSelect }) => {
    const [search, setSearch] = React.useState<string>();
    const [filteredList, setFilteredList] = React.useState<NavItem[]>([]);

    React.useEffect(() => {
        setFilteredList(list.filter((item) => (item.name + item.description).toLowerCase().includes(search?.toLowerCase() || "")).splice(0, 6));
    }, [search]);

    const renderNavItem = ({ link, name, description }: NavItem) => {
        return <div key={link} onClick={() => handleSelect(link)} className="flex flex-col hover:bg-zinc-600 p-2 cursor-pointer"><span>{name}</span><p className="text-xs">{description}</p></div>;
    }

    return (
        <div className={classNames("flex flex-col gap-4 text-white", className)}>
            <TextInput placeholder="Navigate..." suffix={<span>Esc</span>} onChange={setSearch} autoFocus className="bg-zinc-700" />
            <div className="flex flex-col divide-y divide-dashed">
                {filteredList.map((item) => renderNavItem(item))}
            </div>
        </div>
    );
};
