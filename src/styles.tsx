"use client"

export const container: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    width: 400,
    height: 400,
    position: "relative",
    marginLeft: '10rem'
    // backgroundColor: 'red'
}

// export const box: React.CSSProperties = {
//     width: '80rem',
//     height: 100,
//     // backgroundColor: "#0cdcf7",
//     backgroundColor: 'white',
//     borderRadius: "10px",
// }

export const iconsProps = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
}

export const button: React.CSSProperties = {
    backgroundColor: "#0cdcf7",
    width: 40,
    height: 40,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    zIndex: 1,
    outlineOffset: 2,
}

export const box: React.CSSProperties = {
    width: 250,
    height: 250,
    backgroundColor: "#0cdcf7",
    borderRadius: "10px",
    border: '1px solid black'
}