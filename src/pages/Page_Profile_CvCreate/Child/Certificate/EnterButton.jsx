const EnterButton = (event, setLink,onPress,linkError,setLinkError) => {
  
  if (event.key === "Enter") {
    const inputValue = event.target.value;
    if (inputValue !== "") {
      
      return onPress();

    }else{
        return (()=>setLinkError(false))
    }
  }
};
export default EnterButton;
