import styles from './Form.module.css';
import PropTypes from 'prop-types';

const Form = ({ onButtonClick, onInputChange, onEnterKeyDown, inputSearch }) => {
  return (
    <div className={styles.mainForm}>
      <form>
        <label className={styles.mainLabel} htmlFor="character">
          Search characters:
        </label>
        <input
          type="text"
          id="character"
          value={inputSearch}
          onChange={onInputChange}
          onKeyDown={onEnterKeyDown}
          placeholder="Please enter text"
          maxLength={21}
        />
      </form>
      <button onClick={onButtonClick}>Click me</button>
    </div>
  );
};
Form.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onEnterKeyDown: PropTypes.func.isRequired,
  inputSearch: PropTypes.string.isRequired,
};
export default Form;
