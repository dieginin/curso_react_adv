import reactLogo from "../assets/react.svg"

export const ReactLogo = () => {
  return (
    <img
      src={reactLogo}
      alt='React Logo'
      style={{
        bottom: "20px",
        position: "fixed",
        right: "30px",
        width: "90px",
        zIndex: 999,
      }}
    />
  )
}
