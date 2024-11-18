import React from "react";

const styles = {
  container: {
    width: "15%", 
    height: "800px", 
    border: "1px solid #ccc",
    borderRadius: "5px",
    overflowY: "auto",
    padding: "10px",
    display: "flex",
    flexDirection: "column", 
    gap: "10px", 
    backgroundColor: "#f4f4f4",
  },
  listItem: {
    width: "100%", 
    height: "50px", 
    backgroundColor: "#8e44ad",
    color: "#fff",
    fontSize: "15px",
    display:"grid",
    textAlign: "center",
    alignItems:"center",
    borderRadius: "5px",
  },
};

function AlphabetList() {
  const letters = Array.from({ length: 15 }, (_, i) =>
    String.fromCharCode(65 + i)
  );

  return (
    <div style={styles.container}>
      {letters.map((letter, index) => (
        <div key={index} style={styles.listItem}>
          {letter} 
          
        </div>
      ))}
    </div>
  );
}

export default AlphabetList;
