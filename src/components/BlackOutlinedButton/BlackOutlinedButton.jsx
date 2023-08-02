import { Button } from "@mui/material";

const BlackOutlinedButton = (props) => {
    return (
        <Button size={"large"} variant="outlined"
            onClick={() => { props.handleClick() }}
            sx={{
                backgroundColor: "white",
                color: "black",
                borderColor: "black",
                "&:hover": {
                    borderColor: "black"
                }
            }}>
            {props.children}
        </Button>
    )
}

export default BlackOutlinedButton