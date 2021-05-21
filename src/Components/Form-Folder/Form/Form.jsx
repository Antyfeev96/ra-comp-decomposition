import InputSubmit from '../InputSubmit/InputSubmit';
import InputText from '../InputText/InputText';
import './Form.scss';

export default function Input() {
  return (
    <form className="form">
      <InputText />
      <InputSubmit />
    </form>
  )
}
