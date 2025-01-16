import { useEffect, useState } from "react"

interface Props {
  createBoxStyle: any
}
export const Box = (props: Props) => {

  const [style, setStyle] = useState({});

  console.log("still invoke child");


  useEffect(() => {
    console.log("box grow up");
    setStyle(props.createBoxStyle());
  }, [props.createBoxStyle]);

  return <div style={style}></div>;
}