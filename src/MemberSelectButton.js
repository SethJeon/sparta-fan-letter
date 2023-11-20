export function MemberSelectButton({
  selectedMember,
  onSelectedMember,
  index,
  options,
  children,
}) {
  return (
    <button
      onClick={() => {
        onSelectedMember(index);
      }}
      className="member-button"
    >
      {children}
    </button>
  );
}
