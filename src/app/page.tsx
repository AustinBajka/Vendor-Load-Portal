'use client'
import { Button } from "@mui/material";

export default function Home() {
  return (
    <div >
      <Button variant="contained" onClick={() => console.log("Example of working button")} color="primary"> Example Button</Button>
    </div>
  );
}
