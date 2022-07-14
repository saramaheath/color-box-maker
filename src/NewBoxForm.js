import BoxList from "./Boxlist"

/**
 * props: height, widght, backgroundcolor
 *
 * BoxList --> NewBoxForm (just renders form)
 */

function NewBoxForm({
  height,
  width,
  backgroundColor,
  handleChange,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="height">Height: </label>
      <input
        id="height"
        name="height"
        value={height}
        onChange={handleChange}
      ></input>

      <label htmlFor="width">Width: </label>
      <input
        id="width"
        name="width"
        value={width}
        onChange={handleChange}
      ></input>

      <label htmlFor="color">Background Color: </label>
      <input
        id="color"
        name="color"
        value={backgroundColor}
        onChange={handleChange}
      ></input>
      <button>Add Box</button>
    </form>
  );
}

export default NewBoxForm;
