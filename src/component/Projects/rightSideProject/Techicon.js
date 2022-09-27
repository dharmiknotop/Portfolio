const Techicon = ({ TechIcon, TechName }) => {
  return (
    <>
      <div className="TechIcon m-2">
        <span className="Icon d-flex justify-content-center" id="icon">
          {TechIcon}
          <br />
        </span>
        <div className="Icontext"> {TechName}</div>
      </div>
    </>
  )
}

export default Techicon
