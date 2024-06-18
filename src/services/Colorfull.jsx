const Colorfull= WrappedComponent=>{
    const  colors = ["success","info","warning","danger","light","primary","dark"];
    let  randomColor = colors[Math.floor(Math.random()*6)];
     let className = `bg-${randomColor}`;
     return (props)=>{
        return(
<div className={className}>
    <WrappedComponent {...props}/>
</div>
        );
     }
}
export default Colorfull;