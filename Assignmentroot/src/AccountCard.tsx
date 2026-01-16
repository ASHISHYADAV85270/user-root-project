interface AccountCardProps {
    label: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    selected: boolean;
    onClick: () => void;
}

const AccountCard = ({ label, icon: Icon, selected, onClick }: AccountCardProps) => {
    return (
        <div
            onClick={onClick}
            className={`
          flex items-center justify-between
          border rounded-lg p-4 cursor-pointer
          transition-all duration-200
          ${selected
                    ? "border-[#0054FD]  text-[#0054FD]"
                    : "border-[#D9E0E6] text-[#132C4A] hover:border-[#0054FD] hover:text-[#0054FD]"
                }
        `}
        >
            <div className="flex items-center gap-3">
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{label}</span>
            </div>

            <input
                type="checkbox"
                checked={selected}
                readOnly
                className="w-4 h-4 rounded-full border border-gray-300 text-[#0054FD] focus:ring-[#0054FD] cursor-pointer"
            />
        </div>
    );
};


export default AccountCard;