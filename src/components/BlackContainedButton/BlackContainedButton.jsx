import { Button } from "@mui/material";

const BlackContainedButton = (props) => {
    return (
        <Button size={"large"} variant="contained"
            onClick={() => props.handleClick()}
            sx={{
                backgroundColor: "black",
                color: "white",
                "&:hover": {
                    backgroundColor: "black"
                }
            }}
            autoFocus>
            {props.children}
        </Button>
    )
}

export default BlackContainedButton