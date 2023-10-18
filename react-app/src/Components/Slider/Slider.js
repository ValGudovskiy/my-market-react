import './Slider.css'

export default function Slider(props) {
    console.log(props.arr[0])
  return (
    <div className='slider'>
       {props.arr.map((el) => {
        return (
          <div key={el.id} className='slider_container'>
            <p>{el.id}</p>
            <img src={el.src} className="slider_img"></img>
          </div>
        );
      })}
    </div>
  );
}
