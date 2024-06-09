export default function AccordionItem({
  num,
  title,
  currentOpen,
  onOpen,
  children,
}) {
  const isOpen = num === currentOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen && "open"}`} onClick={handleToggle}>
      <p className="number">{num.toString().padStart(2, "0")}</p>
      <p className="text">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
