import React from "react";
import { Link } from "react-router-dom";

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#684589",
    color: "#fff",
    width: "100%",
    boxSizing: "border-box",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    flexWrap: "wrap",
  },
  navbarLink: {
    textDecoration: "none",
    color: "#fff",
    fontSize: "1.5rem",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
  },
  mainLinks: {
    display: 'flex',
    justifyContent: 'center',
    flex: '1',
    flexWrap: 'wrap',
  },
  button: {
    padding: "4px 30px",
    borderRadius: "5px",
    backgroundColor: "#684589",
    color: "#fff",
    textDecoration: "none",
    border: "none",
    cursor: "pointer",
    textAlign: "center",
    margin: "5px 2px",
  },
};

function Navbar() {
  const userEmail = localStorage.getItem("userEmail");
  if(userEmail){
    console.log(userEmail);
  }

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    window.location.href = '/login'; 
  };

  return (
    <div style={styles.container}>
      <Link to="/" style={styles.navbarLink}>
        <h3 style={{ marginLeft: "30px" }}>Logo Platform</h3>
      </Link>
      <div style={styles.mainLinks}>
        <Link to="/homepage" style={styles.button}>Hompeage</Link>
        <Link to="/profile" style={styles.button}>Profile</Link>
        <Link to="/apage" style={styles.button}>A page</Link>
        <Link to="/bpage" style={styles.button}>B page</Link>
        <Link to="/apage" style={styles.button}>C page</Link>
        <Link to="/bpage" style={styles.button}>D page</Link>
      </div>
      {userEmail ? (
        <>
          <span style={{ marginRight: "10px", color: "#fff" }}>{userEmail}</span>
          <Link onClick={handleLogout} style={styles.button}>Log Out</Link>
        </>
      ) : (
        <>
          <Link to="/login" style={styles.button}>Login</Link>
          <Link to="/signup" style={styles.button}>Signup</Link>
        </>
      )}
    </div>
  );
}

export default Navbar;
