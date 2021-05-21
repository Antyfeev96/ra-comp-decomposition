import './Blocks.scss';

export default function Blocks(props) {
  return (
    <div className="blocks">
      {props.children}
    </div>
  )
}
