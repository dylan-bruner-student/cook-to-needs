export function FloatingEditButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        borderRadius: "50%",
        border: "3px solid #003b49",
        backgroundColor: "#003b49",
        color: "white",
        position: "fixed",
        bottom: "20px",
        right: "20px",
        padding: "10px",
        cursor: "pointer",
      }}
    >
      <span className="material-symbols-outlined">edit</span>
    </button>
  );
}