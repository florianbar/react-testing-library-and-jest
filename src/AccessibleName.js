function AccessibleName() {
  return (
    <>
      <label htmlFor="name">Name:</label>
      <input id="name" type="text" />

      <label htmlFor="email">Email:</label>
      <input id="email" type="text" />

      <button>Submit</button>
      <button>Cancel</button>
    </>
  );
}

export default AccessibleName;
