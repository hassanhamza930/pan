interface ButtonProps{
    text: string;
    onClick: Function
}

function Button(props:ButtonProps) {
    return ( 
        <button onClick={()=>{props.onClick()}} className="hover:bg-purp hover:border-purp text-md text-tan border-2 bg-blue/90 border-blue hover:shadow-md transition-all duration-300 px-6 py-2 rounded-full ">
            {props.text}
        </button>
     );
}

export default Button;