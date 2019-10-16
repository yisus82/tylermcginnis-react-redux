import React from 'react';
import { useDispatch } from 'react-redux';
import { handleAddPoll } from '../actions/polls';

const AddPoll = () => {
  const [state, setState] = React.useState({
    question: '',
    a: '',
    b: '',
    c: '',
    d: '',
  });

  const dispatch = useDispatch();

  const { question, a, b, c, d } = state;

  /**
   * Handles input change event
   * @param {object} event Event
   */
  const handleInputChange = event => {
    const { value, name } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  /**
   * Checks if any value is empty
   */
  const checkEmpty = () =>
    question === '' || a === '' || b === '' || c === '' || d === '';

  /**
   * Handles submit event
   * @param {object} event Event
   */
  const handleSubmit = event => {
    event.preventDefault();
    // TODO: Redirect to /
    dispatch(handleAddPoll(state));
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3 style={{ marginBottom: 5 }}>What is your question?</h3>
      <input
        value={question}
        onChange={handleInputChange}
        name="question"
        className="input"
        type="text"
      />

      <h3>What are the options?</h3>

      <label className="label" htmlFor="a">
        A.
        <input
          value={a}
          onChange={handleInputChange}
          name="a"
          className="input"
          id="a"
          type="text"
        />
      </label>

      <label className="label" htmlFor="b">
        B.
        <input
          value={b}
          onChange={handleInputChange}
          name="b"
          className="input"
          id="b"
          type="text"
        />
      </label>

      <label className="label" htmlFor="c">
        C.
        <input
          value={c}
          onChange={handleInputChange}
          name="c"
          className="input"
          id="c"
          type="text"
        />
      </label>

      <label className="label" htmlFor="d">
        D.
        <input
          value={d}
          onChange={handleInputChange}
          name="d"
          className="input"
          id="d"
          type="text"
        />
      </label>

      <button className="btn" type="submit" disabled={checkEmpty()}>
        Submit
      </button>
    </form>
  );
};

export default AddPoll;
